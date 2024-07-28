<script>
    import Icon from '@iconify/svelte';

    let username = "DeadMoza";

</script>        
    
    <div class="top_panel">
        
        <div class="title">
        
            <a href="Dashboard"><img src="../../../cosmic_logo_admin.svg" alt="cosmic admin logo"></a>
            <h2>CosmicAdmin</h2>
            
        </div>
        
        <p>Welcome, <b>{username}</b></p>
    </div>
    
    <div class="side_panel">
        
        <nav class="navbar">
            
            <a href="Dashboard"><span > <Icon icon="mi:home" /> </span> Dashboard</a>
            <a href="Products"><span> <Icon icon="material-symbols:box-edit-outline" /> </span>Products</a>
            <a href="Categories"> <span> <Icon icon="ph:shapes-bold" /> </span>Categories</a>
            <a href="Orders"> <span> <Icon icon="majesticons:list-box-line" /> </span>Orders</a>
            <a href="Access"> <span> <Icon icon="heroicons:user-group" /> </span>Access</a>
            <a href="Settings"> <span> <Icon icon="fluent:settings-48-regular" /> </span>Settings</a>
            
        </nav>
        
    </div>


<slot/>

<style>
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Arial;

    }

    .top_panel {
        display: flex;
        flex-direction: row;

        align-items: center;
        justify-content: space-between;

        padding: 0 1em 1em 1em;
    }

    
    .top_panel .title {
        display: flex;
        flex-direction: row;

        align-items: center;
    }

    .top_panel img {
        width: 6em;
        height: 6em;

    }
    
    .side_panel {
        height: 100%;
        max-width: fit-content;
        
        padding: 0 1em 0 2em;
    }


    .side_panel .navbar {

        display: flex;
        flex-direction: column;

        
    }

    .side_panel .navbar span {

        font-size: 1.3em;
    }


    .side_panel .navbar a {
        margin-bottom: 1em;
        padding: 0.1em;

        text-decoration: none;
        color: black;

        text-align: left;
        font-size: 1.3em;

        border-radius: 5px;

    }

    .side_panel .navbar a:hover {
        background-color: hsl(208, 100%, 97%);
    }

    
    
</style>