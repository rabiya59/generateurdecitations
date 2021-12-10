//Ajouter et lier un fichier js
// Lorsqu'on clique sur le bouton Générer :
// Changer un nom par un autre nom du même théme tout en changeant la citation et l'image via la base de donnée JSON




const url = "bdd.json";


//Mettres de variables pour récuperer depuis mes fichiers films, auteurs .., le composant qui porte l'id
let btn = document.getElementById('btn'); // bouton pour génere une citation
let text = document.getElementById('nom');
let avatar = document.getElementById('avatar');
let citation = document.getElementById('citation');

//Mettre en tableau
let citations = [];



// Evement lors d'un clique bouton 
btn.addEventListener('click', updatePage);

// Recuperer toutes les citations depuis le lien json grâce à l'utilisation de l'outil fetch
fetch(url).then((data) => {
    data.json().then((data) => {
        citations = data;


    });

});


function updatePage() {
 
    // choix au hasard d'une citation parmis la liste
    let random = Math.floor(Math.random() * (citations.length - 0));
    let randomCitation = citations[random];

    // modification
    text.innerText = randomCitation['nom'];
    citation.innerText = randomCitation['citation'];

    //'image' vient de image de la bdd
    avatar.setAttribute('src', randomCitation['image']);
    //Ensuite faire disparaitre la premiere image
    avatar.style.display="inline";
}


