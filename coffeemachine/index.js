import coffeeStock from './state.js';

const makeCoffee = (type, miligrams) => {
    if (coffeeStock[type] >= miligrams) {
	console.log("Kopi berhasil dibuat!");
    } else {
   	console.log("Biji kopi habis!");
   }
}


makeCoffee("robusta", 80);
