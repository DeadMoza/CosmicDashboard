<script>
    import Icon from '@iconify/svelte';


</script>


<main>
<body>
    
    

    <div class="menu">

        <div class="menu_title">

            <h3>All orders</h3>
            <input type="text" placeholder="Search orders" class="search">

        </div>

        <div class="orders_list">

            <div class="order"> <h4 id="order_email">elshamia12@gmail.com</h4> <p id="order_date">31/08/2024</p> <h5 id="product">Iphone 16 pro max</h5> <button id="more_details"><Icon icon="bxs:detail" /></button></div>
            <div class="order"> <h4 id="order_email">pooperface298@gmail.comzzzzzzzzzzzzzzzz</h4> <p id="order_date">31/08/2024</p> <h5 id="product">Stickers</h5> <button id="more_details"><Icon icon="bxs:detail" /></button></div>
            <div class="order"> <h4 id="order_email">zengitwerk@outlook.com</h4> <p id="order_date">31/08/2024</p> <h5 id="product">Hamburger</h5> <button id="more_details"><Icon icon="bxs:detail" /></button></div>
            <div class="order"> <h4 id="order_email">hello.firesip@com</h4> <p id="order_date">31/08/2024</p> <h5 id="product">flipflops</h5> <button id="more_details"><Icon icon="bxs:detail" /></button></div>
            <div class="order"> <h4 id="order_email">brainfart342312@outlook.com</h4> <p id="order_date">31/08/2024</p> <h5 id="product">Maglouuubaaaaa</h5> <button id="more_details"><Icon icon="bxs:detail" /></button></div>
            <div class="order"> <h4 id="order_email">smoocher9000@hotmail.com</h4> <p id="order_date">31/08/2024</p> <h5 id="product">Rei keychain</h5> <button id="more_details"><Icon icon="bxs:detail" /></button></div>
            <div class="order"> <h4 id="order_email">clouraxe@gmail.com</h4> <p id="order_date">31/08/2024</p> <h5 id="product">playstation 7</h5> <button id="more_details"><Icon icon="bxs:detail" /></button></div>
            <div class="order"> <h4 id="order_email">poop@gmail.com</h4> <p id="order_date">31/08/2024</p> <h5 id="product">Xbox 720 pro ultra max series xfx</h5> <button id="more_details"><Icon icon="bxs:detail" /></button></div>

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

    .menu .orders_list .order #order_email {
        max-width: 15em;
        width: 100%;

        overflow: hidden;
        text-overflow: ellipsis;
    } 

    .menu .orders_list .order #product {

        max-width: 50em;
        width: 100%;
    }

    .menu .orders_list .order #more_details{
        border: none;
        border-radius: 5px;
        padding: 0.3em 0.6em;
        font-size: 100%;

        
        vertical-align: middle;
        line-height: 1em;
    }

    

</style>