var addbutton = document.querySelector("#przycisk");
var table = document.querySelector("#tabela");

var tablica["0","1"];

addbutton.addEventListener('click',addrow);

function addrow() {
   var tablelength = table.rows.length;

   var row = table.insertRow(tablelength);
   var cel1 = row.insertCell(0);
   cel1.innerHTML = "komorka1";

   var cel2 = row.insertCell(1);
   cel2.innerHTML = "komorka2";
}