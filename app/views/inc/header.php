<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js"></script>
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
    <!-- Bootstrap -->
    <link rel="stylesheet" href="<?= URLROOT ?>/css/style.css">
    <title>Document</title>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="logo">
                <img src="<?= URLROOT . '/public/img/MyLogo1.png'; ?>" alt="logo">
            </div>
            <div class="links">
                <ul>
                    <li class="link"><a href="<?= URLROOT ?>/AdminController/index">home page</a></li>
                    <li class="link"><a href="<?= URLROOT ?>/">my projects</a></li>
                    <li class="link"><a href="<?= URLROOT ?>/">about me</a></li>
                    <li class="link"><a href="<?= URLROOT ?>/">contact me</a></li>
                </ul>
            </div>
        </div>
        <div class="hero">
            <span class="welcome">welcom</span>
            <span class="name">i'm Larif Douaa</span>
        </div>
    </header>