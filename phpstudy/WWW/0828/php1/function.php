<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<?php
    function fun($a){
        echo "你好" . $a;
        return 3+4;
    }

    $a = fun("考拉");
    echo $a;
?>
</body>
</html>