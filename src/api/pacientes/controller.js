const Paciente = require('./model');

// ==> Métodos

class PacienteController {

  static async criarPaciente(req, res) {
    const { nome, idade } = req.body;

    Paciente.create({ nome, idade }).then(data => {
      return res.send({ 'mensagem': 'cadastro realizado' })
    }).catch((error) => {
      return res.send(error);
    })
  }

  static async listarPaciente(req, res) {
    Paciente.findAll().then(data => {
      return res.send(data)
    }).catch((error) => {
      return res.send(error);
    })
  };

  static async exibirPaciente(req, res) {
    const { id } = req.params;

    Paciente.findByPk(id).then(data => {
      return res.send(data)
    }).catch((error) => {
      return res.send(error);
    })
  };

}

module.exports = PacienteController;