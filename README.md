Date
====

Please fork and contribute.

`|=^D`

Date.ISO() and Date.prototype.toISOString()
====

    require("date");
    var datestr = "2009-10-03T17:44:12.117Z+10:30";
    console.log(datestr === Date.ISO(datestr).toISOString());

Adapted from [ECMAScript ISO Date For Every Browser](http://webreflection.blogspot.com/2009/07/ecmascript-iso-date-for-every-browser.html)

Extends the `Date` prototype to work for [ISO 96001 (RFC 3339)](http://www.w3.org/TR/NOTE-datetime) dates

    Year:
      YYYY (eg 1997)
    Year and month:
      YYYY-MM (eg 1997-07)
    Complete date:
      YYYY-MM-DD (eg 1997-07-16)
    Complete date plus hours and minutes:
      YYYY-MM-DDThh:mmTZD (eg 1997-07-16T19:20+01:00)
    Complete date plus hours, minutes and seconds:
      YYYY-MM-DDThh:mm:ssTZD (eg 1997-07-16T19:20:30+01:00)
    Complete date plus hours, minutes, seconds and a decimal fraction of a second
      YYYY-MM-DDThh:mm:ss.sTZD (eg 1997-07-16T19:20:30.45+01:00)

    where:

      YYYY = four-digit year
      MM   = two-digit month (01=January, etc.)
      DD   = two-digit day of month (01 through 31)
      hh   = two digits of hour (00 through 23) (am/pm NOT allowed)
      mm   = two digits of minute (00 through 59)
      ss   = two digits of second (00 through 59)
      s    = one or more digits representing a decimal fraction of a second
      TZD  = time zone designator (Z or +hh:mm or -hh:mm)

The MIT License
====

    Copyright (c) 2009 
    Andrea Giammarchi (http://webreflection.blogspot.com/)
    AJ ONeal <coolaj86@gmail.com> (http://coolaj86.info)

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.