let carrito = [];

const productos = [
  { id: 1,nombre:'producto 1',categoria: 'electrodomesticos', precio: 20000 },
  { id: 2,nombre:'producto 2',categoria: 'comestibles', precio: 600 },
  { id: 3,nombre:'producto 3',categoria: 'indumentaria', precio: 2000 },
  { id: 4,nombre:'producto 4',categoria: 'electrodomesticos', precio: 2000 },

]



// Función para agregar un nuevo producto

function agregarNuevoProducto() {
  
  const id = productos.length + 1;
  const nombre = prompt('Ingrese el nombre del nuevo Producto:');
  const categoria = prompt('ingrese la categoria de su Producto');
  const precio = parseInt(prompt ('ingrese el precio'));

  // Crear el nuevo producto
  productos.push( {id, nombre, categoria, precio} )
}


// Función para mostrar la lista de productos
function mostrarListaProductos() {
  console.log('----- Lista de Productos -----');
  productos.forEach(producto => {
    console.log(`${producto.nombre}  $${producto.precio}   ${producto.categoria}`);
  });
}

// Función para agregar productos al carrito
function agregarAlCarrito(nombreProducto, cantidad) {
  const productoEncontrado = productos.find(producto => producto.nombre.toLowerCase() === nombreProducto.toLowerCase());

  if (productoEncontrado) {
    const itemExistente = carrito.find(item => item.producto.nombre.toLowerCase() === nombreProducto.toLowerCase());

    if (itemExistente) {
      // Si el producto ya está en el carrito, actualiza la cantidad
      itemExistente.cantidad += cantidad;
    } else {
      // Si el producto no está en el carrito, agrégalo
      carrito.push({ producto: productoEncontrado, cantidad });
    }

    console.log(`Se agregaron ${cantidad} ${nombreProducto}(s) al carrito.`);
  } else {
    console.log(`El producto "${nombreProducto}" no existe en la lista.`);
  }
}

// Función para mostrar el contenido del carrito y la suma total
function mostrarCarrito() {
  console.log('----- Contenido del Carrito -----');
  let sumaTotal = 0;

  carrito.forEach(item => {
    console.log(`${item.producto.nombre} x ${item.cantidad} = $${item.producto.precio * item.cantidad}`);
    sumaTotal += item.producto.precio * item.cantidad;
  });

  
  console.log(`Suma Total: $${sumaTotal}`);
}