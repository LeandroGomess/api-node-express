import db from '../database/db.js'

const getById = async (id) => {
    return await db.query("SELECT name, email FROM users WHERE id = ?", [id])
}

export default {getById}