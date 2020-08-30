//Declare global variables
todoItems = [
    "","","","","","","","",
];
//Load previously saved tasks
localStorage.getItem(JSON.parseInt("todoItems"));

//**DONE** Current day is displayed at the top of the calendar 
var today = $("#currentDay")
    .text(moment().format("dddd, MMM Do"));

//Color Coded time blocks to indicate whether it is in past, present, or the future


//**DONE** When I click the time block I can enter an event
$(".row").on("click",".col-10", function(){
    var text = $(this)
        .text()
        .trim()
    //     console.log(text);
    
    // // //create textarea  element
    // var newTask = $("<textarea>")
    //     .addClass("form-control col-10")
    //     .val(text);
    
    //     $(this).replaceWith(newTask);
    //     newTask.trigger("focus");

});


//**DONE**when I click the save block, it will save into local storage && On refresh events will persist
$(".saveBtn").on("click", function(){
    var getText = $(this).siblings(".col-10").val();
    var getTextId = $(this).siblings(".col-10").attr("id");
    console.log(getTextId);
    //var newTextId = parseInt(getTextId);
    // console.log(newTextId);
    // console.log(todoItems);
    // //create and array of strings
    //modify the strings
    todoItems[getTextId]= getText;
    // console.log(todoItems);
  

    

    localStorage.setItem('todoItems',JSON.stringify(todoItems))
});