var currentDay = $('#currentDay')
var calendar = $('.container')
var hourNum = Number(moment().format('k'));
// var hourNum = Number(moment('12pm', 'ha').format('k')); used to check color-coded time blocks
var saveAlert = $('#saveAlert');

var timeBlocks = [
    {
        time: moment('8am', 'ha').format('ha'),
        hour: 8 
    },
    {
        time: moment('9am', 'ha').format('ha'),
        hour: 9 
    },
    {
        time: moment('10am', 'ha').format('ha'),
        hour: 10 
    },
    {
        time: moment('11am', 'ha').format('ha'),
        hour: 11 
    },
    {
        time: moment('12pm', 'ha').format('ha'),
        hour: 12 
    },
    {
        time: moment('1pm', 'ha').format('ha'),
        hour: 13 
    },
    {
        time: moment('2pm', 'ha').format('ha'),
        hour: 14 
    },
    {
        time: moment('3pm', 'ha').format('ha'),
        hour: 15 
    },
    {
        time: moment('4pm', 'ha').format('ha'),
        hour: 16 
    },
    {
        time: moment('5pm', 'ha').format('ha'),
        hour: 17 
    }
];

// hides save alert
saveAlert.hide();

// displays current day 
currentDay.text(moment().format('dddd, MMMM Do'));

// loops through timeBlocks[] to create the time blocks
$(timeBlocks).each(function(index) {
    
    var row = $('<div>').addClass('row time-block').appendTo(calendar);
    
    $('<div>').addClass('col-2 col-md-1 hour').text(timeBlocks[index].time).appendTo(row);
    
    var textarea = $('<textarea>').addClass('col-8 col-md-10 description').appendTo(row);
    
    // gets saved data from local storage and sets to textarea
    var savedEvent = localStorage.getItem('event-' + timeBlocks[index].time);
    textarea.val(savedEvent);
    
    // color codes the time blocks
    if (timeBlocks[index].hour === hourNum) {
        $(textarea).addClass('present');
    } else if (timeBlocks[index].hour < hourNum) {
        $(textarea).addClass('past');
    } else if (timeBlocks[index].hour > hourNum) {
        $(textarea).addClass('future');
    };

    // creates save button
    var saveBtn = $('<div>').addClass('col-2 col-md-1 saveBtn').appendTo(row);
    
    // creates save icon
    $('<i>').addClass('fas fa-save').appendTo(saveBtn);
    
    // saves data to local storage
    function saveText() {
        localStorage.setItem('event-' + timeBlocks[index].time, textarea.val());
        
        // shows save alert and then the alert fades out
        saveAlert.show().fadeOut(2000);
    };

    $(saveBtn).on('click', saveText);
})