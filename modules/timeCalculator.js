var os = require('os');

function timeCalculator() {
    var uptime = os.uptime();
  if (uptime < 60) {
    console.log('Uptime: ', uptime, "sec");
  } else if ((uptime >= 60) && (uptime < 3600 )) {
    console.log('Uptime: ', (uptime / 60).toFixed(0), "min", (uptime % 60), "sec");
  } else if (uptime >= 3600) {
    console.log('Uptime: ', (uptime / 3600).toFixed(0), "hour(s)", ((uptime % 3600)/60).toFixed(0), "min", (uptime % 60), "sec");
  }
}


exports.print = timeCalculator;
