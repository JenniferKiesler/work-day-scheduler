var currentDay = $('#currentDay')
var calendar = $('.container')
var hourNum = Number(moment().format('k'));
// var hourNum = Number(moment('12pm', 'ha').format('k')); used to check color-coded time blocks

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

// display current day 
currentDay.text(moment().format('dddd, MMMM Do'));

// loop through timeBlocks[]
$(timeBlocks).each(function(index) {
    // create time blocks
    var row = $('<div>').addClass('row time-block').appendTo(calendar);
    
    $('<div>').addClass('col-2 col-md-1 hour').text(timeBlocks[index].time).appendTo(row);
    
    var textarea = $('<textarea>').addClass('col-8 col-md-10 description').appendTo(row);
    
    // get saved data from local storage and set to textarea
    var savedEvent = localStorage.getItem('event-' + timeBlocks[index].time);
    textarea.val(savedEvent);
    
    // color code the time blocks
    if (timeBlocks[index].hour === hourNum) {
        $(textarea).addClass('present')
    } else if (timeBlocks[index].hour < hourNum) {
        $(textarea).addClass('past')
    } else if (timeBlocks[index].hour > hourNum) {
        $(textarea).addClass('future')
    }

    // create save button
    var saveBtn = $('<div>').addClass('col-2 col-md-1 saveBtn').appendTo(row);
    
    $('<i>').addClass('fas fa-save').appendTo(saveBtn);
    
    // save data to local storage
    function saveText() {
        localStorage.setItem('event-' + timeBlocks[index].time, textarea.val())
    }

    $(saveBtn).on('click', saveText)
})