
function MostrarFechaHora(){
    let fecha = new Date();
    let d = fecha.getDate();
    let m = fecha.getMonth() + 1;
    let y =fecha.getFullYear();
    
    document.getElementById("txtFechaHora").innerHTML = "Fecha: " + d + "/" + m + "/" + y;
    //setTimeout("MostrarFechaHora()", 1000);
}

//document.body.setAttribute("onload", "MostrarFechaHora()");

function Sumar(){  
    let nro1 = document.getElementById("txtNro1").value;
    let nro2 = document.getElementById("txtNro2").value;
    
    if(nro1 == ''){
        alert("Ingrese el primer número");
        //nro1.focus();
        return;
    }
    if(nro2 == ''){
        alert("Ingrese el segundo número");
        //nro1.focus();
        return;
    }


    let suma = (parseFloat(nro1) + parseFloat(nro2))/2;
    //alert(suma);
    //console.log(suma);
    document.getElementById("txtResultado").value = suma;

    if(suma >= 13){
        console.log(suma);
        document.getElementById("txtCondicion").value = 'Aprobado';
        document.getElementById("txtCondicion").style.color = 'Blue';
    }
    else{
        console.log(suma);
        document.getElementById("txtCondicion").value = 'Desaprobado';
        document.getElementById("txtCondicion").style.color = 'Red';
    }
}