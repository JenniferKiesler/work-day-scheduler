var currentDay = $('#currentDay')
var calendar = $('.container')
var hour = moment('3pm', 'ha').format('ha');
console.log(hour)
var hourNum = Number(moment('3pm', 'ha').format('k'))
console.log(hourNum)

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
console.log(timeBlocks)


// display current day 
currentDay.text(moment().format('dddd, MMMM Do'));

// create time blocks
$(timeBlocks).each(function(index){
    var row = $('<div>').addClass('row time-block').appendTo(calendar);

    $('<div>').addClass('col-2 col-md-1 hour').text(timeBlocks[index].time).appendTo(row);
    
    $('<textarea>').addClass('col-8 col-md-10 description').appendTo(row);
    
    if (timeBlocks[index].hour === hourNum) {
        $('textarea').addClass('present')
    } else if (timeBlocks[index].hour < hourNum) {
        $('textarea').addClass('past')
    } else if (timeBlocks[index].hour > hourNum) {
        $('textarea').addClass('future')
    }
    var saveBtn = $('<div>').addClass('col-2 col-md-1 saveBtn').appendTo(row);

    $('<i>').addClass('fas fa-save').appendTo(saveBtn);
    console.log(timeBlocks[index].time)
    console.log(timeBlocks[index].hour)

    // need to update once timeBlocks array is figured out
})

// color code time blocks to indicate past, present, or future

    // past = grey
    // present = red
    // future = green

// save button that saves text for that event in local storage
    // text shows up at top saying the text was saved to local storage