<script>
    import Icon from '@iconify/svelte';
    
    let newCategory = "";
    let isLoading = false;

    export let data;
    let categories = data.Categories;

    
    async function addCategory() {
        try {
            if(!newCategory.trim()) return alert("Enter category name!");

            isLoading = true;
            const response = await fetch("/api/addCategory", {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json' },
                body: JSON.stringify({ newCategory })

            });

            if (response.ok) {
                categories = [...categories, newCategory];
                newCategory = "";
                
                isLoading = false;
                alert("Category Added!");

            } else alert("Could not add category!");
            
            isLoading = false;

        } catch (error) {
            console.log("Error while adding category: ", error);
            alert("Failed to add category!");
        }
    }

    async function removeCategory(categoryName) {
        const result = await fetch("/api/removeCategory", {
            method: "DELETE",
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({ category: categoryName }),

        });


        if (result.ok) {
            alert("Category Deleted!");
            categories = categories.filter(cat => cat != categoryName);
                    
        }  else alert("Failed to remove category!");
    }

</script>


<main>
<body>
    
    <input type="text" placeholder="Category name" class="category_input" bind:value={newCategory}>
    <button class="add_new_category_bttn" on:click={addCategory}>
        {#if isLoading}
            Adding...
        {:else}
            Add New Category
        {/if}
    </button>

    <div class="menu">

        <div class="menu_title">

            <h3>CATEGORY NAME</h3>

        </div>

        <div class="list">
            {#each categories as category}
                <span class="category"> <h4>{category}</h4> <span> <button class="delete_bttn" on:click={() => {removeCategory(category)}}> <Icon icon="mdi:trash" /> </button> </span></span>

            {/each}

        </div>


    </div>

</body>
</main>




<style>
    * {
        padding: 0;
        margin: 0;
        font-family: Arial;
        box-sizing: border-box;

    }

    body {
        padding: 0.5em;

    }

    .category_input {
        text-align: center;
        padding: 0.4em;

    }

    .category_input:focus {
        outline: none;
    }


    .add_new_category_bttn {
        border: none;
        border-radius: 3px;
        background-color: hsla(199, 77%, 74%, 0.8);

        cursor: pointer;
        padding: 0.5em;
        margin-bottom: 1em;

        color: black;
    }

    .add_new_category_bttn:hover {
        background-color: hsl(199, 77%, 74%);
    }

    .menu .menu_title {
        box-shadow: 0 0.1px 5px rgba(0, 0, 0, 0.2);
        padding: 0.5em;
    }

    .menu .list {
        box-shadow: 0 0.1px 5px rgba(0, 0, 0, 0.2);
        padding: 0.5em;
        
    }

    .menu .list .category {

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        padding: 0 1em 0.5em 0;
        font-size: 1.1em;
    }

    .menu .list .category .delete_bttn {
        border: none;
        border-radius: 5px;
        padding: 0.1em 1.3em 0.1em 1.3em;
        
        background-color: rgba(255, 0, 0, 0.3);
        color: rgb(190, 0, 0);

        font-size: 1.1em;
        vertical-align: middle;
        line-height: 1em;
        
    }

    .menu .list .category .delete_bttn:hover {
        background-color: rgba(255, 0, 0, 0.45);
        cursor: pointer;
    }

    @media only screen and (max-width: 768px) {
        .menu .list .category {
            padding: 0.2em 0;
        }

        .menu .list .category h4 {
            font-size: 1rem;
            
        }

        .menu .list .category .delete_bttn {
            padding: 0.1em 0.4em;

        }

    }
    

</style>