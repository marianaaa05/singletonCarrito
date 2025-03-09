const CarritoSingleton = (function () {
    let instancia;

    function crearCarrito() {
        return {
            productos: [],
            agregarProducto: function (producto) {
                this.productos.push(producto);
            },
            obtenerProductos: function () {
                return this.productos;
            },
        };
    }

    return {
        obtenerInstancia: function () {
            if (!instancia) {
                instancia = crearCarrito();
            }
            return instancia;
        },
    };
})();

//agregar y mostrar productos

function agregarAlCarrito() {
    let input = document.getElementById("producto");
    let nombreProducto = input.value.trim();

    if (nombreProducto !== "") {
        let carrito = CarritoSingleton.obtenerInstancia(); // obtiene la única instancia del carrito
        carrito.agregarProducto(nombreProducto); // agrega a la lista
        // li muestra el producto agregado
        let lista = document.getElementById("listaCarrito");
        lista.innerHTML += `<li>${nombreProducto}</li>`; //
    
        input.value = "";
      }
}