<script>
    import Icon from '@iconify/svelte';

    // Product attributes to be sent as arguments to the api request and then sent to db
    let productName = "";
    let productPrice = "";
    let productQuantity = "";

    export let data;
    let productCategory = "";
    
    let productDescription = "";

    async function setNewProducts() {
        // Debugging stuffies
        console.log("Submitted");
        try {
            // The api route that sends the value as json to db (This calls the POST request)
            const result = fetch('/Admin/Products/Add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                // Function arguments basically
                body: JSON.stringify({productName, productPrice, productQuantity, productCategory, productDescription}),

            });

        } catch (error) {
            console.log(error);
        }
    }
</script>

<main>
<body>
    <div class="header">

        <a href="/Admin/Products" class="back_bttn"> <Icon icon="material-symbols:arrow-back" /> </a>
        <h2>Add Product</h2>

    </div>

    <form class="product_form">



        <div class="form_container">
            <div class="container">
                <label for="product_name">Product Name: </label>
                <input type="text" id="product_name" bind:value={productName}>

            </div>
            <div class="container" style="display: flex; flex-direction: row; justify-content: space-between;">
                <div class="priceContainer" style="margin-right: 1em;">
                    <label for="product_price">Price: </label>
                    <input type="number" id="product_price" placeholder= "LYD" bind:value={productPrice}>

                </div>
                <div class="quantityContainer" style="margin-left: 1em;">
                    <label for="product_quantity">Quantity: </label>
                    <input type="number" id="product_quantity" placeholder="#" bind:value={productQuantity}>

                </div>
            </div>  
        </div>



        
        <div class="form_container">
            <div class="container">
                <label for="product_category">Category: </label>
                <div class="categoriesMenu">
                    <select bind:value={productCategory}>

                        {#each data.Categories as category}
                            <option value={category}>{category}</option>
                        {/each}

                    </select>

                </div>
                
                
            </div>

            <div class="container">
                <label for="colors">Colors: </label>
                <div class="colorsContainer" style="display: flex; flex-direction: row;">
                    <input type="color" id="colors">
                    <input type="color" id="colors">
                    <input type="color" id="colors">
                    <input type="color" id="colors">
                    <input type="color" id="colors">
                    
                </div>
            </div>               
        </div>




        <div class="product_description_container">
            <label for="product_description">Description: </label>
            <br>
            <textarea name="product_description" id="product_description" cols = "120" rows="4" bind:value={productDescription}></textarea>

        </div>





        <div class="add_photos">
            <span> <Icon icon="material-symbols:upload" /> </span>
            <p>Drag And Drop</p>

        </div>

        <button type="button" id="confirmButton" on:click={setNewProducts}>Add</button>

    </form>

    


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


    .header {
        display: flex;
        flex-direction: row;

        margin-bottom: 1em;        

    }

    .header .back_bttn {
        color: black;
        font-size: 2em;
        margin-right: 0.5em;

    }


    .header .back_bttn:hover {
        color: hsl(199, 77%, 74%);
    }

    .product_form {
        display: flex;
        flex-direction: column;

        margin: 1em;

    }

    .product_form .form_container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        margin-bottom: 1.5em;
        
    }

    .product_form .form_container .container {
        margin: 0 2em;
        width: 50%;
    }


    .product_form .form_container .categoriesMenu {
        width: max-content;
        position: relative;

    }

    .product_form .form_container .categoriesMenu select {
        padding: 0.2em 1em;
    }

    label {
        font-weight: bold;
        
    }

    input {
        padding: 0 0.5em;
        width: 100%;
        height: 2.5em;

    }

    input:focus {
        border: solid 1px hsl(199, 77%, 74%);
        outline: solid 2px hsl(199, 77%, 74%);

    }

    .product_form .product_description_container {
        margin: 0 2em;
        
    }

    .product_form .product_description_container input {
        height: 5em;
        text-align: left;
    }

    .add_photos {
        display: flex;
        flex-direction : column;
        justify-content: center;
        align-items: center;

        margin: 2em;
        background-color: hsl(0, 0%, 65%);

        border-radius: 5px;
        min-height: 10em;

        color: black;

    }

    .add_photos span {
        color: black;
        font-size: 2em;
    }

    @media only screen and (max-width: 768px) {
        body {
            padding: 0;

        }

        .header h2{
            font-size: 1.3em;

        }

        .header .back_bttn {
            margin-right: 0.4em;
            font-size: 1.5em;

        }

        .product_form {
            margin: 0;

        }

        .product_form .form_container {
            margin-bottom: 0.8em;

        }

        .product_form .form_container .container {
            margin: 0 0.8em;

        }

        .product_form .product_description_container {
            margin: 0 0.8em;

        }

        .add_photos {
            margin: 0.8em 0.8em;

        }
    }

    textarea {
        padding: 0.3em;
        resize: none;

    }

    textarea:focus {
        border: solid 1px hsl(199, 77%, 74%);
        outline: solid 2px hsl(199, 77%, 74%);

    }

    .product_form .form_container .container .colorsContainer > input {
        margin-right: 1em;
        padding: 0;
    }

    form > button {
        width: 10em;
        height: 2em;

        margin-right: 2.5em;
         
        align-self: flex-end;

        background-color: hsl(199, 77%, 74%);
        border: solid 1px hsl(199, 77%, 74%);
        border-radius: 2px;

        cursor: pointer;
    }

    form > button:hover {
        background-color: hsl(199, 100%, 83%);

    }

    form > button:active {
        background-color:hsl(199, 100%, 83%);
    
    }

</style>