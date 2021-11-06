/*Funciones Cliente */

function consultarCliente(){

    $.ajax({
        url:"https://gcf300913e266b5-db202111050831.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuestaCliente){
            console.log(respuestaCliente);
            CrearConsultaCliente(respuestaCliente.items);
        }

    });

}
function CrearConsultaCliente(items){

    let myTable =  `<table border="1" class="table">
                    <thead>
                    <tr>
                        <th>ID &nbsp;</th>
                        <th>NAME &nbsp;</th>
                        <th>EMAIL &nbsp;</th>
                        <th>AGE &nbsp;</th>                   
                    </tr>
                    </thead>`;

    for(let i=0; i<items.length;i++ ){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>" + "&nbsp;";
        myTable+="<td>"+items[i].name+"</td>"+"&nbsp;";
        myTable+="<td>"+items[i].email+"</td>" +"&nbsp;";
        myTable+="<td>"+items[i].age+"</td>"+"&nbsp;";
        myTable+="<td> <button onclick='BorrarCliente("+items[i].id+")' class='btn btn-danger'>Eliminar</button> &nbsp;";
        myTable+="</tr>";
    }
    myTable+="<br></table>";
    $("#result_cliente").append(myTable);
}

function GuardarCliente(){
    let misDatos={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val()
    };
    let dataToSend=JSON.stringify(misDatos);
    $.ajax({
        url:"https://gcf300913e266b5-db202111050831.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:misDatos,
        datatype:"JSON",
        success:function(respuestaCliente){
            $("#result_cliente").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            consultarCliente();
            alert("Se ha guardado el registro de cliente con exito :)")
        }
    });
}
function EditarCliente(){
    let misDatos={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val()
    };
    console.log(misDatos);
    let dataToSend=JSON.stringify(misDatos);
    $.ajax({
        url:"https://gcf300913e266b5-db202111050831.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaCliente){
            $("#result_cliente").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            consultarCliente();
            alert("Se ha actualizado el registro de cliente con exito :)")
        }
    });
}
function BorrarCliente(idElemento){
    let misDatos={
        id:idElemento
    };
    let dataToSend=JSON.stringify(misDatos);
    $.ajax({
    url:"https://gcf300913e266b5-db202111050831.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaCliente){
            $("#result_cliente").empty();
            consultarCliente();
            alert("Se a Eliminado el registro de cliente :(")
        }
    });
}