(function () {
  "use strict";

  require('./date');

  var assert = require('assert'),
    d = process.argv[2] || (new Date()).toISOString();

  var tests = {
    year: "2011",
    ym: "2011-02",
    ymd: "2011-02-23",
    //ymdhm: "2011-02-23T23:12",
    //ymdhms: "2011-02-23T23:12:22",
    ymdhmss: "2011-02-23T23:12:22.123Z",
    ymdhmssz: "2011-02-23T23:12:22.123+10:30"
  };

  Object.keys(tests).forEach(function (key) {
    console.log(key);
    assert.ok(Date.ISO(tests[key]).toISOString());
  });

}());
