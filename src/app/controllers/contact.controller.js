class contact {
    create (req, res, next) {
        res.send('handler create')
    }

    findAll (req, res, next) {
        res.send('handler findAll')
    }

    findOne (req, res, next) {
        res.send('handler findOne')
    }

    update (req, res, next) {
        res.send('handler update')
    }

    delete (req, res, next) {
        res.send('handler create')
    }

    deleteAll (req, res, next) {
        res.send('handler deleteAll')
    }

    findAllFavorite (req, res, next) {
        res.send('handler findAllFavorite')
    }
}

export default new contact();