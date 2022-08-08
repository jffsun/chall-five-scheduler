// Displaying current date
var dateDisplayEl = $('#date-display');
var _9amDescription = $('#9am-description')
var _9amStored;
function displayDate() {
    var todayDate = moment().format("MMM Do YY");
    dateDisplayEl.text(todayDate);
}


function init () {
    displayDate ();
    getTask ();
    saveTask ();
}

function saveTask () { 
    
    $("#9am-btn").click(function() {
    
        // Save to local storage 
        localStorage.setItem("9amSet", JSON.stringify(_9amDescription.val()));
  
    })
}


function getTask () {
    var _9amGet = localStorage.getItem("9amSet");
    console.log(_9amGet);
    
}

init ();