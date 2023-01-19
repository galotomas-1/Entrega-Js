//E-commerce de entrenamiento "MP-Training"

alert ("Bienvenido a Fit-gym")
alert ("En compras superiores a los $10000 tenes $2000 de descuento y en cuotas sin interés")
alert ("Realizamos envíos GRATIS a todo el PAIS!!!")

//Funciones

function carritoTotalDeCompras (producto1=0, producto2=0, producto3=0){
    return producto1 + producto2 + producto3
}
function descuentoTotalDeCompras(producto1=0, producto2=0){
    return producto1 - producto2
}

//Variables

let producto1 = Number(prompt("Primer producto"))
console.log (producto1)
let producto2 = Number(prompt("Segundo producto"))
console.log (producto2)
let producto3 = Number(prompt("Tercer producto"))
console.log (producto3)

let productosFinales = carritoTotalDeCompras(producto1,producto2,producto3)
alert(productosFinales)
// let descuentosFinales = descuentoTotalDeCompras (producto1,producto2)
// alert(descuentosFinales)

//Condicionales

if (productosFinales >= 10000){
   alert("Recibiste $2000 de descuento")
} 
if (productosFinales <= 9000){
    alert("No recibiste el descuento")
}

//Datos del usuario para envíos

alert("A continuación debe ingresar sus datos para el envío")

let formasDePago = prompt ("Ingresa tu forma de pago \n 1 pago con transferencia o debito \n2 pago con tarjeta de crédito")
let cantidadDeCuotas = prompt("Ingresa la cantidad de cuotas, puedes pagar en 3, 6 y 12 SIN INTERES")
let nombre = prompt ("Ingrese su nombre")
let apellido = prompt ("Ingrese su apellido")
let provincia = prompt ("Ingrese provincia")
let ciudad = prompt ("Ingrese ciudad")
let domicilio = prompt ("Ingrese su domicilio")

alert ("En los próximos días recibiras tus productos en la puerta de tu hogar")
alert ("Muchas gracias por su compra, vuelva pronto!!!")

//Objetos

class Producto{
    constructor(marca, producto, material, peso, precio){
     this.marca = marca;
     this.producto = producto;
     this.material = material;
     this.peso = peso;
     this.precio = precio;
     this.stock = true;
 }
mostrar(){
    console.log("Este elemento es una " + (this.producto) + " y pesa " + (this.peso));
    console.log("Es de marca " + (this.marca) + " y es de " + (this.material));
    console.log("El precio del elemento " + (this.producto) + " es de " + (this.precio));
    console.log("Hay disponibilidad " + (this.stock))
}
}

let producto4 = new Producto ("G-fitness", "Dumbell", "goma", "10kg", 8500);
producto4.mostrar(Producto);
let producto5 = new Producto ("Rogue", "Barra", "alto rendimiento", "20kg", 40000);
producto5.mostrar(Producto);
let producto6 = new Producto ("Forza", "Soga de salto", "acero", "300gr", 4500);
producto6.mostrar(Producto); 

//Array
const arrayProductos = ["Dumbell", "Barra", "Soga de salto"]; 

//Agregado de elementos en el array
arrayProductos.push("Barra W")
console.log(arrayProductos.length)
console.log(arrayProductos)
const arrayDePrecios = ["Precio de las dumbells ", 8500, "Precio de la barra ", 40000, "Precio de la soga ", 4500]
console.log(arrayDePrecios)

//Ordenes de función superior
const elementosGym = [
    {nombre: "TRX", precio: 3000},
    {nombre: "Medball", precio: 4000}, 
    {nombre: "Bumpers", precio: 7000}, 
    {nombre: "Bandas de resistencia", precio: 1500}
]
const nombres = elementosGym.map ((el) => el.nombre)
console.log(nombres)
const precio = elementosGym.map ((el) => el.precio )
console.log(precio)