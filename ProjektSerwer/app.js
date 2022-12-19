const express = require('express');

const app = express();

const host = "127.0.0.1";

const port = 5555;

const reszta = __dirname + "\\reszta";

const osoby = [
    {
        imie: "Jan",
        nazwisko: "Lis",
        wiek: 20,
        plec: 'm'
    },
    {
        imie: "Janina",
        nazwisko: "Lis",
        wiek: 21,
        plec: 'k'
    },
    {
        imie: "Marek",
        nazwisko: "Żubr",
        wiek: 22,
        plec: 'm'
    },
    {
        imie: "Maria",
        nazwisko: "Żubr",
        wiek: 23,
        plec: 'k'
    },
    {
        imie: "Robert",
        nazwisko: "Kuna",
        wiek: 24,
        plec: 'm'
    },
    {
        imie: "Renata",
        nazwisko: "Kuna",
        wiek: 24,
        plec: 'k'
    },
    {
        imie: "Pamela",
        nazwisko: "Flaming",
        wiek: 23,
        plec: 'k'
    },
    {
        imie: "Paul",
        nazwisko: "Flaming",
        wiek: 22,
        plec: 'm'
    },
    {
        imie: "Władek",
        nazwisko: "Lama",
        wiek: 21,
        plec: 'm'
    },
    {
        imie: "Władzia",
        nazwisko: "Lama",
        wiek: 20,
        plec: 'k'
    },
]

app.listen(port, ()=>{
    console.log(`Serwer jest dostepny pod adresem ${host}:${port}`)
});

app.use(express.static(reszta));

app.get('/kobiety', (req, res) => {
    
    let dane = [];
    for(let i=0; i<osoby.length; i++)
    {
        
        if(osoby[i].plec=='k')
        {
            dane.push(osoby[i])
        }
    }
    res.json(dane)
})

app.get('/mezczyzni', (req, res) => {
    
    let dane = [];
    for(let i=0; i<osoby.length; i++)
    {
        
        if(osoby[i].plec=='m')
        {
            dane.push(osoby[i])
        }
    }
    res.json(dane)
})

app.get('/wszyscy', (req, res) => {
    
    let dane = [];
    for(let i=0; i<osoby.length; i++)
    {
        dane.push(osoby[i])
    }
    res.json(dane)
})

app.post('/wybor/:zmienna', (req, res) => {
    const {zmienna} = req.params;
    if(isNaN(parseInt(zmienna)))
    {     
        let dane = [];
        console.log("string")
        for(let i=0; i<osoby.length; i++)
        {
            if(osoby[i].imie.includes(zmienna)||osoby[i].nazwisko.includes(zmienna))
                dane.push(osoby[i])
        }
        res.json(dane)
    }
    else
    {
        let dane = [];
        for(let i=0; i<osoby.length; i++)
        {
            if(osoby[i].wiek==zmienna)
                dane.push(osoby[i])
        }
        res.json(dane)
    }
    
})