<?php
include 'config.php';

if (isset($_POST["signup"])) {
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (fullname, email, phone, username, password) VALUES ('$fullname', '$email', '$phone', '$username', '$password')";

    $result = mysqli_query($conn, $sql);

    if ($result) {
        header("Location: kbc_instruction.html");
        exit(); // Ensure the script stops executing after the redirection
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
