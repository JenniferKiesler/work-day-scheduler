var currentDay = $('#currentDay')
var calendar = $('.container')
var hour = moment().format('ha');
var timeBlocks = [
    moment('8am', 'ha').format('ha'), 
    moment('9am', 'ha').format('ha'), 
    moment('10am', 'ha').format('ha'), 
    moment('11am', 'ha').format('ha'), 
    moment('12pm', 'ha').format('ha'), 
    moment('1pm', 'ha').format('ha'), 
    moment('2pm', 'ha').format('ha'), 
    moment('3pm', 'ha').format('ha'), 
    moment('4pm', 'ha').format('ha'), 
    moment('5pm', 'ha').format('ha')
];


// display current day 
currentDay.text(moment().format('dddd, MMMM Do'));

// create time blocks
$(timeBlocks).each(function(index){
    var row = $('<div>').addClass('row time-block').appendTo(calendar);

    $('<div>').addClass('col-1 hour').text(timeBlocks[index]).appendTo(row);
    
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