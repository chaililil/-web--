function func() {
  var max = -Infinity; 
  var maxCell; 
  var cells = document.getElementsByTagName("td"); 

  for (var i = 0; i < cells.length; i++) {
    var cellValue = parseInt(cells[i].innerHTML); 
    if (cellValue > max) { 
      max = cellValue; 
      maxCell = cells[i];
    }
  }

  maxCell.style.backgroundColor = "red"; 
}