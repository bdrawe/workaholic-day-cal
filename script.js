//Declare global variables
todoItems = [
    "", "", "", "", "", "", "", "",
];


//**DONE** Load previously saved tasks
var loadTasks = function () {
    
    todoItems = JSON.parse(localStorage.getItem("todoItems"));
    if(todoItems === null){
       todoItems = ["","","","","","","",""]
    } else { 
    $("#0").val(todoItems[0]);
    $("#1").val(todoItems[1]);
    $("#2").val(todoItems[2]);
    $("#3").val(todoItems[3]);
    $("#4").val(todoItems[4]);
    $("#5").val(todoItems[5]);
    $("#6").val(todoItems[6]);
    $("#7").val(todoItems[7]);
};
}

loadTasks();


//**DONE** Current day is displayed at the top of the calendar 
var today = $("#currentDay")
    .text(moment().format("dddd, MMM Do"));

//Color Coded time blocks to indicate whether it is in past, present, or the future

var timeAudit = function () {

    var timeArr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
    var indexCounter = 0;
    var currentTime = moment().format("hA");

    $(".hour").each(function () {
        $(this).text(timeArr[indexCounter]);
       
            $(this).closest(".row").children(".col-10").removeClass("present past future");

            if ($(this).text() === currentTime) {
                $(this).closest(".row").children(".col-10").addClass("present");
            } else if($(this).text() === moment().isAfter()){
                $(this).closest(".row").children(".col-10").addClass("past");
            }else {
                $(this).closest(".row").children(".col-10").addClass("future");
            }
            indexCounter++

    })

}
timeAudit();
var timerFunction = setInterval (function(){
    timeAudit()
} ,180000)



//**DONE** When I click the time block I can enter an event
var createItem = $(".row").on("click", ".col-10", function () {
    var text = $(this)
        .text()
        .trim()
});


//**DONE**when I click the save block, it will save into local storage && On refresh events will persist
$(".saveBtn").on("click", function () {
    var getText = $(this).siblings(".col-10").val();
    var getTextId = $(this).siblings(".col-10").attr("id");

    todoItems[getTextId] = getText;
    localStorage.setItem('todoItems', JSON.stringify(todoItems))
});