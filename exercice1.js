// Inutile de modifier le code suivant
let articles = [
    "Orangina ",
    "Creme Fraiche ",
    "Tartiflette ",
    "Emmental ",
    "Bananes ",
    "Chips ",
    "Bieres ",
    "Pizza "
];
console.log(articles)

// Votre code à partir d'ici :
let textAdd = document.getElementById("ajouter");
let buttonAdd = document.getElementById("button-add");
let buttonSup = document.getElementById("supp");
document.getElementById("listeCourse").innerHTML = articles;

function supp (){
    articles.pop();
    document.getElementById("listeCourse").innerHTML = articles;
    document.getElementById("add&supp").innerHTML = articles
}

function add () {
    articles.push(textAdd.value);
    document.getElementById("listeCourse").innerHTML = articles
    document.getElementById("add&supp").innerHTML = articles
};


buttonSup.addEventListener("click", supp );

buttonAdd.addEventListener("click", add);
;









