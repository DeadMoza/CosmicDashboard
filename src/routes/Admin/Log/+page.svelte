<script>
    import Icon from '@iconify/svelte';
    import { goto } from "$app/navigation";
    export let data;

    const orders = data.orders;


</script>


<main>
<body>
    
    

    <div class="menu">

        <div class="menu_title">

            <h3>All orders</h3>
            <input type="text" placeholder="Search orders" class="search">

        </div>

        <div class="orders_list">
            {#each orders as order}
                <div class="order"> <h4 class="order_email">{order.email}</h4> 
                <p class="order_date">{order.date}</p> 
                <div class="products">
                    {#each order.products as product}
                    <h5 class ="product">{product.id}</h5>         
                    {/each}

                </div>
                <h5 class="productPrice">{order.totalPrice}</h5> 
                <button on:click={() => goto(`/Admin/Log/${order.id}`)} class="more_details"><Icon icon="bxs:detail" /></button></div>
                
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

    .search {
        text-align: left;
        padding: 0.4em;
        max-width: 50%;
        width: 100%;
        

    }

    .search:focus {
        outline: none;
    }

    .menu .menu_title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0.1px 5px rgba(0, 0, 0, 0.2);
        padding: 0.4em 0.5em;
    }

    .menu .orders_list {
        box-shadow: 0 0.1px 5px rgba(0, 0, 0, 0.2);
        padding: 0.5em;
        
    }

    .menu .orders_list .order {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        margin: 0.5em 0;

    }

    .menu .orders_list .order .order_email {
        max-width: 15em;
        width: 100%;

        overflow: hidden;
        text-overflow: ellipsis;
    } 

    .menu .orders_list .order .products {

        max-width: 20em;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .order_date {
        max-width: 15em;
    }

    .productPrice {
        max-width: 5em;
        width: 100%;

        text-align: end;
    }

    .menu .orders_list .order .more_details{
        border: none;
        border-radius: 5px;
        padding: 0.3em 0.6em;
        font-size: 100%;

        
        vertical-align: middle;
        line-height: 1em;

    }

    @media only screen and (max-width: 768px) {
        .menu .orders_list .order {
            min-height: 4em;

            flex-direction: column;
            text-align: center;

            margin-bottom: 1em;
            padding-bottom: 0.5em;

            border: solid transparent;
            border-bottom-color: hsl(208, 100%, 97%);
        
        }

        .menu .orders_list .order .order_email {
            max-width: 374px;
        }
    }

    

</style>