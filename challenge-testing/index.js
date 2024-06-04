class CarritoCompra {
  //   //   Clase Carrito de Compras y sus métodos
  //   constructor() {
  //     this.productos = [];
  //   }
  //   agregarProducto(producto) {
  //     this.productos.push(producto);
  //   }
  //   calcularTotal() {
  //     let total = 0;
  //     for (const producto of this.productos) {
  //       total += producto.precio;
  //     }
  //     return total;
  //   }
  //   aplicarDescuento(porcentaje) {
  //     if (porcentaje < 0 || porcentaje > 100) {
  //       return "El descuentro debe ser entre 0% y 100%";
  //     }
  //     const total = this.calcularTotal();
  //     const totalConDescuento = total * (porcentaje / 100);
  //     return totalConDescuento;
  //   }
}

module.exports = CarritoCompra;
