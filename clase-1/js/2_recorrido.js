let names = ['Fernando', 'Carlos', 'Walter', 'Manuel'];

for (let i=0; i< names.length; i++) {
    console.log(`Procesando : ${i}, ${names[i]}`);
};


for (let name of names) {
    console.log(name);
}

names.forEach((name, i) => {
    console.log(name, i);
})