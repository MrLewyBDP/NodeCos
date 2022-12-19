function kob()
{
    fetch('/kobiety').then(odp => odp.json())
    .then(dane => tabelka(dane))
}

function mez()
{
    fetch('/mezczyzni').then(odp => odp.json())
    .then(dane => tabelka(dane))
}

function wszyscy()
{
    fetch('/wszyscy').then(odp => odp.json())
    .then(dane => tabelka(dane))
}

function wyborW()
{
    let wiek = document.getElementById("wiek").value
    fetch('/wybor/' + wiek, {method: 'POST'}).then(odp => odp.json())
    .then(dane => tabelka(dane))
}

function wyborT()
{
    let tekst = document.getElementById("tekst").value
    console.log(tekst)
    fetch('/wybor/' + tekst, {method: 'POST'}).then(odp => odp.json())
    .then(dane => tabelka(dane))
}

function tabelka(dane)
{
    let body = document.querySelector("body")
    if(document.querySelector("table")!=null)
    {
        body.removeChild(document.querySelector("table"))
    }
    let table = document.createElement("table")
    let wiersz = document.createElement("tr")
    let komorka1 = document.createElement("th")
    let komorka2 = document.createElement("th")
    let komorka3 = document.createElement("th")
    let komorka4 = document.createElement("th")
    komorka1.innerText = "Imię"
    komorka2.innerText = "Nazwisko"
    komorka3.innerText = "Wiek"
    komorka4.innerText = "Płeć"
    wiersz.appendChild(komorka1)
    wiersz.appendChild(komorka2)
    wiersz.appendChild(komorka3)
    wiersz.appendChild(komorka4)
    table.appendChild(wiersz)
    for(osoba of dane)
    {
        wiersz = document.createElement("tr")
        komorka1 = document.createElement("td")
        komorka2 = document.createElement("td")
        komorka3 = document.createElement("td")
        komorka4 = document.createElement("td")
        komorka1.innerText = osoba.imie
        komorka2.innerText = osoba.nazwisko
        komorka3.innerText = osoba.wiek
        komorka4.innerText = osoba.plec
        wiersz.appendChild(komorka1)
        wiersz.appendChild(komorka2)
        wiersz.appendChild(komorka3)
        wiersz.appendChild(komorka4)
        table.appendChild(wiersz)
    }
    
    body.appendChild(table)
}
