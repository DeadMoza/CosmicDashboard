<script>
    import Icon from '@iconify/svelte';
    import { goto } from "$app/navigation";

</script>


<main>
<body>
    
    <button class="add_new_product_bttn" on:click={() => goto("/Admin/Products/Add")}>Add new product</button>

    <div class="menu">

        <div class="menu_title">

            <h3>PRODUCT NAME</h3>

        </div>

        <div class="list">

            <span class="product"> <h4>Iphone 15 pro max</h4> <span> <button class="edit_bttn" on:click={() => goto("/Admin/Products/Edit")}> <Icon icon="mingcute:edit-4-fill" /> </button> <button class="delete_bttn"> <Icon icon="mdi:trash" /> </button></span></span>
            <span class="product"> <h4>Rei keychain</h4> <span> <button class="edit_bttn" on:click={() => goto("/Admin/Products/Edit")}> <Icon icon="mingcute:edit-4-fill" /> </button> <button class="delete_bttn"> <Icon icon="mdi:trash" /> </button></span></span>
            <span class="product"> <h4>Sticker</h4> <span> <button class="edit_bttn" on:click={() => goto("/Admin/Products/Edit")}> <Icon icon="mingcute:edit-4-fill" /> </button> <button class="delete_bttn"> <Icon icon="mdi:trash" /> </button></span></span>
            <span class="product"> <h4>Wall mount</h4> <span> <button class="edit_bttn" on:click={() => goto("/Admin/Products/Edit")}> <Icon icon="mingcute:edit-4-fill" /> </button> <button class="delete_bttn"> <Icon icon="mdi:trash" /> </button></span></span>
            <span class="product"> <h4>Shirt</h4> <span> <button class="edit_bttn" on:click={() => goto("/Admin/Products/Edit")}> <Icon icon="mingcute:edit-4-fill" /> </button> <button class="delete_bttn"> <Icon icon="mdi:trash" /> </button></span></span>
            <span class="product"> <h4>i put the new forhis on the jeep i travel to the bungo bangies el tangoobee</h4> <span> <button class="edit_bttn" on:click={() => goto("/Admin/Products/Edit")}> <Icon icon="mingcute:edit-4-fill" /> </button> <button class="delete_bttn"> <Icon icon="mdi:trash" /> </button></span></span>


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

        padding: 0 1em 0.5em 0;
        font-size: 1.1em;
    }

    .menu .list .product h4{
        max-width: 280px;
        max-height: 21px;

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