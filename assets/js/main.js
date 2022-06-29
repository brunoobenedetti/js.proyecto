let nombre = prompt ("ingrese su nombre")
let mensaje = alert ("hola" + " " + nombre)
let almuerzo = prompt ("los menus del dia son (napolitana, fritas, ensalada, pizza ) ingrese el menu que desea seleccionar, al finalizar coloque 'salir' ")

while (almuerzo != "salir"){
    switch (almuerzo) {

        case "napolitana" :
            alert ("su napolitana en 15 minutos esta enviada a su mesa").tolowerCase()    
            break;
        case "fritas" :
            alert ("su fritas en 15 minutos esta enviada a su mesa").tolowerCase() 
            break;    
        case "ensalada" :
            alert ("su ensalada en 15 minutos esta enviada a su mesa").tolowerCase() 
            break;
        case "pizza" :
            alert ("su pizza en 15 minutos esta enviada a su mesa").tolowerCase()
            break;
        default:
        alert ("el menu ingresado no esta disponible, recuerde que para salir coloque 'salir' ").tolowerCase()
            break;
    }
    alert ("gracia por su visita, esperamos que vuelva pronto")
}

