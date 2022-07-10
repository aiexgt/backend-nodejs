'use strict'

const express = require('express');
const routes = express.Router();

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        conn.query('SELECT * FROM personas', (err, rows)=>{
            if(err) return res.send(err);
            res.json(rows);
        });
    });
});

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        conn.query('INSERT INTO personas SET ?', [req.body], (err, rows)=>{
            if(err) return res.send(err);
            res.send('Persona registrada');
        });
    });
});

routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        conn.query('DELETE FROM personas WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err);
            res.send('Persona eliminada');
        });
    });
});

routes.post('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        conn.query('UPDATE personas SET ? WHERE = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err);
            res.send('Persona actualizada');
        });
    });
});


module.exports = routes;