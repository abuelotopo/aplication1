var tab = document.getElementById("table");//SE OBTIENE EL VALOR DEL ELEMENTO DEL DOM TABLE
var creacionTable = function() {
 //LA FUCNCION DE creacionTable ME PERMITE AGREGAR FILAS DE 6 COLUMNAS
	fila = document.createElement('tr');
	fila = tab.insertRow(1);
	var cell0 = fila.insertCell(0);
	var cell1 = fila.insertCell(1);
	var cell2 = fila.insertCell(2);
	var cell3 = fila.insertCell(3);
	var cell4 = fila.insertCell(4);
	var cell5 = fila.insertCell(5);
	
//CON EL INNER HTML LE AGREGO ATRIBUTOS ESPECIALES A MIS ELEMENTOS COMO EL - PARA QUE BORRE LA FILA AL CLIKEAR
	cell0.innerHTML = "<a class ='G7'>-</a>";
	cell1.innerHTML = "";
	cell2.innerHTML = "";
	cell3.innerHTML = "";
	cell4.innerHTML = "";
	cell5.innerHTML = "";
	cell0.setAttribute("class","E4 G6");
	cell1.setAttribute("class","E4");
	cell2.setAttribute("class","E4");
	cell3.setAttribute("class","E4");
	cell4.setAttribute("class","E4");
	cell5.setAttribute("class","E4");
  	for (var i =0;i <tab.rows.length;i++) {
	tab.rows[i].addEventListener("click",eliminacionTable);//ESTE FOR ME PERMITE QUE CADA - (NO ES MAS QUE UN ELEMETO A) TENGA ASOCIADA UNA FUNCION
	};
};

var eliminacionTable = function(){
//ESTA FUNCION ME PERMITE BORRAR LA FILA SELECCIONADA CON EL THIS HAGO ALUCION AL ELEMENTO EL CUAL DISPARA LA ACCION
	tab.deleteRow(this.rowIndex);
	
	
};
document.getElementById("click_1").addEventListener("click",creacionTable);
//VINCULANDO LA ACCION O EL EVENTO DE CREACION DE TABLA CON EL OBJETO DEL DON CUYO ID ES click_1


