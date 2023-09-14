
import {saludar, despedir} from './utils/library1.js' /*Importar elementos independientemente */

import * as lib2 from './library2.js' /*Importar elementos como paquetes */
import {Person} from './person.js' /*Importar clases */

// con esto podemos importar otro archivo javascript, 
//para poder importar como module, en el pacakge json debemos poner "type" : "module", si no, no funcionara

saludar();
despedir();

lib2.saludar();
lib2.despedir();

let person1 = new Person();
person1.name = "Maria";
person1.age = 30;
person1.height = 1.8;

person1.sayHi();