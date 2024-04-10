let medias = 4000;
let zapatos = 70000;
let camisa = 40000;
let gafas = 60000;
let pantalon = 90000;
let contador1 = 0, contador2 = 0, contador3 = 0, contador4 = 0, contador5 = 0;

function mostrarProductos(texto){
    let valor = parseInt(prompt(
        "------------------------------------------" + "\n" +
        "Codigo     Producto     valor por Unidad " + "\n" +
        "  1          Medias          4.000       " + "\n" +
        "  2          Zapatos         70.000      " + "\n" +
        "  3          camisa          40.000      " + "\n" +
        "  4          Gafas           60.000      " + "\n" +
        "  5          Pantalon        90.000      " + "\n" +
        "------------------------------------------" + "\n" +
        "                                        " + "\n" +
        texto
    ));
    return valor
};
let mensaje = "Digite cuantos de los productos de la lista desea comprar";
let cantidadProductos = mostrarProductos(mensaje)

if (!isNaN(cantidadProductos) && cantidadProductos > 0 && cantidadProductos <= 5) {
    for (let i = 1; i <= cantidadProductos; i++) {
        let mensajeDos = "Ingrese el codigo del producto " + i + " que desea comprar"; 
        let producto = mostrarProductos(mensajeDos);

        if (producto >= 1 && producto <= 5) {
            mensajeTres = "Ingrese la cantidad del producto con codigo " + producto + " que desea comprar ";
            let cantidadProducto = mostrarProductos(mensajeTres)
            switch (producto) {
                case 1:
                    contador1 += cantidadProducto;
                    break;
                case 2:
                    contador2 += cantidadProducto;
                    break;
                case 3:
                    contador3 += cantidadProducto;
                    break;
                case 4:
                    contador4 += cantidadProducto;
                    break;
                case 5:
                    contador5 += cantidadProducto;
                    break;
                default:
                    alert("Verifique los datos...");
                    break;
            }
        } else {
            alert("Datos incorrectos, verifique por favor... solo tenemos 5 productos");
            break;
        }
    }

    let totalPagar = contador1 * medias + contador2 * zapatos + contador3 * camisa + contador4 * gafas + contador5 * pantalon;
    alert("El precio a pagar por los " + cantidadProductos + " productos es de " + "$" +totalPagar + " pesos");
} else {
    alert("Cantidad de productos incorrecta, Solo puede comprar entre 1 y 5 productos.");
}
