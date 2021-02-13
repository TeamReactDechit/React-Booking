const sqlite3 = require('sqlite3').verbose();
const md5 = require('md5');

const DBSOURCE = "db.sqlite";
const createUsers = `CREATE TABLE users (
        id integer PRIMARY KEY AUTOINCREMENT,
        name text,
        surname text,
        email text NOT NULL UNIQUE,
        password text NOT NULL,
        birthdate INTEGER,
        type text NOT NULL,
        created_at INTEGER NOT NULL,
        updated_at INTEGER
)`;
const createLocations = `CREATE TABLE locations (
        id integer PRIMARY KEY AUTOINCREMENT,
        name text NOT NULL UNIQUE,
        created_at integer NOT NULL,
        updated_at integer
)`;
const createSeats = `CREATE TABLE seats (
        id integer PRIMARY KEY AUTOINCREMENT,
        number integer NOT NULL,
        location_id integer NOT NULL,
        created_at integer NOT NULL,
        updated_at integer,
        FOREIGN KEY (location_id)
            REFERENCES locations (id)
                ON DELETE NO ACTION
                ON UPDATE NO ACTION
)`;
const createPrenotations = `CREATE TABLE prenotations (
    id integer PRIMARY KEY AUTOINCREMENT,
    user_id integer NOT NULL,
    location_id integer NOT NULL,
    seat_id integer NOT NULL,
    start integer NOT NULL,
    end integer NOT NULL,
    status text NOT NULL,
    created_at integer NOT NULL,
    updated_at integer,
    time integer,
    FOREIGN KEY (user_id)
        REFERENCES users (id)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION,
    FOREIGN KEY (location_id)
        REFERENCES locations (id)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION,
    FOREIGN KEY (seat_id)
        REFERENCES seats (id)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
)`;

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message);
      throw err;
    }else{
        console.log('Connected to the SQLite database.');
    }
});

