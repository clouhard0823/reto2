function consultarNube(){

    $.ajax({
        url:"https://gcf300913e266b5-db202111050831.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cloud/cloud",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            CrearConsultaNube(respuesta.items);
        }

    });

}
function CrearConsultaNube(items){

    let myTable =  `<table border="1" class="table">
                    <thead>
                    <tr>
                        <th>ID &nbsp;</th>
                        <th>BRAND &nbsp;</th>
                        <th>MODEL &nbsp;</th>
                        <th>CATEGORY &nbsp;</th>
                        <th>NAME &nbsp;</th>                    
                    </tr>
                    </thead>`;

    for(let i=0; i<items.length;i++ ){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>" + "&nbsp;";
        myTable+="<td>"+items[i].brand+"</td>"+"&nbsp;";
        myTable+="<td>"+items[i].model+"</td>" +"&nbsp;";
        myTable+="<td>"+items[i].category_id+"</td>"+"&nbsp;";
        myTable+="<td>"+items[i].name+"</td>"+"&nbsp;";
        myTable+="<td> <button onclick='BorrarNube("+items[i].id+")' class='btn btn-danger'>Eliminar</button> &nbsp;";
        myTable+="</tr>";
    }
    myTable+="<br></table>";
    $("#result").append(myTable);
}

function GuardarNube(){
    let misDatos={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    let dataToSend=JSON.stringify(misDatos);
    $.ajax({
        url:"https://gcf300913e266b5-db202111050831.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cloud/cloud",
        type:"POST",
        data:misDatos,
        datatype:"JSON",
        success:function(respuesta){
            $("#result").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            consultarNube();
            alert("Se ha guardado el registro con exito :)")
        }
    });
}
function EditarNube(){
    let misDatos={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    console.log(misDatos);
    let dataToSend=JSON.stringify(misDatos);
    $.ajax({
        url:"https://gcf300913e266b5-db202111050831.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cloud/cloud",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#result").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            consultarNube();
            alert("Se ha actulizado el registro con exito :)")
        }
    });
}
function BorrarNube(idElemento){
    let misDatos={
        id:idElemento
    };
    let dataToSend=JSON.stringify(misDatos);
    $.ajax({
    url:"https://gcf300913e266b5-db202111050831.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cloud/cloud",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#result").empty();
            consultarNube();
            alert("Se a Eliminado el registro :(")
        }
    });
}

