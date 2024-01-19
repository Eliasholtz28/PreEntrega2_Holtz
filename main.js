const carrito = [];
const productos = [
  { id: 1, nombre: 'Producto A', tipo: 'Tipo 1', precio: 1000 },
  { id: 2, nombre: 'Producto B', tipo: 'Tipo 2', precio: 1500 },
  { id: 3, nombre: 'Producto C', tipo: 'Tipo 3', precio: 2000 }
];

// Funciones
function agregarAlCarrito(productoIndex, cantidad) {
  carrito.push({ producto: productos[productoIndex], cantidad });
}

function calcularTotal() {
  let total = 0;
  for (let item of carrito) {
    total = item.producto.precio * item.cantidad;
  }
  return total;
}

function mostrarCarrito() {
  console.log('Carrito de compras:');
  for (let item of carrito) {
    console.log(`${item.producto.nombre} x ${item.cantidad} = $${item.producto.precio * item.cantidad}`);
  }
}

function agregarProducto(nuevoProducto) {
  productos.push(nuevoProducto);
}

let nuevoProducto =  { id: 4, nombre: 'Producto D', tipo: 'Tipo 2', precio: 2500 };
agregarProducto(nuevoProducto);

// Captura de entradas
let productoIndex = parseInt(prompt('Seleccione el tipo de producto que desea comprar:\n1. Producto A\n2. Producto B\n3. Producto C'));
let cantidad = parseInt(prompt('Ingrese la cantidad:'));

// Operaciones
agregarAlCarrito(productoIndex - 1, cantidad);
let totalCompra = calcularTotal();
mostrarCarrito();
console.log(`Total de la compra: $${totalCompra}`);
