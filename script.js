//Declare global variables
todoItems = [
    "","","","","","","","",
];
//Load previously saved tasks
var loadTasks = function(){
todoItems = JSON.parse(localStorage.getItem("todoItems"));
$("#0").val(todoItems[0]);
$("#1").val(todoItems[1]);
$("#2").val(todoItems[2]);
$("#3").val(todoItems[3]);
$("#4").val(todoItems[4]);
$("#5").val(todoItems[5]);
$("#6").val(todoItems[6]);
$("#7").val(todoItems[7]);

// console.log(todoItems);

// if(!todoItems){
//     todoItems = ["","","","","","","",""]
// }

// for(var i = 0; i<todoItems.length; i++){
   
//     $(".col-10").val(todoItems);
// }
// $.each(todoItems,function(value){
//    $(".col-10").val(todoItems[value]);
// });
}


    loadTasks();
//**DONE** Current day is displayed at the top of the calendar 
var today = $("#currentDay")
    .text(moment().format("dddd, MMM Do"));

//Color Coded time blocks to indicate whether it is in past, present, or the future


//**DONE** When I click the time block I can enter an event
var createItem = $(".row").on("click",".col-10", function(){
    var text = $(this)
        .text()
        .trim()
});


//**DONE**when I click the save block, it will save into local storage && On refresh events will persist
$(".saveBtn").on("click", function(){
    var getText = $(this).siblings(".col-10").val();
    var getTextId = $(this).siblings(".col-10").attr("id");
    
    todoItems[getTextId]= getText;
    localStorage.setItem('todoItems',JSON.stringify(todoItems))
});