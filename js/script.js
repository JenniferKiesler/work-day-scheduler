var currentDay = $('#currentDay')
var calendar = $('.container')
var hour = moment().format('h');
var timeBlocks = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5];

// display current day 
currentDay.text(moment().format('dddd, MMMM Do'));

// create time blocks
$(timeBlocks).each(function(index){
    var row = $('<div>').addClass('row time-block').appendTo(calendar);

    if (index <= 3) {
        $('<div>').addClass('col-1 hour').text(timeBlocks[index] + 'am').appendTo(row);
    } else {
        $('<div>').addClass('col-1 hour').text(timeBlocks[index] + 'pm').appendTo(row);
    }
    
    $('<textarea>').addClass('col-10 description').appendTo(row);

    var saveBtn = $('<div>').addClass('col-1 saveBtn').appendTo(row);

    $('<i>').addClass('fas fa-save').appendTo(saveBtn);
})

// color code time blocks to indicate past, present, or future
    // past = grey
    // present = red
    // future = green

// save button that saves text for that event in local storage
    // text shows up at top saying the text was saved to local storage