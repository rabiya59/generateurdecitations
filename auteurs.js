
// Auteurs
const url = "bddauteurs.json";


let btn = document.getElementById('btn');
let text = document.getElementById('nom');
let avatar = document.getElementById('avatar');
let citation = document.getElementById('citation');

let citations = [];
btn.addEventListener('click', updatePage);
fetch(url).then((data) => {
    data.json().then((data) => {
      citations = data;
        
    });

});
function updatePage() {

   
    let random = Math.floor(Math.random() * (citations.length - 0));
    let randomCitation = citations[random];

    
    text.innerText = randomCitation['nom'];
    citation.innerText = randomCitation['citation'];

    avatar.setAttribute('src', randomCitation['image'])
     //Ensuite faire disparaitre la premiere image
     avatar.style.display="inline";
    }
    

