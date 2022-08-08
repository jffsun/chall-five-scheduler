var dateDisplayEl = $('#date-display');
var todayDate = moment().format('LL');
var now = moment();
var currentHour = now.hour()
var appointmentConfirm = $('#appointment-confirm')
var input9am = $('#input-9am');
var input10am = $('#input-10am');
var input11am = $('#input-11am');
var input12pm = $('#input-12pm');
var input1pm = $('#input-1pm');
var input2pm = $('#input-2pm');
var input3pm = $('#input-3pm');
var input4pm = $('#input-4pm');
var input5pm = $('#input-5pm');
var row9am = $('#row-9am');
var row10am = $('#row-10am');
var row11am = $('#row-11am');
var row12pm = $('#row-12pm');
var row1pm = $('#row-1pm');
var row2pm = $('#row-2pm');
var row3pm = $('#row-3pm');
var row4pm = $('#row-4pm');
var row5pm = $('#row-5pm');

// Displaying current date
function displayDate() {
    dateDisplayEl.text(todayDate);
}

// Retrieve tasks for each timeslot from local storage
function getTask () {
    // Retrieve 9 am task 
    var get9am = JSON.parse(localStorage.getItem("set9am"));

    // If data found for 9am
    if (input9am !== null) {

    // Insert stored 9am into text box
    input9am.val(get9am);
    }

    // Retrieve 10 am task
    var get10am = JSON.parse(localStorage.getItem("set10am"));
    if (input10am !== null) {
    input10am.val(get10am);
    }

    // Retrieve 11 am task
    var get11am = JSON.parse(localStorage.getItem("set11am"));
    if (input11am !== null) {
    input11am.val(get11am);
    }

    // Retrieve 12 pm task
    var get12pm = JSON.parse(localStorage.getItem("set12pm"));
    if (input12pm !== null) {
    input12pm.val(get12pm);
    }

     // Retrieve 1 pm task
     var get1pm = JSON.parse(localStorage.getItem("set1pm"));
     if (input1pm !== null) {
     input1pm.val(get1pm);
     }

    // Retrieve 2 pm task
    var get2pm = JSON.parse(localStorage.getItem("set2pm"));
    if (input2pm !== null) {
    input2pm.val(get2pm);
    }

    // Retrieve 3 pm task
    var get3pm = JSON.parse(localStorage.getItem("set3pm"));
    if (input3pm !== null) {
    input3pm.val(get3pm);
    }

    // Retrieve 4 pm task
    var get4pm = JSON.parse(localStorage.getItem("set4pm"));
    if (input4pm !== null) {
    input4pm.val(get4pm);
    }

    // Retrieve 5 pm task
    var get5pm = JSON.parse(localStorage.getItem("set5pm"));
    if (input5pm !== null) {
    input5pm.val(get5pm);
    }
}

function saveTask () {
    $("#9am-btn").click(function() {
        // Save input to local storage as set9am 
        localStorage.setItem("set9am", JSON.stringify(input9am.val().trim()));

        // Confirm that a change was saved to local storage
        appointmentConfirm.text("Changes have been saved to 9 AM ✔️");
    })

    // Save 10am input
    $("#10am-btn").click(function() {
        localStorage.setItem("set10am", JSON.stringify(input10am.val().trim()));
        appointmentConfirm.text("Changes have been saved to 10 AM ✔️");
    })

    // Save 11am input
    $("#11am-btn").click(function() {
        localStorage.setItem("set11am", JSON.stringify(input11am.val().trim()));
        appointmentConfirm.text("Changes have been saved to 11 AM ✔️");
    })

    // Save 12pm input
    $("#12pm-btn").click(function() {
        localStorage.setItem("set12pm", JSON.stringify(input12pm.val().trim()));
        appointmentConfirm.text("Changes have been saved to 12 PM ✔️");
    })

    // Save 1pm input
    $("#1pm-btn").click(function() {
        localStorage.setItem("set1pm", JSON.stringify(input1pm.val().trim()));
        appointmentConfirm.text("Changes have been saved to 1 PM ✔️");
    })

    // Save 2pm input
    $("#2pm-btn").click(function() {
        localStorage.setItem("set2pm", JSON.stringify(input2pm.val().trim()));
        appointmentConfirm.text("Changes have been saved to 2 PM ✔️");
    })

    // Save 3pm input
    $("#3pm-btn").click(function() {
        localStorage.setItem("set3pm", JSON.stringify(input3pm.val().trim()));
        appointmentConfirm.text("Changes have been saved to 3 PM ✔️");
    })

    // Save 4pm input
    $("#4pm-btn").click(function() {
        localStorage.setItem("set4pm", JSON.stringify(input4pm.val().trim()));
        appointmentConfirm.text("Changes have been saved to 4 PM ✔️");
    })

    // Save 5pm input
    $("#5pm-btn").click(function() {
        localStorage.setItem("set5pm", JSON.stringify(input5pm.val().trim()));
        appointmentConfirm.text("Changes have been saved to 5 PM ✔️");
    })
}

// Color codes time slot based on timeslot's relation to current hour
function timeTracking (currentHour) {

    // 9 am color change
    // If event is in past, then change timeblock grey    
    if (currentHour > 9) {
        row9am.addClass('past');
    
    // If event is in future, then change green 
    } else if (currentHour < 9) {
        row9am.addClass('future');
    
    // If event is during current hour, then change red
    } else {
        row9am.addClass('present');
    }

    // 10 am color change
    if (currentHour > 10) {
    row10am.addClass('past');
    } else if (currentHour < 10) {
    row10am.addClass('future');
    } else {
    row10am.addClass('present');
    }

   // 11 am color change
   if (currentHour > 11) {
    row11am.addClass('past');
    } else if (currentHour < 11) {
    row11am.addClass('future');
    } else {
    row11am.addClass('present');
    }

     // 12 pm color change
   if (currentHour > 12) {
    row12pm.addClass('past');
    } else if (currentHour < 12) {
    row12pm.addClass('future');
    } else {
    row12pm.addClass('present');
    }

    // 1 pm color change
   if (currentHour > 13) {
    row1pm.addClass('past');
    } else if (currentHour < 13) {
    row1pm.addClass('future');
    } else {
    row1pm.addClass('present');
    }

    // 2 pm color change
   if (currentHour > 14) {
    row2pm.addClass('past');
    } else if (currentHour < 14) {
    row2pm.addClass('future');
    } else {
    row2pm.addClass('present');
    }

     // 3 pm color change
   if (currentHour > 15) {
    row3pm.addClass('past');
    } else if (currentHour < 15) {
    row3pm.addClass('future');
    } else {
    row3pm.addClass('present');
    }

     // 4 pm color change
   if (currentHour > 16) {
    row4pm.addClass('past');
    } else if (currentHour < 16) {
    row4pm.addClass('future');
    } else {
    row4pm.addClass('present');
    }

    // 5 pm color change
   if (currentHour > 17) {
    row5pm.addClass('past');
    } else if (currentHour < 17) {
    row5pm.addClass('future');
    } else {
    row5pm.addClass('present');
    }
}

// Run upon webpage load
function init () {
    displayDate ();
    getTask ();
    timeTracking(currentHour);
    saveTask (); 
}

init ();