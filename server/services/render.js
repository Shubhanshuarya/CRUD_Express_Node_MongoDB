exports.homeRoutes = (req, res) => {
    res.render('index');
}

exports.add_user = (req, res) => {
    // res.send("Crud Application");
    res.render('add_user');
}

exports.update_user = (req, res) => {
    // res.send("Crud Application");
    res.render('update_user');
}