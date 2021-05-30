const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db-desafio2-docker',
    user: 'root',
    password: 'root',
    database: 'desafio2'
};

const mysql = require('mysql');

app.get('/', (req, res) => {
    const conn = mysql.createConnection(config)
    let sql = `INSERT INTO people(name) VALUES('Wellington')`
    conn.query(sql)
    
    sql = `SELECT * FROM people`
    conn.query(sql, (err, rows) => {
        if (err) throw err;
        
        let names = '<br />';
        for (var i in rows) {
            names += '- ID: ' + rows[i].id + ' - Name: ' + rows[i].name + '<br />';
        }
        const title = '<h1>Full Cycle Rokcs!</h1>'

        res.send(title + names)
    })
    conn.end()
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})