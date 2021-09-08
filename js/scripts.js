
function newItem(){

  //create list item element
  let li = $('<li></li>');
  //store the input field value to a variable
  let inputValue = $('#input').val();
  //append the values to the list items
  li.append(inputValue);

  //adding alert message if user left the input blank
  if (inputValue === '') {
     alert("You must write something!");
   } else {
     let list = $('#list');
     list.append(li);
  }

  //to Cross out an item from the list of items
  function crossOut() {
 		li.toggleClass("strike");
 	}
  //adding event listener when Double clicked crosses out the item
  li.on("dblclick",crossOut);



  //to delete an item from the list

  //first create crossOutButton element
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  //create a text node and append it to the cross out button
 	crossOutButton.append(document.createTextNode("X"));
  //append the cross out button to the list items
 	li.append(crossOutButton);
  //adding event listener when clicked deletes the item
 	crossOutButton.on("click", deleteListItem);
  
  function deleteListItem(){
 		li.addClass("delete")
 	}

  //to reorder the items
  $('#list').sortable();

}
