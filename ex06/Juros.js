
export default class Juros {

    constructor (capitalInicial,taxaAplicaco,tempo){
        this.capitalInicial = capitalInicial
        this.taxaAplicaco   = taxaAplicaco
        this.tempo          = tempo
    
    }

    calcularJurosSimples(){
        const j = this.capitalInicial*this.taxaAplicaco*this.tempo
        return j
    }

    calcularJurosCompostos(){
        const M = this.capitalInicial*(1+this.taxaAplicaco) ** this.tempo
        return M
    }

}