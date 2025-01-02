<script>
    //#region code
    import Icon from '@iconify/svelte';

    // The sidebar's on/off switch indicator
        let show_top_navbar = true;

    //The sidebar's on/off switch
    function toggle_top_navbar() {
        const navbar = document.getElementById("top_navbar");

        // check if the switch indicator is false which means the sidepanel is closed
        if(show_top_navbar) {
            navbar.style.display = "none";
            show_top_navbar = !show_top_navbar;

        }
        else {
            navbar.style.display = "block";
            show_top_navbar = !show_top_navbar;
        }
    }

    // Highlight the font and icon colors of selected sidebar options
    function activate_option(event) {
        //Grabs the target of the click event from the dom
        const selected_option = event.currentTarget;

        //Grabs all navbar options
        const options = document.querySelectorAll(".nav_option");

        //Loop through navbar options and check if it is the target of the click event
        options.forEach((option) => {
            if(option == selected_option) {
                const icon = option.firstChild;

                option.style.color = "black";
                option.style.backgroundColor = "hsl(208, 100%, 97%)";
                option.style.border = "solid transparent"
                option.style.borderBottomColor = "hsl(199, 77%, 74%)";

                icon.style.color = "hsl(199, 77%, 74%)";
                icon.style.backgroundColor = "hsl(208, 100%, 97%)";
                
            }
            else {
                const icon = option.firstChild;

                option.style.color = "rgb(110, 110, 110)";
                option.style.backgroundColor = "rgb(245, 245, 245)";
                option.style.border = "solid transparent"

                icon.style.color = "rgb(110, 110, 110)";
                icon.style.backgroundColor = "rgb(245, 245, 245)";

                
            }
        });
    }
    

    let username = "DeadMoza";
//#endregion
</script>        

<main>
<body>
    
    <div class="top_panel">
        
        <div class="title">

            <button class="menu_button" on:click={toggle_top_navbar}> <Icon icon="mingcute:menu-fill" /> </button>
        
            <img src="../../../cosmic_logo_admin.svg" alt="cosmic admin logo">
            <h2>CosmicAdmin</h2>

            
            
            
        </div>
        
        <p>Welcome, <b>{username}</b></p>

        <div class="top_navbar" id="top_navbar">
            <br>
            <a href="/Admin/Dashboard" class="nav_option" on:click={activate_option} style="background-color: hsl(208, 100%, 97%); color: hsl(199, 77%, 74%); border: solid transparent; border-bottom-color: hsl(199, 77%, 74%)"> <Icon icon="ic:round-home" /> </a>
            <a href="/Admin/Products" class="nav_option" on:click={activate_option}> <Icon icon="material-symbols-light:box-edit" /> </a>
            <a href="/Admin/Categories" class="nav_option" on:click={activate_option}> <Icon icon="ph:shapes-fill" /> </a>
            <a href="/Admin/Log" class="nav_option" on:click={activate_option}> <Icon icon="icon-park-solid:view-list" /> </a>
            <a href="/Admin/Settings" class="nav_option" on:click={activate_option}> <Icon icon="fluent:settings-32-filled" /> </a>
            
        </div>

    </div>
    <div class="section">

        <div class="side_panel" id="side_panel">
            
            <nav class="navbar">
                
                <a href="/Admin/Dashboard" class="nav_option" on:click={activate_option} style="color: black;"><span style="background-color: hsl(208, 100%, 97%); color: hsl(199, 77%, 74%)"> <Icon icon="ic:round-home" style="vertical-align:middle;"/> </span> Dashboard</a>
                <a href="/Admin/Products" class="nav_option" on:click={activate_option}><span> <Icon icon="material-symbols-light:box-edit" style="vertical-align:middle;"/> </span>Products</a>
                <a href="/Admin/Categories" class="nav_option" on:click= {activate_option}> <span> <Icon icon="ph:shapes-fill" style="vertical-align:middle;"/> </span>Categories</a>
                <a href="/Admin/Log" class="nav_option" on:click={activate_option}> <span> <Icon icon="icon-park-solid:view-list" style="vertical-align:middle;"/> </span>Log</a>
                <a href="/Admin/Settings" class="nav_option" on:click={activate_option}> <span> <Icon icon="fluent:settings-32-filled" style="vertical-align:middle;"/> </span>Settings</a>
                
            </nav>
            
        </div>
        
        <div class="content">

            <!-- The content of the page is inserted here -->
            <slot/>
            
        </div>
        
    </div>

</body>
</main>

<style>
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Arial;
        color: hsl(0, 0%, 43%);
        background-color: rgb(245, 245, 245);

    }


    .top_panel {

        z-index: 1;

        display: flex;
        flex-direction: row;

        align-items: center;
        justify-content: space-between;

        padding: 0 1.5em 1em 1em;
    }

    .menu_button {
        display: none;
        border: none;

        color: hsl(199, 77%, 74%);
        font-size: 1.5em;
    }
    @media only screen and (max-width: 825px) {
        .top_panel {
            flex-direction: column;
            font-size: 0.8em;

            padding: 0 0.8em;
        }   
    
        .menu_button {
            display: block;

        } 

        .side_panel {
            display: none;

        }
    }

    @media only screen and (min-width: 826px) {
            #top_navbar {
                display: none;

            }

            .side_panel {
                display: block;
                
            }
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


    .side_panel .navbar a span {

        font-size: 1.5em;
        line-height: 1em;
    }

    .content {
        flex: 3;
        
        background-color: white;
        border-radius: 15px;

        padding: 5px;
    }

    .top_navbar {
        font-size: 2.2em;
        margin-bottom: 0.1em;

    }

    .top_navbar a {
        padding: 0 0.3em;
        margin: 0 0.2em;

        border: solid transparent;

    }

</style>