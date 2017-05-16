var tab = document.getElementById("table");
var sumaproductos = function() {
 
   	
	fila = document.createElement('tr');
	fila = tab.insertRow(1);
	var cell0 = fila.insertCell(0);
	var cell1 = fila.insertCell(1);
	var cell2 = fila.insertCell(2);
	var cell3 = fila.insertCell(3);
	var cell4 = fila.insertCell(4);
	var cell5 = fila.insertCell(5);
	

	cell0.innerHTML = "<a class='add'>-</a>";
	cell1.innerHTML = "";
	cell2.innerHTML = "";
	cell3.innerHTML = "";
	cell4.innerHTML = "";
	cell5.innerHTML = "";
	cell0.setAttribute("class","E4");
	cell1.setAttribute("class","E4");
	cell2.setAttribute("class","E4");
	cell3.setAttribute("class","E4");
	cell4.setAttribute("class","E4");
	cell5.setAttribute("class","E4");
	
  
	
  };

document.getElementById("click_1").addEventListener("click",sumaproductos);
