let express = require('express');
let router = express.Router();

// let validateSession = require('../middleware/validate-session');
const log = require('../db').import('../models/log');

router.get('/practice', function (req, res)
{
    res.send("this is a practice route");   
});

// router.post('/create', validateSession, (req, res) =>{
//     const log = {
//         description: req.body.log.description,
//         definition: req.body.log.definition,
//         result: req.body.log.result,
//         owner: req.user.id
//     }
//     log.create(journalEntry)
//     .then(journal => res.status(200).json(journal))
//     .catch(err => res.status(500).json({error: err}))
// });

// router.get("/", (req, res) => {
//     Journal.findAll()
//     .then(journals => res.status(200).json(journals))
//     .catch(err => res.status(500).json({error: err}))
// });

// router.get("/mine", validateSession, (req, res) =>{
//     let userid = req.user.id
//     Journal.findAll({
//         where: { owner: userid }
//     })
//     .then(journals => res.status(200).json(journals))
//     .catch(err => res.status(500).json({ error: err}))
// });

// router.get('/:title', function (req, res){
//     let title = req.params.title;

//     Journal.findAll({
//         where: { title: title }
//     })
//     .then(journals => res.status(200).json(journals))
//     .catch(err => res.status(500).json({ error: err }))
// });

// router.put("/update/:entryId", validateSession, function (req, res) {
//     const updateJournalEntry = {
//         title: req.body.journal.title,
//         date: req.body.journal.date,
//         entry: req.body.journal.entry,
//     };

//     const query = { where: { id: req.params.entryId, owner: req.user.id } };

//     Journal.update(updateJournalEntry, query)
//     .then((journals) => res.status(200).json(journals))
//     .catch((err) => res.status(500).json({ error: err}));
// });

// router.delete("/delete/:id", validateSession, function (req, res) {
//     const query = { where: { id: req.params.id, owner: req.user.id } };

//     Journal.destroy(query)
//     .then(() => res.status(200).json({ message: "journal Entry Removed" }))
//     .catch((err) => res.status(500).json({ error: err }));
// });
module.exports = router;