
export default class Personagem {

    constructor (nome){
        this.nome               = nome
        this.percentualVida     = 100

    }

    sofreuDano(percentualDano) {
        if (percentualDano > (this.percentualVida)){
            return 0
        }else{
            this.percentualVida-=percentualDano
            return (this.percentualVida  )
        }
    }

    usouKitMedico() {
        if (this.percentualVida<=90){
            this.percentualVida+=10
            return this.percentualVida
        }else {
            return 100
        }
      }
}

