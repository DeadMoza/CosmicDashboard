<script>
    import Icon from '@iconify/svelte';
    import { goto } from "$app/navigation";

    export let data;
    let allProducts = data.products;

    async function deleteProduct(productID) {
        try {
            const respone = await fetch('/api/removeProduct', {
                method: 'DELETE',
                headers: { 'Content-Type' : 'application/json'},
                body: JSON.stringify({ productID })

            })

            if(respone.ok) {
                alert("Product Deleted!");
                console.log(allProducts);
                allProducts = allProducts.filter(prod => prod.id != productID);
                console.log(allProducts);
            } else alert("Could not delete product!");
            

        } catch (error) {
            console.log("Error deleting product: ", error)
            alert("Error deleting product!");
        }
    }
</script>


<main>
<body>
    
    <button class="add_new_product_bttn" on:click={() => goto("/Admin/Products/Add")}>Add new product</button>

    <div class="menu">

        <div class="menu_title">

            <h3>PRODUCT NAME</h3>

        </div>

        <div class="list">
            {#each allProducts as product}
                <span class="product"> <h4 class="productName">{product.id}</h4> <h4>{product.price}</h4> <span> <button class="edit_bttn" on:click={() => goto(`/Admin/Products/${product.id}`)}> <Icon icon="mingcute:edit-4-fill" /> </button> <button class="delete_bttn" on:click={() => {deleteProduct(product.id)}}> <Icon icon="mdi:trash" /> </button></span></span>

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


    .add_new_product_bttn {
        border: none;
        border-radius: 3px;
        background-color: hsla(199, 77%, 74%, 0.8);

        cursor: pointer;
        padding: 0.5em;
        margin-bottom: 1em;

        color: black;
    }

    .add_new_product_bttn:hover {
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

    .menu .list .product {

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        padding: 0.5em 0.3em;
        font-size: 1.1em;

        border-top: solid 1px rgb(224, 224, 224);

    }

    .menu .list .product .productName {
        min-width: 20em;
        max-width: 35em;

        width: 100%;

        overflow: hidden;
        text-overflow: ellipsis;
    }


    .menu .list .product .edit_bttn {
        border: none;
        border-radius: 5px;
        padding: 0.1em 1.2em 0.1em 1.2em;
        
        font-size: 1.1em;
        vertical-align: middle;
        line-height: 1em;
        
    }

    .menu .list .product .delete_bttn {
        border: none;
        border-radius: 5px;
        padding: 0.1em 1.3em 0.1em 1.3em;
        
        background-color: rgba(255, 0, 0, 0.3);
        color: rgb(190, 0, 0);

        font-size: 1.1em;
        vertical-align: middle;
        line-height: 1em;
        
    }

    .menu .list .product .delete_bttn:hover {
        background-color: rgba(255, 0, 0, 0.45);
        cursor: pointer;
    }

    @media only screen and (max-width: 768px) {
        .menu .list .product {
            padding: 0.2em 0;
        }

        .menu .list .product h4 {
            font-size: 1rem;
            
        }

        .menu .list .product .edit_bttn {
            padding: 0.1em 0.3em;

        }

        .menu .list .product .delete_bttn {
            padding: 0.1em 0.4em;

        }

    }
    

</style>