import ui from './ui.js'

export default class Player {
  constructor() {
    this.x = 2
    this.y = 2
    this.skin = 'P'
    
    ui.screen.on('keypress', (char, key) => {
      this.move(key)
    })
  }

  /*
   * Implementar:
   *
   * - El movimiento del player en las 4 direcciones
   *   de modo que no pueda atravesar las paredes,
   *   usando las flechas direccionales y las teclas ASWD:
   *     Izquierda: A ó ←
   *     Derecha  : D ó →
   *     Arriba   : W ó ↑
   *     Abajo    : S ó ↓
   * - La validación de que la posición del personaje
   *   no sobrepase los límites del canvas (8x8).
   */
  move(key) {
    //
    // Implementar aquí
    //       

    //Colocamos en variables la posicion actual de "Player" 
    //para no alterarlas antes de las verificaciones

    let futureX = this.x
    let futureY = this.y

    if (key.name == 'left' || key.name == 'a') {
      futureX = this.x - 1    
    }
      
    if (key.name == 'right' || key.name == 'd') {
      futureX = this.x + 1
    }

    if (key.name == 'up' || key.name == 'w' ) {
      futureY = this.y - 1
    }

    if (key.name == 'down' || key.name == 's') {
      futureY = this.y + 1
    }

    //primero verificamos que este dentro del area especificada en UI. Si se sale del area, se queda en la misma posicion
    if(futureX < ui.width && futureY < ui.height && futureX > 0 && futureY > 0) {

      //si pasa esa verificacion, obtenemos la data que hay dentro de la posicion futura
      
      const line = ui.box.getLines()[futureY]
      const characters = line.split('')

      //validamos que no sea un valor que consideremos "pared"
      //si no es pared, actualizamos la posicion. Si es pared no se actualiza la posicion
      if(characters[2 * futureX] != "#") {
        this.x = futureX
        this.y = futureY
      }
    }  
  }  

  draw() {
    ui.printCharacter(this.x, this.y, this.skin)
  }
}
