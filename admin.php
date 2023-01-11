<?php
    $username = $_POST["username"];
    $password = $_POST["password"];

    // replace this with your own code to check the credentials
    if ($username === "bandor" && $password === "pro") {
        // login successful
        header("Location: dashboard.php");
    } else {
        echo "Invalid username or password.";
    }
?>
