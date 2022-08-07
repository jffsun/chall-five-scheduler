// Displaying current date
var dateDisplayEl = $('#date-display');

function displayDate() {
    var todayDate = moment().format("MMM Do YY");
    dateDisplayEl.text(todayDate);
}

function init () {
    displayDate ();
}

init ();