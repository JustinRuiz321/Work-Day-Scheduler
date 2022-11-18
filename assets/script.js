//Line of code for today's date and time
$('#currentDay').html(moment().format('LLLL'));

$(document).ready(function() { 
//Const variable for the save button along the code line
const saveBtn = $(".saveBtn");
//Function to save the plans to your local storage
saveBtn.on("click", function () {
    var hour = $(this).siblings(".hour").text();
    var text = $(this).siblings(".text").val();
    localStorage.setItem(hour, text);
});

//Funtion to tell the code the current time
function time() {
    var hours = moment().hours();

    $(".time-block").each(function () {
        var currentHr = parseInt($(this).attr("id"));
        console.log(currentHr);
        if (currentHr < hours) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (currentHr == hours) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        } else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        };
    });
};

function todaysPlans() {
    $(".hour").each(function () {
        var currentTime = $(this).text();
        var plans = localStorage.getItem(currentTime);
        if(currentTime !== null) {
            $(this).siblings(".text").val(plans);
        };
    });
};
time();  
todaysPlans();
});
