<!DOCTYPE html>

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="style.css"> 
        <script src="auteurs.js" async defer></script>

    </head>
    <body>
        <header>
            <?php 
            include("header.php")
            ?>
        </header>

        
        <div class="citations">
            <div class="films"> Auteurs
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