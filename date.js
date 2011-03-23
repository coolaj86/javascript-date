/*jslint onevar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, strict: true */
/*global require: true, provide: true */
(function () {
  "use strict";

  require('require-kiss');

  /** ES5 ISO Date Parser Plus toISOString Method
   * @author          Andrea Giammarchi
   * @blog            WebReflection
   * @version         2009-07-04T11:36:25.123Z
   * @compatibility   Chrome, Firefox, IE 5+, Opera, Safari, WebKit, Others
   */

  function ISO(datestring) {
                    //    1        3        5        7       8       10     12        13   15     16      17
                    // yyyy   -   mm   -   dd  'T'  HH  :   MM   :   ss    .ms       'Z'  +/-     HH  :   MM 
                    //        ?        ?        ?                ?         ?
      var pattern = /^(\d{4})(-(\d{2})(-(\d{2})(T(\d{2}):(\d{2})(:(\d{2})(\.(\d+))?)?(Z|((\+|-)(\d{2}):(\d{2}))))?)?)?$/,
        match = pattern.exec(datestring),
        date = new Date(),
        hour,
        minute,
        opstring;

      if(null === match) {
        return false;
        // throw new Error("Invalid ISO String");
      }

      // The bit-shifting is shorthand for `(undefined !== m) && m.valueOf(m) || 0`
      date.setUTCFullYear(match[1] >> 0);
      date.setUTCMonth(match[3] ? (match[3] >> 0) - 1 : 0);
      date.setUTCDate(match[5] >> 0);
      date.setUTCHours(match[7] >> 0);
      date.setUTCMinutes(match[8] >> 0);
      date.setUTCSeconds(match[10] >> 0);
      date.setUTCMilliseconds(match[12] >> 0);
      if (match[13] && match[13] !== "Z") {
        hour = match[16] >> 0;
        minute = match[17] >> 0;
        opstring = (match[15] === "+");

        date.setUTCHours((match[7] >> 0) + opstring ? -hour : hour);
        date.setUTCMinutes((match[8] >> 0) + opstring ? -minute : minute);
      }
      return date;
  }

  function padHour2(i) {
    return (i < 10) ? ("0" + i) : i;
  }

  function padMs3(i) {
    if (i.length < 2) {
      return "00" + i;
    }

    if (i.length < 3) {
      return "0" + i;
    }

    if  (3 < i.length)  {
      return Math.round(i / Math.pow(10, i.length - 3));
    }

    return i;
    // return i.length < 2 ? "00" + i : i.length < 3 ? "0" + i : 3 < i.length ? Math.round(i / Math.pow(10, i.length - 3)) : i
  }

  function toISOString () {
    return [
      this.getUTCFullYear(), "-",
      padHour2(this.getUTCMonth() + 1), "-",
      padHour2(this.getUTCDate()), "T",
      padHour2(this.getUTCHours()), ":",
      padHour2(this.getUTCMinutes()), ":",
      padHour2(this.getUTCSeconds()), ".",
      padMs3(String(this.getUTCMilliseconds())), "Z"
    ].join("");
  }


  // Do nothing if this interpretor is es5 ready
  // otherwise, add es5 functionality

  if (!Date.ISO) {
    Date.ISO = ISO;
  }

  if (!Date.prototype.toISOString) {
    Date.prototype.toISOString = Date.prototype.toISOString || toISOString;
  }

  provide('./date-es5');
}());
