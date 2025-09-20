export const create = (req, res, next) => {
    res.send('Handler create')
}

export const findAll = (req, res, next) => {
    res.send('Handler findAll')
}

export const findOne = (req, res, next) => {
    res.send('Handler findOne')
}

export const update = (req, res, next) => {
    res.send('Handler update')
}

export const remove = (req, res, next) => {
    res.send('Handler delete')
}

export const deleteAll = (req, res, next) => {
    res.send('Handler deleteAll')
}

export const findAllFavorite = (req, res, next) => {
    res.send('Handler create')
}

export default {create, findAll, findOne, update, remove, deleteAll, findAllFavorite}