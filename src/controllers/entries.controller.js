const entries = [];

// Renderisar vista principal al usuario
const renderIndex = (req, res) => {
    res.render('index', { entries })

};

//form para la app VIEW
const renderNewEntry = (req, res) => {
    res.render('new-entry')
};


//procesa el envia PROCESS
const CreateNewEntry = (req, res) => {

    const newEntry = {
        title: req.body.title,
        content: req.body.body,
        published: new Date()
    };
    entries.push(newEntry)

    res.redirect('/')
};


module.exports = {
    renderIndex,
    renderNewEntry,
    CreateNewEntry
};