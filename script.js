//Declare global variables
todoItems = [];

//Current day is displayed at the top of the calendar
var today = $("#currentDay")
    .html(moment().format("dddd, MMM Do"));

//Color Coded time blocks to indicate whether it is in past, present, or the future


//When I click the time block I can enter an event
$(".row").on("click",".col-10", function(){

    var task = $(this)
        .text()
        .trim();


    //create textarea  element
    var newTask = $("<textarea>")
        .addClass("form-control col-10");

    $(this).replaceWith(newTask);
    newTask.trigger("focus");
    
    
    
})


//when I click the save block, it will save into local storage && On refresh events will persist
$(".saveBtn").on("click", function(){
    localStorage.setItem('todoItems',JSON.stringify(todoItems))
})