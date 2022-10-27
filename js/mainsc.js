
    var ingresos = 0;
    var egresos = 0;
    var total = 0;
    var descripcion = "";
    var porcentaje = 0;
    var accion;

    function action(acc) {
        accion = acc;
        if (accion == 0){
            document.getElementById("dropmenu").textContent = "Ingreso";
            accion = 0;
        }
        else{
            document.getElementById("dropmenu").textContent = "Egreso";
            accion = 1;
        }
        
    }

    function lista(lis){
        if(lis == 0){
            document.getElementById("btnaccion1").style.backgroundColor = "#070035";
            document.getElementById("btnaccion2").style.backgroundColor = "#adadad";
            document.getElementById("tablaingre").style.display = "table";
            document.getElementById("tablaegre").style.display = "none";
        }else{
            document.getElementById("btnaccion1").style.backgroundColor = "#adadad";
            document.getElementById("btnaccion2").style.backgroundColor = "#070035";
            document.getElementById("tablaingre").style.display = "none";
            document.getElementById("tablaegre").style.display = "table";
        }
    }

    function agregar(){    
        
        
        if (accion == null ){
            window.alert("no se ha introducido opcion de ingreso, egreso");
        }
        else if(document.getElementById("mont").value == "" || document.getElementById("mont").value == 0){
            window.alert("no se ha introducido valor del monto");
        }
        else{
            

            if(accion == 0){
                ingresos =  ingresos + parseFloat(document.getElementById("mont").value);
                var tablaingre = document.getElementById("tablaingre").insertRow(0);
                var col1 = tablaingre.insertCell(0);
                var col2 = tablaingre.insertCell(1);
                col1.innerHTML = document.getElementById("descrip").value;
                col2.innerHTML = "+" + document.getElementById("mont").value;
   		

            }
            if(accion == 1){
                egresos = egresos + parseFloat(document.getElementById("mont").value);
                porcentaje = (parseFloat(document.getElementById("mont").value) * 100) / ingresos;
                porcentaje = porcentaje.toFixed(0);
                var tablaegre = document.getElementById("tablaegre").insertRow(0);
                var col3 = tablaegre.insertCell(0);
                var col4 = tablaegre.insertCell(1);
                col3.innerHTML = document.getElementById("descrip").value;
                col4.innerHTML = "-" + document.getElementById("mont").value + " " +"<span id='resultado' class='btngeneral rounded-2 px-2'>" + porcentaje  + '% </span>';
            }
            total = ingresos - egresos;
            porcentaje = (egresos*100)/ingresos;
            porcentaje = porcentaje.toFixed(2);
            document.getElementById("ingresos").innerHTML = ingresos;
            document.getElementById("egresos").innerHTML = egresos;
            document.getElementById("total").innerHTML = total;
            document.getElementById("resultado").innerHTML = porcentaje + '% ';


        }
    document.getElementById("form1").reset();
    }