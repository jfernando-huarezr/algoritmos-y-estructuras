function saludar () {
    console.log("Hola a todos");
}

function sumar(a,b) {
    return a+b;
}

const saludarAnonimo = function () {
    console.log("hola amigos");
}

const saludarFlecha = () => {
    console.log("hola flecha");
}

saludar();
sumar(10,20);
saludarAnonimo();
saludarFlecha();


for (let i=0; i<10; i++) {
    console.log(`Hola soy el numero ${i}`);
}