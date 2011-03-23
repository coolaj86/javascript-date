(function () {
  "use strict";

  require('date');

  var assert = require('assert'),
    d = process.argv[2] || (new Date()).toISOString();

  var tests = {
    // Year:
    //   YYYY (eg 1997)
    YYYY: "1997",

    // Year and month:
    //   YYYY-MM (eg 1997-07)
    YYYY_MM: "1997-07",

    // Complete date:
    //   YYYY-MM-DD (eg 1997-07-16)
    YYYY_MM_DD: "1997-07-16",

    // Complete date plus hours and minutes:
    //   YYYY-MM-DDThh:mmTZD (eg 1997-07-16T19:20+01:00)
    YYYY_MM_DDThh_mm_TZD: "1997-07-16T19:20+01:30",
    YYYY_MM_DDThh_mm_Z: "1997-07-16T19:20Z",

    // Complete date plus hours, minutes and seconds:
    //   YYYY-MM-DDThh:mm:ssTZD (eg 1997-07-16T19:20:30+01:00)
    YYYY_MM_DDThh_mm_ssTZD: "1997-07-16T19:20:30+01:00",
    YYYY_MM_DDThh_mm_ssZ: "1997-07-16T19:20:30Z",

    // Complete date plus hours, minutes, seconds and a decimal fraction of a second
    //   YYYY-MM-DDThh:mm:ss.sTZD (eg 1997-07-16T19:20:30.45+01:00)
    YYYY_MM_DDThh_mm_ss_sTZD: "1997-07-16T19:20:30.453+01:00",
    YYYY_MM_DDThh_mm_ss_sZ: "1997-07-16T19:20:30.453Z"
  };

  Object.keys(tests).forEach(function (key) {
    console.log(key);
    assert.ok(Date.ISO(tests[key]).toISOString());
  });

}());
