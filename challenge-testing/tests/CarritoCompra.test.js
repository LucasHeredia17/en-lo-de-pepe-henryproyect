const CarritoCompra = require("../index");

describe("Carrito de compras", () => {
  const carrito = new CarritoCompra();
  //   console.log(carrito.productos);
  const producto1 = { nombre: "Producto 1", precio: 10 };
  const producto2 = { nombre: "Producto 2", precio: 20 };

  it("CarritoCompra es una clase", () => {
    expect(typeof CarritoCompra).toBe("function");
  });

  it("CarritoCompra inicia con la propiedad productos como array vacío", () => {
    expect(Array.isArray(carrito.productos)).toBe(true);
    expect(carrito.productos).toHaveLength(0);
  });

  it("agregarProducto agrega un producto al carrito", () => {
    carrito.agregarProducto(producto1);
    expect(carrito.productos).toHaveLength(1);
    expect(carrito.productos[0]).toEqual(producto1);
    //* carrito.procutos = [{nombre: "Producto 1", precio: 10 }];
    carrito.agregarProducto(producto2);
    expect(carrito.productos).toHaveLength(2);
    expect(carrito.productos[1]).toEqual(producto2);
    //* carrito.procutos = [{nombre: "Producto 1", precio: 10 }, {nombre: "Producto 2",precio: 20 }];
  });

  it("calcularTotal calcula el total de la compra", () => {
    expect(carrito.calcularTotal()).toBe(30);
  });

  it("aplicarDescuento aplica descuento definido", () => {
    expect(carrito.aplicarDescuento(50)).toBe(15);
  });

  it("aplicarDescuento da error si es mayor a 100", () => {
    expect(carrito.aplicarDescuento(150)).toBe(
      "El descuentro debe ser entre 0% y 100%"
    );
  });

  it("aplicarDescuento da error si es menor a 0", () => {
    expect(carrito.aplicarDescuento(-1)).toBe(
      "El descuentro debe ser entre 0% y 100%"
    );
  });
});
