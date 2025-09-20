class contact {
    // [POST] /api/contacts/
    create (req, res, next) {
        res.send('handler create')
    }
    // [GET] /api/contacts/
    findAll (req, res, next) {
        res.send('handler findAll')
    }
    // [GET] /api/contacts/:id
    findOne (req, res, next) {
        res.send('handler findOne')
    }
    // [PUT] /api/contacts/:id
    update (req, res, next) {
        res.send('handler update')
    }
    // [DELETE] /api/contacts/:id
    delete (req, res, next) {
        res.send('handler create')
    }
    // [DELETE] /api/contacts/
    deleteAll (req, res, next) {
        res.send('handler deleteAll')
    }
    // [GET] /api/contacts/favorite
    findAllFavorite (req, res, next) {
        res.send('handler findAllFavorite')
    }
}

export default new contact();