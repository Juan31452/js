function obtenerfecha()
{   
  //var mes = document.getElementById("mes").value;
  //var ano = document.getElementById("ano").value;
  
 //   var datosfecha=
 //   {
 //     "mes": mes,
 //     "ano": ano
 //   };
 //   console.log(datosfecha); 

 // Esta es la variable que vamos a pasar

		var mes=$("#mes").val();
    var ano=$("#ano").val();

 
    console.log(mes+" "+ano); 

		// Enviamos la variable de javascript a archivo.php

		$.post("../php/consultaventas1.php",{"mes":mes,"ano":ano},function(respuesta){

			alert(respuesta);
    
      let cad = ' ';
      for (let articulo of respuesta) 
      {
        cad += `<tr>
        <td>${articulo.Fecha}</td>
        <td>${articulo.Producto}</td>
        <td>${articulo.Cantidad}</td>
        <td>${articulo.Valor_Unitario}</td>
        </tr>`;
      }
      //document.getElementById("datostabla").innerHTML = cad;  })
  $("#datostabla").html(cad);

    });
    
    
}

function listarArticulos() 
{
    // Solicitud GET (Request).
    fetch('../php/consultaventas.php')
        // Exito
      //.then(response => response.json())  // convertir a json
      //.then(json => console.log(json))    //imprimir los datos en la consola
    //  .catch(err => console.log('Solicitud fallida', err)); // Capturar errores
    //   fetch("listadoarticulos.php")

        .then(response => response.json())
        .then(datos => 
        {
        
          let cad = ' ';
          for (let articulo of datos) 
          {
            cad += `<tr>
            <td>${articulo.Fecha}</td>
            <td>${articulo.Producto}</td>
            <td>${articulo.Cantidad}</td>
            <td>${articulo.Valor_Unitario}</td>
            </tr>`;
          }
          document.getElementById("datostabla").innerHTML = cad;
        });
    }        