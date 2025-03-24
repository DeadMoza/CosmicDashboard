<script>
    import Icon from "@iconify/svelte";

    export let data;

</script>

<main>
<body>
    <div class="orderOverview">
        <h3>Full name: {data.fullName}</h3>
        <h3>Phone number: {data.phoneNumber}</h3>
        <h3>Email address: {data.email}</h3>
        <h3>Total price: {data.totalPrice}</h3>
        <h3>Date: {data.date}</h3>
        <h3>User ID: {data.userID}</h3>

    </div>

    <div class="products">
        {#each data.products as product}
            <div class="productCard">
                <h4>{product.id}</h4>
                <h4>{product.purchaseQuantity}&times{product.price} LYD</h4>
                <h3>Total: {product.totalPrice} LYD</h3>
            </div>
        {/each}
    </div>
</body>
</main>

<style>

    .products {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;

        column-gap: 5px;
    }

    .productCard {
        min-height: 10em;
        min-width: 10em;

        max-height: 15em;
        max-width: 15em;

        height: 100%;
        width: 100%;

        background-color: #e1e1e1;
        border-radius: 5px;
        padding: 5px;

        text-align: center;
    }


</style>