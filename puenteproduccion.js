function fecha()
{
  
  // crea un nuevo objeto `Fecha`
  var today = new Date();
 
  // `getDate()` devuelve el día del mes (del 1 al 31)
  var day = today.getDate();

 // `getMonth()` devuelve el mes (de 0 a 11)
 var month = today.getMonth() + 1;
  
 // `getFullYear()` devuelve el año completo
 var year = today.getFullYear();
 cadena = 'Mes: '+month+' Año: '+year
 // muestra la fecha de hoy en formato `MM/DD/YYYY`
 console.log(`${month}/${day}/${year}`)
 document.getElementById("mesactual").innerHTML = cadena 
 //document.getElementById("anoactual").innerHTML = year 
 console.log(year,month)

}

function buscar()
{
  
  var mes = document.getElementById('mes');
  var año = document.getElementById('año');
  
  console.log(mes.value,año.value);
  
  const aplicacion = document.querySelector(".contenedor3");
  //idventa = geturl.get(Idventa)
  const url = '../php/produccion2.php/?mes='+ mes.value +'&año='+ año.value
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

function buscar1(event)
{
  
}
////



function buscarcalculo()
{  
  var mes = document.getElementById('mes');
  var año = document.getElementById('año');
  
  console.log(mes.value,año.value);
  
  const aplicacion = document.querySelector("#columna");
  const aplicacion1 = document.querySelector("#columna1");
  
  const url = '../php/produccion3.php/?mes='+ mes.value +'&año='+ año.value
  //let cad = ' ';
  console.log(url) 
  fetch(url)
  .then(response => response.json())
  .then(datos=> {
    datos.forEach(produccion => {
      console.log('Produccion:',produccion.Cantidad)
      //const p= document.createElement('p')
      //p.innerHTML = produccion.Cantidad
      //aplicacion.appendChild(p)
      document.getElementById("texto").innerHTML = produccion.Cantidad;
     
    });
  buscarcalculo()
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