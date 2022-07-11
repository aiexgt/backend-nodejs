'use strict'

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
    }
};

module.exports = controller;