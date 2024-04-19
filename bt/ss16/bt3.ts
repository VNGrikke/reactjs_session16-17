enum WeekDays {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function printDay<T>(day: T): void {
    console.log("Ngày trong tuần:", day);
}

printDay(WeekDays.Monday);
printDay(WeekDays.Tuesday);
printDay(WeekDays.Wednesday);
printDay(WeekDays.Thursday);
printDay(WeekDays.Friday);
printDay(WeekDays.Saturday);
printDay(WeekDays.Sunday);
