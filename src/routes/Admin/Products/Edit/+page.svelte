<script>
    import Icon from '@iconify/svelte';

</script>

<main>
<body>
    <div class="header">

        <a href="/Admin/Products" class="back_bttn"> <Icon icon="material-symbols:arrow-back" /> </a> <h2>Edit Product</h2>

    </div>

    <form class="product_form">



        <div class="form_container">
            <div class="container">
                <label for="product_name">Product Name: </label>
                <input type="text" id="product_name">

            </div>
            <div class="container">
                <label for="product_price">Price: </label>
                <input type="text" id="product_price">

            </div>  
        </div>



        
        <div class="form_container">
            <div class="container">
                <label for="product_category">Category: </label>
                <input type="text" id="product_category">
                
            </div>

            <div class="container">
                <label for="product_quantity">Quantity: </label>
                <input type="text" id="product_quantity">

            </div>               
        </div>




        <div class="product_describtion_container">
            <label for="product_describtion">Describtion: </label>
            <input type="text" id="product_describtion">

        </div>


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

    .product_form .product_describtion_container {
        margin: 0 2em;
        
    }

    .product_form .product_describtion_container input {
        height: 5em;
        text-align: left;
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

        .product_form .product_describtion_container {
            margin: 0 0.8em;

        }

    }



</style>