export class DateUtils {
    static addToDate(date, days){
        var offsetToAdd = days * DAY_IN_MS;
        var result = new Date();
        result.setTime(date.getTime() + offsetToAdd);
        return result;
    }
    
    static subractFromDate(date, days){
        return DateUtils.addToDate(date, days * -1);
    }
}

const DAY_IN_MS = 86400000;
