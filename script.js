// popup notification

function show_notification() {
  document.getElementById("notification").classList.toggle("show");
}

function show_message() {
  document.getElementById("message").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".icon-notification")) {
    var notification = document.getElementsByClassName("notification");
    var i;
    for (i = 0; i < notification.length; i++) {
      var openNotification = notification[i];
      if (openNotification.classList.contains("show")) {
        openNotification.classList.remove("show");
      }
    }
  }

  if (!event.target.matches(".icon-message")) {
    var notification = document.getElementsByClassName("message");
    var i;
    for (i = 0; i < notification.length; i++) {
      var openNotification = notification[i];
      if (openNotification.classList.contains("show")) {
        openNotification.classList.remove("show");
      }
    }
  }
};
