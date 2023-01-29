var addbutton = document.querySelector("#przycisk");
var table = document.querySelector("#tabela");

addbutton.addEventListener('click',addrow);

var tablica = [{name: "Dzień", date: moment().format('dddd Do')}, {name: "Miesiąc", date: moment().format('MMMM')},{name: "Rok", date: moment().format('YYYY') }];

function addrow() {
   var tablelength = table.rows.length;

   for (var i=0; i<tablica.length; i++){
   var row = table.insertRow(tablelength);

   var cel1 = row.insertCell(0);
   cel1.innerHTML = tablica[i].name;

   var cel2 = row.insertCell(1);
   cel2.innerHTML = tablica[i].date;
   }
}
