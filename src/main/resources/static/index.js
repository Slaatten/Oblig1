let array = [];
function kjopBillett() {
    let film = document.getElementById('movie').value;
    let antall = document.getElementById('antall').value;
    let fornavn = document.getElementById('fornavn').value;
    let etternavn = document.getElementById('etternavn').value;
    let telefon = document.getElementById('telefon').value;
    let epost = document.getElementById('epost').value;

    if (film === ""){
        alert("Velg en film");
        return;
    }
    if (antall === "") {
        alert("Velg antall billetter");
        return;
    }
    if (fornavn === "") {
        alert("Oppgi fornavn");
        return;
    }
    if (etternavn === "") {
        alert("Oppgi etternavn");
        return;
    }

    let telefonRegex = /^\d{8}$/;
    if (!telefonRegex.test(telefon)){
        alert("Oppgi et gyldig telefonnummer");
        return;
    }
    let epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!epostRegex.test(epost)){
        alert("Oppgi en gyldig epostadresse");
        return;
    }

    let billett = {
        film : film,
        antall : antall,
        fornavn : fornavn,
        etternavn : etternavn,
        telefon : telefon,
        epost : epost
    };
    array.push(billett);

    visBilletter();

    document.getElementById('movie').value = "";
    document.getElementById('antall').value = "";
    document.getElementById('fornavn').value = "";
    document.getElementById('etternavn').value = "";
    document.getElementById('telefon').value = "";
    document.getElementById('epost').value = "";
}
function visBilletter() {
    let billetterDiv = document.getElementById('vis');
    billetterDiv.innerHTML = "<h2>Alle billetter</h2>";
    for (let i = 0; i < array.length; i++) {
        let billett = array[i];
        billetterDiv.innerHTML += "<p>Film: " + billett.film + " Antall: " +
            billett.antall + " Fornavn: " + billett.fornavn + " Etternavn: " +
            billett.etternavn + " Telefon: " + billett.telefon + " Epost: " +
            billett.epost +
            "</p>"
    }
}
function slett() {
    array = [];
    visBilletter();
}