<!DOCTYPE html>
<html> 
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Générateur de Citations</title>
        <meta name="description" content="">
        <link rel=”stylesheet” href=”https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css”>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="style.css"> 
        <script src="script.js" async defer></script>
    </head>
    <body>
        <header>
            <?php 
            include("header.php")
            ?>
        </header>

        
        
        <div class="citations">
            <div class="films"> Films
            <div >
                <h3 id="nom"></h3>
                <img id="avatar" src=""/>
                <p id="citation"></p>
                <button id="btn">Générer une citation</button>
                
           </div> 
        
        </div>

        </div>
       <?php
       include("footer.php");
       ?>
    </body>
</html>