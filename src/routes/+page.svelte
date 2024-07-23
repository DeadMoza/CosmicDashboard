<script>
    import Icon from '@iconify/svelte';

</script>

<main>

<div class="page">

    <div class="container">
        <img src="../../cosmic_logo_admin.svg" alt="cosmic logo">
        
        <div class="field">

            <label for="username"> <Icon icon="fa6-solid:user" /> </label>
            <input id="username" type="text" placeholder="Enter Username" required>
        </div>

        <div class="field">

            <label for="password"><Icon icon="fa:lock" /></label>
            <input id="password" type="password" placeholder="Enter Password" required>
        </div>

            <button>Continue</button>

    </div>
</div>


</main>

<style>

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial;

    }

    .page {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 600px;

        background-color: hsl(208, 100%, 97%);

    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        background-color: white;

        margin: 1rem;
        padding: 1rem;

        height: 85%;
        width: 25%;
        
    }


    img {
        width :150px;
        height: 150px;

    }

    .container .field {
        width: 100%;
        height: 50px;
        
    }

    .field input {
        width: 100%;
        height: 100%;

        border: solid hsl(208, 100%, 97%);
        border-radius: 10px;

        text-align: center;
    }

    .field input:focus {
        background-color: hsl(208, 100%, 97%);
        border: solid hsl(199, 77%, 74%);
        outline: none;

    }

    button {
        cursor: pointer;
        border-radius: 5px;
        border: none;
        color: black;
        background-color:hsl(208, 100%, 97%);
        width: 35%;
        padding: 14px 20px;
        margin-bottom: 8px;
        box-shadow: 0 8px 0 hsl(199, 77%, 74%), 2px 12px 10px rgba(0,0,0,.35);
		transform: translate(0, -8px);
		transition: all 0.1s;

    }

    button:active {
		transform: translate(0, -2px);
		box-shadow: 0 2px 0 hsl(190, 100%, 50%), 2px 6px 10px rgba(0,0,0,.35);
	}
 
    
</style>