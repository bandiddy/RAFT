$(document).ready(function() {

var input = $('#userInput').val().trim();
var dataContainer = $(".data-container");

initializeRows();
$(".data-input").on("submit", function (event) {
   event.preventDefault();
   console.log(input);
   createNewRow();
})
function initializeRows() {
    dataContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < todos.length; i++) {
        rowsToAdd.push(createNewRow(todos[i]));
    }
    dataContainer.prepend(rowsToAdd);
 }
function createNewRow(input) {
   var input = $('#userInput').val().trim();
   var newInputRow = $(
       [
           "<li class='list-group-item todo-item'>",
           "<span>",
           "</span>",
           "<input type='text' class='edit' style='display: none;'>",
           "<button class='delete btn btn-danger'>x</button>",
           "<button class='complete btn btn-primary'>✓</button>",
           "</li>"
       ].join("")
   );
   newInputRow.append(input)
  }
});