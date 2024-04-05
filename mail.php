<?php

$recepient = "levchuk.oleg21@gmail.com";
$sitename = "Levchuk Oleg - Frontend Developer";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["text"]);
$message = "Name: $name \nEmail: $email \nPhone: $phone \nMessage: $text";

$pagetitle = "You have a message from \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $email");