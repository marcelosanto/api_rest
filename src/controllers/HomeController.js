import Aluno from '../models/Aluno'

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Gabriel',
      sobrenome: 'Santos',
      email: 'rocha@gamicl.com',
      idade: 9,
      peso: 36,
      altura: 1.40,
    })
    res.json({
      novoAluno,
    })
  }
}

export default new HomeController()
