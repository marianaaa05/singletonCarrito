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
            }
        };
    }

    return {
        obtenerInstancia: function () {
            if (!instancia) {
                instancia = crearCarrito();
            }
            return instancia;
        }
    };
})();

//agregar y mostrar productos

function agregarAlCarrito(producto) {
    let input = document.getElementById("producto");
    let nombreProducto = input.value.trim();

    if (nombreProducto !== "") {
        let carrito = CarritoSingleton.obtenerInstancia();
        carrito.agregarProducto(nombreProducto);
        input.value = "";
        mostrarProductos(carrito.obtenerProductos());
    }
}