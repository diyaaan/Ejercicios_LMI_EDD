function diaSetmana(num) {
    switch (num) {
        case 1: console.log("Dilluns"); break;
        case 2: console.log("Dimarts"); break;
        case 3: console.log("Dimecres"); break;
        case 4: console.log("Dijous"); break;
        case 5: console.log("Divendres"); break;
        case 6: console.log("Dissabte"); break;
        case 7: console.log("Diumenge"); break;
        default: console.log("Número no vàlid");
    }
}

diaSetmana(3);