import user from '../../models/userModel.js'

const getUser = async (req, res) => {
    try {
        const userData = req.body
        const [rows, fields] = await user.getById(userData.id)
        if(rows.length === 0) {
            res.status(404).json({
                error: `Usuário id: ${userData.id} não Encontrado!`
            })
        } else {
            res.json({
                sucess: "Usuário Encontrado com Sucesso",
                user: rows[0]
            })
        }
    }
    
    
}

export default getUser