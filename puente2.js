function obtenerfecha()
{   
    
    var mes = getElementById("mes").value;
    var ano = getElementById("ano").value;
  

    //$.ajax({
     //   data : datosfecha,
      //  url : "../php/consultaventas.php",
       // type : 'GET'
   // })
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