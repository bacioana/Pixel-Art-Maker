//this function makes the grid acording to users input
function makeGrid(){
  let table=$('#pixel_canvas');
  table.empty();//clears previous table if existing
  const height=$('#input_height').val();
  const width=$('#input_width').val();
  for(var i=0;i<height;i++){
    var row=$('<tr></tr>');

    for (var j=0;j<width;j++){
      var cells=$('<td></td>')
      row.append(cells);
    }
    table.append(row);
  }
};
//event that changes color on click
$('#pixel_canvas').on('click','td',function(event){
  const color=$('#colorPicker').val();
  $(this).css('background-color',color);
});
//function that prevents refreshing the page and calls the makeGrid function
$("#sizePicker").submit(function(e) {
  e.preventDefault();
  makeGrid();
});
