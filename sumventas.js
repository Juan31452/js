var xhr = new XMLHttpRequest();
xhr.open('GET','../php/consultaventas1.php');
xhr.onload = function()
{  
    if (xhr.status == 200)
    {
        var json = JSON.parse(xhr.responseText);
        console.log(json)
        
        //var template =``;
        //json.map(function(data){

       // template += `
    
       
       // <h2>${data.total}</h2>
       // <h3>Descripcion:</h3>
       // <p>${data.cant}</p><br>
        
       // `;
         
       // return template;
        
    //});
    
  
    //const group = [json.total, json.cantidad];
      
        
    //console.log(template);
    //document.getElementById('datostabla1').innerHTML = template;
    //document.getElementById('texto').src = json[0].Valor_Total;
    //document.getElementById('texto1').src = json[0].Cantidad;
    //document.getElementById('texto').innerHTML= json.total;
    //document.getElementById('texto1').innerHTML = json.cantidad;
    
    //document.getElementById('descripcion').innerHTML = json[0].Descripcion + "\ud83e\uddd1" + "</b>";
    //document.getElementById('precio').innerHTML = json[0].Valor_Unitario;
    
    //document.getElementById('texto1').innerHTML = json[1].Nombre;
    //document.getElementById('img1').src = json[1].Imagen;
    //document.getElementById('descripcion1').innerHTML = json[1].Descripcion + "\ud83e\uddd1" + "</b>";
    //document.getElementById('precio1').innerHTML = json[1].Valor_Unitario;
    
   
}else 
    {
    console.log("Error"+xhr.status);  
    }

}    
xhr.send();