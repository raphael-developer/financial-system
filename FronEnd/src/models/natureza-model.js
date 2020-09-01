class NaturezaModel {
    constructor(obj){
        obj = obj || {};

        this.id = obj.id;
        this.codigo = obj.codigo;
        this.nome = obj.nome;
        this.tipo = obj.tipo;
        this.status = obj.status;
        this.classificacao = obj.classificacao;
    }

    modeloValido(){
        return !!(this.codigo && this.nome && this.tipo && this.classificacao);
    }

}
export default NaturezaModel;