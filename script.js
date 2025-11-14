function sumar() {

    const n1 = parseInt(document.getElementById('n1').value);
    const n2 = parseInt(document.getElementById('n2').value);

    const suma = n1 + n2;

    document.getElementById('resultado1').value = suma;


    document.getElementById('resultado2').innerText = (`Total: ${suma}`)

    document.getElementById('resultado3').innerHTML = (`<h4>Total: ${suma}</h4>`)

    document.getElementById('btsumar').style.background = '#B3FF00';


    alert("El resultado de la suma es: " + suma);
}

function dividir() {


    const n1 = parseInt(document.getElementById('n1').value);
    const n2 = parseInt(document.getElementById('n2').value);

    const division = n1 / n2;


    document.getElementById('resultado1').value = division;

    document.getElementById('btdividir').style.background = '#B3FF00';


    alert("El resultado de la suma es: " + division);
}

function restar() {


    const n1 = parseInt(document.getElementById('n1').value);
    const n2 = parseInt(document.getElementById('n2').value);

    const resta = n1 - n2;

    document.getElementById('resultado1').value = resta;

    document.getElementById('btresta').style.background = '#B3FF00';


    alert("El resultado de la suma es: " + resta);
}

function multiplicar() {


    const n1 = parseInt(document.getElementById('n1').value);
    const n2 = parseInt(document.getElementById('n2').value);

    const multiplicacion = n1 * n2;

    document.getElementById('resultado1').value = multiplicacion;

    document.getElementById('btmultiplicar').style.background = '#B3FF00';

    alert("El resultado de la suma es: " + multiplicacion);
}

function calcularEdad() {
    const fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
    const fechaActual = new Date();

    let edadCalcular = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

    if (fechaActual.getMonth() < fechaNacimiento.getMonth() || fechaActual.getMonth() == fechaNacimiento.getMonth() && fechaActual.getDay() < fechaNacimiento.getDay()) {
        edadCalcular--;
    }


    document.getElementById('resultadoEdad').value = edadCalcular;

}
function calcularTotal() {
    let valorUnitario = parseFloat(document.getElementById('valor').value);
    let cantidad = parseInt(document.getElementById('cantidad').value);

    let subtotal = valorUnitario * cantidad;
    let iva = subtotal * 0.19;
    let total = subtotal + iva;

    document.getElementById('subtotal').value = subtotal.toLocaleString();
    document.getElementById('iva').value = iva.toLocaleString();
    document.getElementById('total').value = total.toLocaleString();
}

function calcularVenta2() {
    let producto = document.getElementById('nombre').value;
    let cantidad = parseInt(document.getElementById('cantidad').value);
    let valor = parseFloat(document.getElementById('valor').value);

    if (producto == "") {
        alert("Ingrese un producto")
        document.getElementById('nombre').style.borderColor = 'red';
    }
    else {
        document.getElementById('nombre').style.borderColor = '';
    }

    document.getElementById('resultado').style.display = 'block';

    subtotal = cantidad * valor;
    iva = subtotal * 0.19;

    let descuento = 0;

    document.getElementById('subtotal').value = subtotal.toLocaleString();
    document.getElementById('iva').value = iva.toLocaleString();


    if (subtotal >= 350000) {
        descuento = subtotal * 0.22;
    }

    else if (subtotal >= 200000) {
        descuento = subtotal * 0.15;
    }

    if (subtotal >= 100000) {
        descuento = subtotal * 0.1;
    }

    else {
        descuento = 0;
    }
    document.getElementById('descuento').value = descuento.toLocaleString();

    total = subtotal + iva - descuento;
    document.getElementById('total').value = total.toLocaleString();
}

function venta3() {
    let producto = document.getElementById('nombre').value;
    let cantidad = parseInt(document.getElementById('cantidad').value);
    let valor = parseFloat(document.getElementById('valor').value);

    if (producto == "") {
        alert("Ingrese un producto")
        document.getElementById('nombre').style.borderColor = 'red';
    }
    else {
        document.getElementById('nombre').style.borderColor = '';
    }



    subtotal = cantidad * valor;
    iva = subtotal * 0.19;

    let descuento = 0;

    if (producto.toLowerCase() == "huevo") {
        iva = 0;
    }

    document.getElementById('subtotal').innerText = subtotal.toLocaleString();
    document.getElementById('iva').innerText = iva.toLocaleString();


    if (subtotal >= 350000) {
        descuento = subtotal * 0.22;
    }

    else if (subtotal >= 200000) {
        descuento = subtotal * 0.15;
    }

    if (subtotal >= 100000) {
        descuento = subtotal * 0.1;
    }

    else {
        descuento = 0;
    }
    document.getElementById('descuento').innerText = descuento.toLocaleString();

    total = subtotal + iva - descuento;
    document.getElementById('total').innerText = total.toLocaleString();


}