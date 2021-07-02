const axios = require('axios');
const PORT = process.env.PORT || 3000;


exports.homeRoutes = (req, res) => {
    axios.get(`http://localhost:${PORT}/api/users`)
    .then(function (response) {
        console.log(response);
        res.render('index', {users: response.data});
    })
    .catch(
        err =>{
            res.send(err);
        }
    )
    
}

exports.add_user = (req, res) => {
    // res.send("Crud Application");
    res.render('add_user');
}

exports.update_user = (req, res) => {
    // res.send("Crud Application");
    axios.get(`http://localhost:${PORT}/api/users`, { params : { id : req.query.id }})
    .then(function(userdata){
        res.render("update_user", { user : userdata.data})
    })
    .catch(err =>{
        res.send(err);
    });
}