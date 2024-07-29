<script>
    import Icon from '@iconify/svelte';
    function activate_option(selected_nav_option) {
        console.log("eeeee!!!!");



        
    }
    

    let username = "DeadMoza";

</script>        


    <div class="top_panel">
        
        <div class="title">
        
            <a href="Dashboard"><img src="../../../cosmic_logo_admin.svg" alt="cosmic admin logo"></a>
            <h2>CosmicAdmin</h2>
            
        </div>
        
        <p>Welcome, <b>{username}</b></p>
    </div>
    <div class="section">

        <div class="side_panel">
            
            <nav class="navbar">
                
                <a href="Dashboard" on:click={activate_option}><span > <Icon icon="ic:round-home" style="vertical-align:middle;"/> </span> Dashboard</a>
                <a href="Products" on:click={activate_option}><span> <Icon icon="material-symbols-light:box-edit" style="vertical-align:middle;"/> </span>Products</a>
                <a href="Categories" on:click={activate_option}> <span> <Icon icon="ph:shapes-fill" style="vertical-align:middle;"/> </span>Categories</a>
                <a href="Orders" on:click={activate_option}> <span> <Icon icon="icon-park-solid:view-list" style="vertical-align:middle;"/> </span>Orders</a>
                <a href="Access" on:click={activate_option}> <span> <Icon icon="heroicons:user-group-20-solid" style="vertical-align:middle;"/> </span>Access</a>
                <a href="Settings" on:click={activate_option}> <span> <Icon icon="fluent:settings-32-filled" style="vertical-align:middle;"/> </span>Settings</a>
                
            </nav>
            
        </div>
        
        <div class="content">
            
            <slot/>
            
        </div>
        
    </div>



<style>
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Arial;
        color: rgb(110, 110, 110);
        background-color: rgb(245, 245, 245);

    }

    .top_panel {

        z-index: 1;

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

    .section {
        display: flex;
        min-height: 100vh;
    }
    
    .side_panel {

        z-index: 1;
        height: 100%;
        max-width: fit-content;
        
        margin: 0 1em 0 2em;
        
    }


    .side_panel .navbar {

        flex: 1;
        display: flex;
        flex-direction: column;

        
    }
    

    .side_panel .navbar a {
        margin-bottom: 0.5em;
        padding: 0.1em 2em 0.3em 0;

        text-decoration: none;

        text-align: left;
        
        font-size: 1.3em;

        border-radius: 5px;

    }


    .side_panel .navbar a:hover {
        background-color: hsl(208, 100%, 97%);
        color: black;
    }


    .side_panel .navbar a span {

        font-size: 1.5em;
        line-height: 1em;
    }

    .content {
        flex: 3;
        
        background-color: white;
        border-radius: 10px;

        padding: 5px;
    }
    
    
</style>