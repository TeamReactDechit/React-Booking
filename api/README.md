# Getting Started with Express Generator

This project was bootstrapped with [Express Generator](https://expressjs.com/en/starter/generator.html).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Learn More

You can learn more in the [Express documentation](https://expressjs.com/).

## (bozza) Come configurare ed avviare correttamente il Backend
1. Scaricare la repo del progetto.
2. Tramite CLI andare nella cartella /api e lanciare npm start. Viene generato nella root del backend il db vuoto (db.sqlite).
3. Se si vuole popolare il db con dati di test, bisogna installare globalmente sequelize-cli col comando "npm i sequelize-cli -g".
4. Eseguire da CLI il comando "sequelize db:seed:all" il quale popola le tabelle del db, in ordine di nome file, rispettando i vincoli di chiave esterna. Se si vuole ripulire il db usare il comando "sequelize db:seed:undo:all".
5. Nella root del backend creare un file .env con il seguente contenuto:

<pre>
# .env

JWT_SECRET = sTrInGoNaLuNgAeCaTtIvIsSiMa1234567890

# after 1day JWT will no longer be valid, even if the signature is correct and everything is matched
JWT_EXPIRES_IN = 1d
</pre>

Sostituire la stringa della variabile di ambiente JWT_SECRET con una stringa lunga e complessa.
Il parametro JWT_EXPIRES_IN invalida il token di autenticazione, anche se è corretto, dopo una certa unità di tempo.Se il suo valore è numerico viene interpretato come fosse espresso in millisecondi altrimenti per valori espressi in stringhe si rimanda al sequente [link](https://github.com/vercel/ms).

## (bozza) Database structure
Image:

![Database](database/diagram.jpg)

> Database structure.

## (bozza) Livelli di accesso
Ci sono 3 livelli di accesso relativo agli utenti:
1. servizi senza middleware "authenticateJWT": servizio accessibile a tutti, ad esempio ad un utente ospite.

Esempio:
```javascript
router.get("/prenotations", (req, res, next) => {
    Prenotations.findAll()
    .then((prenotations) => {
        res.json({
            "message":"success",
            "data":prenotations
        });
    })
    .catch((err) => {
        res.status(400).json({"error":err.message});
    });
});
```

2. servizi con middleware "authenticateJWT": servizio accessibile ad un qualunque utente loggato, sia 'user' che 'admin'.
Se il token non è valido il servizio risponde con codice 403.

Esempio:
```javascript
router.get("/prenotations", authenticateJWT, (req, res, next) => {
    Prenotations.findAll()
    .then((prenotations) => {
        res.json({
            "message":"success",
            "data":prenotations
        });
    })
    .catch((err) => {
        res.status(400).json({"error":err.message});
    });
});
```

3. servizio con middleware "authenticateJWT" e con controllo sul user role: servizio accessibile solo da un utente 'admin' loggato.
Se il token non è valido e l'utente non è 'admin' il servizio risponde con codice 403.

Esempio:
```javascript
router.get("/prenotations", authenticateJWT, (req, res, next) => {
  
    const { role } = req.user;
    if (role !== 'admin') {
          return res.sendStatus(403);
    }

    Prenotations.findAll()
    .then((prenotations) => {
        res.json({
            "message":"success",
            "data":prenotations
        });
    })
    .catch((err) => {
        res.status(400).json({"error":err.message});
    });
});
```
