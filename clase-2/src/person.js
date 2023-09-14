class Person {
    //constructor
    constructor() {
        //propiedades
        this.name = '';
        this.age = 0;
        this.height = 0;
    }

    saludar () {
        console.log(`Hola desde persona ${this.name}`);
    }

    despedir () {
        console.log(`Adios desde persona ${this.name}`)
    }

    sayHi () {
        console.log("metodo sayHi")
        this.saludar();
        this.despedir();
    }
}

export {Person}