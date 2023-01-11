document.getElementById("submit-btn").addEventListener("click", function(e) {
  e.preventDefault();
  submitForm();
});

function submitForm() {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "admin.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = xhr.responseText;
      if (response === "Invalid username or password.") {
        document.getElementById("message").innerHTML = response;
      } else {
        window.location.href = 'dashboard.php';
      }
    }
  };
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  xhr.send("username=" + username + "&password=" + password);
}
