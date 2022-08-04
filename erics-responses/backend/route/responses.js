const router = require('express').Router();
let Responses = require('/Users/hezon/Documents/GitHub/html-project/erics-responses/backend/models/responses.model');

router.route('/').get((req, res)=>{
    Responses.find()
    .then(responses => res.json(responses))
    .catch(err => res.status(400).json('error: ' + err));
})

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const question = req.body.question;
    const response = req.body.response;
    const multiple = Number(req.body.multiple);
    const date = Date.parse(req.body.date)

    const newResponse = new Exercise({
        username,
        question,
        response,
        multiple,
        date,
    });

    newResponse.save()
    .then(()=> res.json("User Added!"))
    .catch(err => res.status(400).json('Error ' + err));
});
module.exports = router;