db.serialize(() => {
    // Queries scheduled here will be serialized.
    db.run(createUsers,
        (err) => {
            if (err) {
                // Table already created
                //console.log(err.message);
            }else{
                // Table just created, creating some rows
                let insert = 'INSERT INTO users (name, surname, email, password, birthdate, type, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?)';
                db.run(insert, ["admin-name", "admin-surname","admin@example.com",md5("admin"),Date.UTC(1975, 1, 15),"ADMIN",Date.now(),null]);
                db.run(insert, ["user-name", "user-surname","user@example.com",md5("user"),Date.UTC(1990, 11, 25),"USER",Date.now(),null]);
            }
    })
    .run(createLocations,
        (err) => {
            if (err) {
                // Table already created
                //console.log(err.message);
            }else{
                // Table just created, creating some rows
                let insert = 'INSERT INTO locations (name, created_at, updated_at) VALUES (?,?,?)';
                db.run(insert, ["room1",Date.now(),null]);
                db.run(insert, ["room2",Date.now(),null]);
                db.run(insert, ["room3",Date.now(),null]);
                db.run(insert, ["room4",Date.now(),null]);
                db.run(insert, ["room5",Date.now(),null]);
                db.run(insert, ["room6",Date.now(),null]);
            }
        })
    .run(createSeats,
        (err) => {
            if (err) {
                // Table already created
                //console.log(err.message);
            }else{
                // Table just created, creating some rows
                let insert = 'INSERT INTO seats (number, location_id, created_at, updated_at) VALUES (?,?,?,?)';
                db.run(insert, [1,1,Date.now(),null]);
                db.run(insert, [1,1,Date.now(),null]);
                db.run(insert, [1,1,Date.now(),null]);
                db.run(insert, [1,1,Date.now(),null]);
                db.run(insert, [1,1,Date.now(),null]);
                db.run(insert, [1,1,Date.now(),null]);
                db.run(insert, [1,1,Date.now(),null]);
                db.run(insert, [1,1,Date.now(),null]);
                db.run(insert, [1,1,Date.now(),null]);
                db.run(insert, [1,1,Date.now(),null]);
                //room2
                db.run(insert, [1,2,Date.now(),null]);
                db.run(insert, [1,2,Date.now(),null]);
                db.run(insert, [1,2,Date.now(),null]);
                db.run(insert, [1,2,Date.now(),null]);
                db.run(insert, [1,2,Date.now(),null]);
                db.run(insert, [1,2,Date.now(),null]);
                db.run(insert, [1,2,Date.now(),null]);
                db.run(insert, [1,2,Date.now(),null]);
                db.run(insert, [1,2,Date.now(),null]);
                db.run(insert, [1,2,Date.now(),null]);
                db.run(insert, [1,2,Date.now(),null]);
                db.run(insert, [1,2,Date.now(),null]);
                db.run(insert, [1,2,Date.now(),null]);
                db.run(insert, [1,2,Date.now(),null]);
                db.run(insert, [1,2,Date.now(),null]);
                db.run(insert, [1,2,Date.now(),null]);
                db.run(insert, [1,2,Date.now(),null]);
                db.run(insert, [1,2,Date.now(),null]);
                //room3
                db.run(insert, [1,3,Date.now(),null]);
                db.run(insert, [1,3,Date.now(),null]);
                db.run(insert, [1,3,Date.now(),null]);
                db.run(insert, [1,3,Date.now(),null]);
                //room4
                db.run(insert, [1,4,Date.now(),null]);
                db.run(insert, [1,4,Date.now(),null]);
                db.run(insert, [1,4,Date.now(),null]);
                db.run(insert, [1,4,Date.now(),null]);
                //room5
                db.run(insert, [1,5,Date.now(),null]);
                db.run(insert, [1,5,Date.now(),null]);
                db.run(insert, [1,5,Date.now(),null]);
                db.run(insert, [1,5,Date.now(),null]);
                db.run(insert, [1,5,Date.now(),null]);
                db.run(insert, [1,5,Date.now(),null]);
                //room6
                db.run(insert, [1,4,Date.now(),null]);
                db.run(insert, [1,4,Date.now(),null]);
                db.run(insert, [1,4,Date.now(),null]);
                db.run(insert, [1,4,Date.now(),null]);
            }
        })
    .run(createPrenotations,
        (err) => {
            if (err) {
                // Table already created
                //console.log(err.message);
            }else{
                // Table just created, creating some rows
                let insert = 'INSERT INTO prenotations (user_id, location_id, seat_id, start, end, status, created_at, updated_at, time) VALUES (?,?,?,?,?,?,?,?,?)';
                db.run(insert, [0,1,1,Date.UTC(2021, 4, 1, 0,0,0,0),Date.UTC(2021, 2, 1, 0,0,0,0),"ACTIVE",Date.now(),null,Date.UTC(0,0,0,10,0,0)]);
                db.run(insert, [0,1,1,Date.UTC(2021, 4, 1, 0,0,0,0),Date.UTC(2021, 2, 1, 0,0,0,0),"ACTIVE",Date.now(),null,Date.UTC(0,0,0,10,0,0)]);
                db.run(insert, [0,1,4,Date.UTC(2021, 4, 1, 0,0,0,0),Date.UTC(2021, 2, 1, 0,0,0,0),"ACTIVE",Date.now(),null,Date.UTC(0,0,0,10,0,0)]);
                db.run(insert, [0,1,5,Date.UTC(2021, 4, 1, 0,0,0,0),Date.UTC(2021, 2, 1, 0,0,0,0),"ACTIVE",Date.now(),null,Date.UTC(0,0,0,11,0,0)]);
                
                db.run(insert, [0,2,1,Date.UTC(2021, 4, 1, 0,0,0,0),Date.UTC(2021, 2, 1, 0,0,0,0),"ACTIVE",Date.now(),null,Date.UTC(0,0,0,15,0,0)]);
                db.run(insert, [0,2,1,Date.UTC(2021, 4, 1, 0,0,0,0),Date.UTC(2021, 2, 1, 0,0,0,0),"ACTIVE",Date.now(),null,Date.UTC(0,0,0,10,0,0)]);

            }
        })
});

module.exports = db