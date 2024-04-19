"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 0] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 1] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 2] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 3] = "Thursday";
    WeekDays[WeekDays["Friday"] = 4] = "Friday";
    WeekDays[WeekDays["Saturday"] = 5] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 6] = "Sunday";
})(WeekDays || (WeekDays = {}));
function printDay(day) {
    console.log("Ngày trong tuần:", day);
}
printDay(WeekDays.Monday);
printDay(WeekDays.Tuesday);
printDay(WeekDays.Wednesday);
printDay(WeekDays.Thursday);
printDay(WeekDays.Friday);
printDay(WeekDays.Saturday);
printDay(WeekDays.Sunday);
