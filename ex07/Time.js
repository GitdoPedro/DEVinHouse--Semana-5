
export default class Time {
    vitorias     = 0
    derrotas     = 0
    empates      = 0
    golsMarcados = 0
    golsSofridos = 0

    constructor (nome,sigla){
        this.nome         = nome
        this.sigla        = sigla

    }

    get numeroDeJogos(){
        return (this.vitorias+this.empates+this.derrotas)
    }

    get numeroDePontos(){
        return (this.vitorias*3+this.empates)
    }

    computarPartida(partida){
        
        if (partida.siglaTimeA == this.sigla){
            this.golsMarcados+=partida.golsTimeA
            this.golsSofridos+=partida.golsTimeB
            if (partida.golsTimeA == partida.golsTimeB){
                this.empates+=1
                
            }else if (partida.golsTimeA > partida.golsTimeB){
                this.vitorias+=1
            }else{
                this.derrotas+=1
            }
        } else {
            this.golsMarcados+=partida.golsTimeB
            this.golsSofridos+=partida.golsTimeA
            if (partida.golsTimeA == partida.golsTimeB){
                this.empates+=1
            }else if (partida.golsTimeB > partida.golsTimeA){
                this.vitorias+=1
            }else{
                this.derrotas+=1
            }
        }
        this.exibirSituaao()
    }

    exibirSituaao(){
        console.log(`O ${this.nome} teve ${this.vitorias} vitórias, ${this.empates} empates e ${this.derrotas} derrotas.
        Fez ${this.golsMarcados} gols e sofreu ${this.golsSofridos}`)
       
    }
}