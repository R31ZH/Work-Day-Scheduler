var today = moment();
$("#currentDay").text(today.format("hh:mm" + ", " + "MMM Do, YYYY"));

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  });


// var time = moment();
// $("#currentDay").text(time.format("hh"));

// let pastTime = ;
// let presentTime = time;
// let futureTime =;

// if(pastTime < )

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
