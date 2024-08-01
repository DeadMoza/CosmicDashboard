<script>
import { goto } from "$app/navigation";
</script>

<main>
<body>
    <h2>Settings</h2>
    <br>

    <button id="Logout_bttn" on:click={() => goto("/")}>Log-out</button>


</body>
</main>

<style>

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Arial;
    }

    body {
        padding: 0.5em;
        
    }
</style>