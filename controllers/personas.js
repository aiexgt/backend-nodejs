'use strict'

const { readdirSync } = require("fs");

const controller = {

    home: (req, res)=>{
        return res.status(200).send({
            message: "Soy la home"
        })
    },

    test: (req, res)=>{
        return res.status(200).send({
            message: "Soy el test"
        })
    },

    add: (req, res)=>{
        req.getConnection((err, conn)=>{
            if(err) return res.send(err);
            conn.query('INSERT INTO personas SET ?', [req.body], (err, rows)=>{
                if(err) return res.status(500).send({message: 'Error al guardar la persona'});
                return res.status(200).send({
                    message: "Persona añadida"
                })
            })
        })
    },

    read: (req,res)=>{
        req.getConnection((err,conn)=>{
            if(err) return res.send(err);
            conn.query('SELECT * FROM personas', (err,rows)=>{
                if(err) return res.status(500).send({message: 'Error al leer las personas'});
                return res.status(200).send(rows);
            })
        })
    },

    readOne: (req, res)=>{
        req.getConnection((err,conn)=>{
            if(err) return res.send(err);
            conn.query('SELECT * FROM personas WHERE id = ?', [req.params.id], (err,rows)=>{
                if(err) return res.status(500).send({message: 'Error al leer persona'});
                return res.status(200).send(rows);
            })
        })
    },

    update: (req, res)=>{
        req.getConnection((err, conn)=>{
            if(err) return res.send(err);
            conn.query('UPDATE personas SET ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
                if(err) return res.status(500).send({message: 'Error al actualizar persona'});
                return res.status(200).send({
                    message: "Persona actualizada"
                })
            })
        })
    },

    remove: (req, res)=>{
        req.getConnection((err,conn)=>{
            if(err) return res.send(err);
            conn.query('DELETE FROM personas WHERE id = ?', [req.params.id], (err,rows)=>{
                if(err) return res.status(500).send({message: 'Error al eliminar persona'});
                return res.status(200).send({
                    message: "Persona eliminada"
                });
            })
        })
    },
};

module.exports = controller;