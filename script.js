var videoIDs = [
  "w3LjpFhySTg",
  "73k27SEQVTU",
  "tEtg5Kg3voQ",
  "zM2d_2k9Nj0",
  "dMr-Jt_K3Cc",
  "IEikux7_3HA",
  "d8hFWghj84k",
  "B4-L2nfGcuE"
];

var lastIndex = -1;

var interval = 900000;

function changeVideo() {
  var iframe = document.getElementById('feed');
  var newIndex;

  // ensure the new video is not the same as the last one
  do {
    newIndex = Math.floor(Math.random() * videoIDs.length);
  } while (newIndex === lastIndex);

  var videoID = videoIDs[newIndex];
  iframe.src = "https://www.youtube.com/embed/" + videoID + "?autoplay=1&mute=1";

  lastIndex = newIndex;
}

// thank you andrew moore https://stackoverflow.com/questions/1217929/how-to-automatically-reload-a-web-page-at-a-certain-time
function refreshAt(hours, minutes, seconds) {
  var now = new Date();
  var then = new Date();

  if(now.getHours() > hours ||
    (now.getHours() == hours && now.getMinutes() > minutes) || now.getHours() == hours && now.getMinutes() == minutes && now.getSeconds() >= seconds) {
      then.setDate(now.getDate() + 1);
    }
    then.setHours(hours);
    then.setMinutes(minutes);
    then.setSeconds(seconds);

    var timeout = (then.getTime() - now.getTime());
    setTimeout(function() { window.location.reload(true); }, timeout);
}

refreshAt(0,0,0); // refresh at midnight every day so the new version of the website is available

var currentIndex = 0;
setInterval(changeVideo, interval); // 900000 ms = 15 minutes

window.onload = function() {
  changeVideo();
};