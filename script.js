var addbutton = document.querySelector("#przycisk");
var table = document.querySelector("#tabela");

addbutton.addEventListener('click',addrow);

function addrow() {
   var tablelength = table.rows.length;

   var row = table.insertRow(tablelength);
   var cel1 = row.insertCell(0);
   cel1.innerHTML = "komorka1";

   var cel2 = row.insertCell(1);
   cel2.innerHTML = "komorka2";
}