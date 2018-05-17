
function timeCalculator(time) {
  if ( time < 60) {
    return time + ' sec ';
  } else if ( (time >= 60) && (time < 3600 )) {
    return  Math.floor(time / 60) + ' min ' + (time % 60) + ' sec ';
  } else if (time >= 3600) {
    return Math.floor(time / 3600) + ' hour(s) ' + (Math.floor((time % 3600)/60)) + ' min ' + (time % 60) + ' sec ';
  }
}

exports.print = timeCalculator;
