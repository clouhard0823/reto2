/*Funciones Cliente */

function consultarMensaje(){

    $.ajax({
        url:"https://gcf300913e266b5-db202111050831.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuestaMensaje){
            console.log(respuestaMensaje);
            CrearConsultaMensaje(respuestaMensaje.items);
        }

    });

}
function CrearConsultaMensaje(items){

    let myTable =  `<table border="1" class="table">
                    <thead>
                    <tr>
                        <th>ID &nbsp;</th>
                        <th>MESSAGE TEXT &nbsp;</th>               
                    </tr>
                    </thead>`;

    for(let i=0; i<items.length;i++ ){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>" + "&nbsp;";
        myTable+="<td>"+items[i].messagetext+"</td>"+"&nbsp;";
        myTable+="<td> <button onclick='BorrarCliente("+items[i].id+")' class='btn btn-danger'>Eliminar</button> &nbsp;";
        myTable+="</tr>";
    }
    myTable+="<br></table>";
    $("#resultMensaje").append(myTable);
}

function GuardarMensaje(){
    let misDatos={
        id:$("#id").val(),
        messagetext:$("#messagetext").val()
    };
    let dataToSend=JSON.stringify(misDatos);
    $.ajax({
        url:"https://gcf300913e266b5-db202111050831.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:misDatos,
        datatype:"JSON",
        success:function(respuestaCliente){
            $("#resultMensaje").empty();
            $("#id").val("");
            $("#messagetext").val("");
            consultarMensaje();
            alert("Se ha guardado el registro del mensaje con exito :)")
        }
    });
}
function EditarMensaje(){
    let misDatos={
        id:$("#id").val(),
        messagetext:$("#messagetext").val()
    };
    console.log(misDatos);
    let dataToSend=JSON.stringify(misDatos);
    $.ajax({
        url:"https://gcf300913e266b5-db202111050831.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaMensaje){
            $("#resultMensaje").empty();
            $("#id").val("");
            $("#messagetext").val("");
            consultarMensaje();
            alert("Se ha actualizado el registro del mensaje con exito :)")
        }
    });
}
function BorrarMensaje(idElemento){
    let misDatos={
        id:idElemento
    };
    let dataToSend=JSON.stringify(misDatos);
    $.ajax({
    url:"https://gcf300913e266b5-db202111050831.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaMensaje){
            $("#resultMensaje").empty();
            consultarCliente();
            alert("Se a Eliminado el registro del mensaje :(")
        }
    });
}