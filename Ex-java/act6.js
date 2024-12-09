function saluda(hora) {
    if (hora >= 0 && hora <= 11) {
        console.log("Bon dia");
    } else if (hora >= 12 && hora <= 18) {
        console.log("Bona vesprada");
    } else if (hora >= 19 && hora <= 23) {
        console.log("Bona nit");
    } else {
        console.log("Hora no vàlida");
    }
}

saluda(10);
saluda(15);
saluda(22);