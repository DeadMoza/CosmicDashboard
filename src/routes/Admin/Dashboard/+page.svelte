<script>

</script>

<main>
<body>

    <h2>Orders</h2>
    <div id="orders" class="info">
        
        <div id="orders_today" class="container">

            <h3>TODAY</h3>
            <h1>10</h1>
            <p>10 orders today</p>


        </div>

        <div id="orders_month" class="container">

            <h3>THIS MONTH</h3>
            <h1>60</h1>
            <p>60 orders this month</p>

        </div>

        <div id="orders_all" class="container">

            <h3>ALL TIME</h3>
            <h1>200</h1>
            <p>200 orders in total</p>

        </div>


    </div>

    <br>
    <br>

    <h2>Refunds</h2>
    <div id="refunds" class="info">
        <div id="refunds_today" class="container">

            <h3>TODAY</h3>
            <h1>0</h1>
            <p>0 refunds today</p>

        </div>

        <div id="refunds_month" class="container">

            <h3>THIS MONTH</h3>
            <h1>2</h1>
            <p>2 refunds this month</p>

        </div>

        <div id="refunds_all" class="container">

            <h3>ALL TIME</h3>
            <h1>12</h1>
            <p>12 refunds in total</p>

        </div>

    </div>

    <br>
    <br>

    <h2>Revenue</h2>
    <div id="revenue" class= "info">

        <div id="revenue_today" class="container">

            <h3>TODAY</h3>
            <h1>200</h1>
            <p>200 lyd made today</p>

        </div>

        <div id="revenue_month" class="container">

            <h3>THIS MONTH</h3>
            <h1>3427</h1>
            <p>3427 lyd made this month</p>

        </div>

        <div id="revenue_all" class="container">

            <h3>ALL TIME</h3>
            <h1>23000</h1>
            <p>23000 lyd made in total</p>

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
        padding: 1em;
    }

    .info {

        display: flex;
        flex-direction: row;

        height: fit-content;
        
    }

    .info .container {
        border-radius: 5px;
        box-shadow: 0 0.1em 10px rgba(0, 0, 0, 0.2);

        max-width: 100%;
        width: 100%;
        min-height: 7em;

        margin: 1em 1.5em 0 1.5em;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

    }

    h1 {
        color: hsl(199, 77%, 74%);
        font-size: 3em;

    }

    h2 {
        padding-left: 1em;

    }

    p {
        color: hsl(0, 0%, 50%);

    }


    @media only screen and (max-width: 768px) {
        body {
            padding: 0;
        }

        .info .container {
            margin: 0.3em;
            text-align: center;
            justify-content: center;

        }

        h1 {
            font-size: 2em;

        }

        h2 {
            padding: 0;
            font-size: 1.4em;

        }

        h3 {
            font-size: 1em;

        }

        p {
            display: none;

        } 
        
    }
 

</style>