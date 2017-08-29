<meta charset="utf-8">
<?php
    // var_dump($_GET);

    // echo $_GET["name"];//接受GET传参k值为name的内容


    //接收参数的处理
    $name = isset($_GET["name"])?$_GET["name"]:"没有";

    echo $name;

    
?>