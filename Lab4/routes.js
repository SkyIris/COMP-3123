const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {

    res.send(`Hello Express JS`)
});

router.get('user', (req, res) => {
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.json(`first name: ${first_name}"` + `last name: ${last_name}`)
});


router.post('/user/:firstname/:lastname', (req, res) => {
    const userFirst = req.params.firstname;
    const userLast = req.params.lastname;

    res.send(`first name: ${userFirst}"` + `last name: ${userLast}"`)
});

module.exports = router;