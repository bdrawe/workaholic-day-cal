//Declare global variables
todoItems = [
    "","","","","","","","",
];


//**DONE** Load previously saved tasks
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
}
loadTasks();


//**DONE** Current day is displayed at the top of the calendar 
var today = $("#currentDay")
    .text(moment().format("dddd, MMM Do"));

//Color Coded time blocks to indicate whether it is in past, present, or the future
var timeArr = ["9","10","11","12","1","2","3","4","5"];
// idCounter = 0;
// var randomFormat = "hA"
// var times = $(".hour");

// // var convertedDate = moment(timeArr[0],randomFormat)
// for(var i = 0; i< timeArr.length; i++){
//     console.log("Test & " + timeArr[i]);
//     times.text(moment(i).format("hA"));
//     i++
// }

    // return(convertedDated)
timeArr.forEach(function(){
    $(this).text(moment(timeArr).format("hA"))
});

// var convertedDate = moment(timeArr[i], randomFormat); 
// timeArr.forEach(function(){
//     $(".hour").text(convertedDate.format("hA"));
// })

 
 




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