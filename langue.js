var textesEnFrancais = {
"titre1" : "Mon Portfolio - Kyannah JEANNE",
"titre2" : "Présentation",
"p1" : "Je m'appelle Kyannah, rédactrice web SEO"
};

var textsInEnglish = {
"titre1" : "My Portofolio - Kyannah JEANNE",
"titre2" : "My presentation",
"p1" : " I'm Kyannah, SEO web editor"
};

function changeLanguage(langue){
    var textes = textsInEnglish
    if (langue == "français"){
        textes = textesEnFrancais
    }
    Object.keys(textes).forEach(function(cle){
        document.querySelector('#'+cle).innerHTML = textes[cle]})
};

document.querySelectorAll("input").forEach(function(input) {
    input.addEventListener("click", function (e) {
        changeLanguage(e.srcElement.value);
    });
});




