class TituloModel {
  constructor(obj) {
    obj = obj || {};

    this.id = obj.id;
    this.descricao = obj.descricao;
    this.numero = obj.numero;
    this.tipo = obj.tipo;
    this.idNaturezaLancamento = obj.idNaturezaLancamento;
    this.dataVencimento = obj.dataVencimento;
    this.valorUnitario = obj.valorUnitario;
    this.valorDesconto = obj.valorDesconto;
    this.valorJuros = obj.valorJuros;
    this.valorMulta = obj.valorMulta;
    this.observacao = obj.observacao;
  }

  modeloValido() {
    return !!(
      this.descricao &&
      this.numero &&
      this.tipo &&
      this.dataVencimento &&
      this.valorUnitario &&
      this.valorDesconto &&
      this.valorJuros &&
      this.valorMulta
    );
  }
}

export default TituloModel;
