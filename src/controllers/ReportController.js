const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
    async show(req, res) {
        // return res.json({ report: true });
        // Encontrar todos usuários que tem email que termina com @gmail.com
        // Desses usuários eu quero buscar todos que moram na rua "Praça Pedro Américo"
        // Desses usuários eu quero buscar as tecnologias que começam com  Flutter

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%mail.com'
                }
            },
            include: [
                { association: 'addresses', where: {street: 'Praça Pedro Américo'} },
                {                     
                  association: 'techs', 
                  required: false,
                  where: { 
                    name: { [Op.iLike]: 'Flutter%' } 
                  } 
                }
            ]
        })

        return res.json(users);

    }
};