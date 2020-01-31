const User = require('../models/User');
const { Op } = require('sequelize');

module.exports = {
  async show(req, res) {
    //  Encontrar todos usuários que tem e-mail que termina com @gmail.com
    //  Desses usuários buscar todos que moram na rua 'Rua Délio'
    //  Desses usuários buscar as tecnologias que começam com React

    const users = await User.findAll({
      attributes: ['name', 'email'],
      where: {
        email: {
          [Op.iLike]: '%@a.com'
        }
      },
      include: [
        { association: 'addresses', where: { street: 'Rua da Amargura' } },
        {
          association: 'techs',
          required: false,
          where: {
            name: {
              [Op.iLike]: 'Node%'
            }
          }
        }
      ]
    })

    return res.json(users);
  }
}