var currentDay = $('#currentDay')
var calendar = $('.container')
var hour = moment('3pm', 'ha').format('ha');
console.log(hour)
var hourNum = moment().format('k')
console.log(hourNum)

// need to fix timeBlocks array
var timeBlocks = [
    {eight: {
            time: moment('8am', 'ha').format('ha'),
            hour: 8 }},
    {nine: {
        time: moment('9am', 'ha').format('ha'),
        hour: 9 }},
    {ten: {
        time: moment('10am', 'ha').format('ha'),
        hour: 10 }},
    {eleven: {
        time: moment('11am', 'ha').format('ha'),
        hour: 11 }},
    {twelve: {
        time: moment('12pm', 'ha').format('ha'),
        hour: 12 }},
    {one: {
        time: moment('1pm', 'ha').format('ha'),
        hour: 13 }},
    {two: {
        time: moment('2pm', 'ha').format('ha'),
        hour: 14 }},
    {three {
        time: moment('3pm', 'ha').format('ha'),
        hour: 15 }},
    {four {
        time: moment('4pm', 'ha').format('ha'),
        hour: 16 }},
    {five: {
        time: moment('5pm', 'ha').format('ha'),
        hour: 17 }},
    ];
console.log(timeBlocks[].time)


// display current day 
currentDay.text(moment().format('dddd, MMMM Do'));

// create time blocks
$(timeBlocks.time).each(function(index){
    var row = $('<div>').addClass('row time-block').appendTo(calendar);

    $('<div>').addClass('col-2 col-md-1 hour').text(timeBlocks.time[index]).appendTo(row);
    
    $('<textarea>').addClass('col-8 col-md-10 description').appendTo(row);

    var saveBtn = $('<div>').addClass('col-2 col-md-1 saveBtn').appendTo(row);

    $('<i>').addClass('fas fa-save').appendTo(saveBtn);
    console.log(timeBlocks.time[index])

    // need to update once timeBlocks array is figured out
    if (timeBlocks[index] === hour) {
        $('textarea').addClass('present')
    } else if (timeBlocks[index] < hourNum) {
        $('textarea').addClass('past')
    } else if (timeBlocks[index] > hourNum) {
        $('textarea').addClass('future')
    }
})

// color code time blocks to indicate past, present, or future

    // past = grey
    // present = red
    // future = green

// save button that saves text for that event in local storage
    // text shows up at top saying the text was saved to local storage