
  require('./date');

  var datetime;

  datetime = Date.ISO("1970-01-01T00:00Z");
  console.log(datetime.valueOf());
  console.log(datetime.toUTCString());
  console.log(datetime.toString());
  console.log(datetime.toISOString());

  datetime = Date.ISO("1970-01-01T01:00:00+01:00");
  console.log(datetime.valueOf());
  console.log(datetime.toUTCString());
  console.log(datetime.toString());
  console.log(datetime.toISOString());
