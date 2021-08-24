module.exports = {
    eAdmin: function (req, res, next) {
        if(req.isAuthenticated() && req.user.eAdmin == 1 ){
            return next();
        }
        
        req.flash("erro_msg", "Voce precisa ser Admin!")
        res.redirect("/")
    }
}
