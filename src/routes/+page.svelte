<script>
    import Icon from '@iconify/svelte';
    import { goto } from '$app/navigation';
    
    function sign_in() {
        goto("Admin/Dashboard");
    }

</script>

<main>
<body>

    <div class="page">  
        
        <div class="container">
            
            
            <div class="back_to_store_button"> <a href=" "><Icon icon="fa-solid:store-alt" /> <Icon icon="mdi:keyboard-return" /></a> </div>
            <div class="upper_container">
                
                <img src="../../cosmic_logo_admin.svg" alt="cosmic logo"> 
                
                <h2>COSMIC</h2>

                <h3>Admin Dashboard</h3>
            </div>
            
            <div class="lower_container">
                <div class="field">
                    
                    <label for="username"> <Icon icon="fa6-solid:user" style="font-size: 1.5em; color: hsl(199, 77%, 74%);"/></label>
                    <input id="username" type="text" placeholder="Enter Username" required>
                </div>
                
                <div class="field">
                    
                    <label for="password"><Icon icon="fa:lock" style="font-size: 1.5em; color: hsl(199, 77%, 74%);" /></label>
                    <input id="password" type="password" placeholder="Enter Password" required>
                </div>
                
                
            </div>
            
            <button on:click={sign_in}>Continue</button>
            
        </div>
        
   
        
    </div>
    
    <footer>

            <a href=" ">Help</a>
            <a href=" ">Terms of service</a>
            <p> &copy; Cosmic Store</p>
        
    </footer>
        
</body>
</main>
    
<style>

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial;

    }
    
    body {
        margin: 0;
    }

    .page {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        min-height: 100vh;
        background-color: hsl(208, 100%, 97%);

    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        background-color: white;

        
        padding: 1em;

        max-width: 27em;
        width: 100%;

        min-height: 35em;
        height: 100%;
        
    }
    
    .upper_container {
        text-align: center;
    }

    .back_to_store_button {

        position: absolute;
        align-self: flex-start;

        margin: 0.5em;

        width: 1.5em;
        height: 1.5em;
    }


    img {
        width :180px;
        height: 180px;

    }

    .lower_container {
        width: 100%;
    }

    

    .lower_container .field {
        width: 100%;
        height: 50px;

        display: flex;
        align-items: center;

        margin: 10px 0;
        padding: 0 40px;
    }

    .field input {
        width: 100%;
        height: 100%;

        border: solid hsl(208, 100%, 97%);
        border-radius: 10px;

        padding: 0 5px;
        margin-left: 20px;
    }

    .field input:focus {
        background-color: hsl(208, 100%, 97%);
        border: solid hsl(199, 77%, 74%);
        outline: none;

    }

    button {
        cursor: pointer;
        border-radius: 5px;
        border: 2px solid hsl(199, 77%, 74%);
        color: black;
        background-color:white;
        width: 35%;
        padding: 14px 20px;
        margin-bottom: 8px;
        box-shadow: 0 8px 0 hsl(199, 77%, 74%), 2px 12px 10px transparent;
		transform: translate(0, -8px);
		transition: all 0.1s;

    }

    button:hover {
        background-color: hsl(208, 100%, 97%);
    }

    button:active {
		transform: translate(0, -2px);
		box-shadow: 0 2px 0 hsl(190, 100%, 50%), 2px 6px 10px transparent;
	}


    footer {
        display: flex;
        justify-content: space-evenly;

        background-color: hsl(199, 77%, 74%);
        color: hsl(208, 100%, 97%);

        width: 100%;
        bottom: 0;

        padding: 1rem;
        

    }


    a {
        text-decoration: none;
        color: hsl(208, 100%, 97%);

    }
    
    .back_to_store_button a {
        color: hsl(199, 77%, 74%);
        
        font-size: 1.5em;
    }

    a:hover {
        text-decoration: none;
        color: hsl(208, 100%, 92%)

    } 

    

    
    
</style>