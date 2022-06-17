function buscar()
{
  const aplicacion = document.querySelector(".contenedor3");
  //const geturl = new URLSearchParams(window.location.search);
  //idventa = geturl.get(Idventa)
  const url = "../php/produccion2.php"
  let cad = ' ';
  console.log(url) 
  fetch(url)
  .then(response => response.json())
  .then(datos=> {
    datos.forEach(produccion => {
      console.log(produccion.Fecha,produccion.Producto)
      const p= document.createElement('p')
      
      cad += `<tr>
            <td>${produccion.Fecha}</td>
            <td>${produccion.Producto}</td>
            <td>${produccion.Cantidad}</td>
            <td>${produccion.Lote}</td>
            </tr>`;
             console.log(cad)
      //p.innerHTML = ventas.Fecha
      document.getElementById("datostabla").innerHTML = cad;    
      //aplicacion.appendChild(p,p1)

    });
    
    //console.log(datos)
  })
  .catch(err => console.log(err))
}

function buscarcalculo()
{
  
  const aplicacion = document.querySelector("#columna");
  const aplicacion1 = document.querySelector("#columna1");
  
  const url = "../php/ventas3.php"
  let cad = ' ';
  console.log(url) 
  fetch(url)
  .then(response => response.json())
  .then(datos=> {
    datos.forEach(ventas => {
      console.log(ventas.Cantidad,ventas.Valor_Unitario)
      const p= document.createElement('p')
      const p1= document.createElement('p')
      p.innerHTML = ventas.Cantidad
      p1.innerHTML = ventas.Valor_Unitario
      aplicacion.appendChild(p)
     aplicacion1.appendChild(p1)

    });
    
    //console.log(datos)
  })
  .catch(err => console.log(err))
}

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
    //Codigo
      let cad = ' ';
      for (let venta of respuesta) 
      {
        cadena += `<tr>
        <td>${venta.Fecha}</td>
        <td>${venta.Producto}</td>
        <td>${venta.Cantidad}</td>
        <td>${venta.Valor_Unitario}</td>
        </tr>`;
      }
     
  $("#datostabla").html(cadena);
  
    });
    
    
}