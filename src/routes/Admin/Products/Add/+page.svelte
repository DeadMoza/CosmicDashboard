<script>
    import Icon from '@iconify/svelte';

    export let data;
    
    let productName = "";
    let productPrice = "";
    let productQuantity = "";

    let productCategory = "";

    let productColor = "";
    let productDescription = "";

    let selectedImages = [];
    let previewImages = [];

    let isLoading = false;

    async function setNewProducts() {
        if(selectedImages == 0) return alert("No images selected!");
        if (!productName || !productPrice || !productQuantity) return alert("Name, price or quantity cannot by empty!");

        isLoading = true;
            
        let formData = new FormData();
        formData.append("productName", productName);
        formData.append("productPrice", productPrice);
        formData.append("productQuantity", productQuantity);
        formData.append("productCategory", productCategory);
        formData.append("productColor", productColor);
        formData.append("productDescription", productDescription);

        for(let file of selectedImages) {
            formData.append("images", file);

        }

        // Debugging stuffies
        console.log("Submitted");
        try {
            // The api route that sends the value as json to db (This calls the POST request)
            const respone = await fetch('/api/addProduct', {
                method: 'POST',
                body: formData

            });
            
            if(respone.ok) {
                alert("Product Uploaded!");
                selectedImages = []
                previewImages = []

                productName = "";
                productPrice = "";
                productCategory = "";
                productColor = "";
                productDescription = "";
                productQuantity = "";

                isLoading = false;
            }

        } catch (error) {
            alert("Error: could not upload product!");
            console.log("Upload Failed!: " + error);
        }


    }


    function selectFiles(event) {
        const files = Array.from(event.target.files || event.dataTransfer?.files);
        if(files.length > 0) {
            selectedImages = [...selectedImages, ...files];
            previewImages = [...previewImages, ...files.map(file => URL.createObjectURL(file))];

        }

        console.log(selectedImages);
        console.log(previewImages);
    }

    function drop(event) {
        event.preventDefault();
        selectFiles(event);

    }

    function dragOver(event) {
        event.preventDefault();

    }

    function openFilePicker() {
        document.getElementById('fileInput').click();

    }

    function removeImage(index) {
        selectedImages.splice(index, 1);
        previewImages.splice(index, 1);

        selectedImages = [...selectedImages];
        previewImages = [...previewImages];
        

    }



</script>

<main>
<body>
    <div class="header">

        <a href="/Admin/Products" class="back_bttn"> <Icon icon="material-symbols:arrow-back" /> </a>
        <h2>Add Product</h2>

    </div>

    <!-- svelte-ignore a11y-no-static-element-interactions -->
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
                <div class="colorsMenu">
                    <select name="colorsMenu" bind:value={productColor}>
                        <option value="Black">Black</option>
                        <option value="Blue">Blue</option>
                        <option value="Red">Red</option>
                        <option value="White">White</option>
                        <option value="Brown">Brown</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Green">Green</option>
                        <option value="Orange">Orange</option>
                        <option value="Pruple">Purple</option>
                        <option value="Dark Red">Dark Red</option>
                        <option value="Dark Blue">Dark Blue</option>
                        <option value="Dark Green">Dark Green</option>
                        

                    </select>
                </div>
            </div>               
        </div>




        <div class="product_description_container">
            <label for="product_description">Description: </label>
            <br>
            <textarea name="product_description" id="product_description" cols = "120" rows="4" bind:value={productDescription}></textarea>

        </div>





        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="add_photos" on:click={openFilePicker} on:drop={drop} on:dragover={dragOver}>
            <span> <Icon icon="material-symbols:upload" /> </span>
            <p>Drag And Drop</p>
            <input id="fileInput" type="file" accept="image/*" multiple on:change={selectFiles} style="display: none">

        </div>

        <div class="previewImages">
            {#each previewImages as image, i}
                 <div class="previewImage">
                    <!-- svelte-ignore a11y-img-redundant-alt -->
                    <img src={image} alt="Preview Image">
                    <button class="removeImageButton" on:click={() => {removeImage(i)}}>x</button>
                 </div>
            {/each}
        </div>

        <button type="button" id="confirmButton" on:click={setNewProducts}>
            {#if isLoading}
                Uploading...
            {:else}
                Add
            {/if}
        
        </button>

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
        padding: 0.4em 0.5em;
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
        cursor: pointer;

    }

    .add_photos span {
        color: black;
        font-size: 2em;
    }

    .previewImages {
        margin-left: 2em;

        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        margin-top: 1em;

    }

    .previewImage {
        position: relative;
        width: 150px;
        height: 150px;
        overflow: hidden;
        border-radius: 5px;


    }

    .previewImage img {
        height: 100%;
        width: 100%;
        object-fit: cover;

    }

    .removeImageButton {
        position: absolute;
        top: 0.5em;
        right: 0.5em;
        background-color: red;
        color: white;
        border: none;
        cursor: pointer;

        border-radius: 10px;
        width: 20px;
        height: 20px;
        
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

    .product_form .form_container .colorsMenu {
        width: fit-content;
        position: relative;

    }

    .product_form .form_container .colorsMenu select {
        padding: 0.4em 0.5em;
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