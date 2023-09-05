module.exports = (validator) => {
    return (req, res, next) => {
        try{
            const { error } = validator(req.body)
            if (error) {
                return res.status(400).send(error.details[0].message + "Votre message doit contenir une lettre en majuscule, minuscule, un chiffre et un caractère spécial.")
            }
            next()
        } catch (err) {
            return res.status(400).send(err);
        }
    };
}