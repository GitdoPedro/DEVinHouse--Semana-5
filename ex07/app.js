import Partida from "./Partida.js"
import Time    from "./Time.js"



const jogo1 = new Partida('FLA', 1 ,'ATL', 0)


const time1 = new Time('Flamengo','FLA')
const time2 = new Time('Atletico', 'ATL')


time1.computarPartida(jogo1)
