<meta charset="utf-8">
<?php
    $timu1 = $_GET["timu1"];
    $timu2 = $_GET["timu2"];
    $timu3 = $_GET["timu3"];

    echo $timu1 . $timu2 . $timu3;



    $conn = mysql_connect("localhost","root","root");

    mysql_select_db("kaoladeshujuku",$conn);

    mysql_query("SET NAMES UTF8");

    $result = mysql_query("INSERT INTO xuexizhuangkuang(timu1,timu2,timu3) VALUES ('{$timu1}','{$timu2}','{$timu3}')");

    if($result == 1){
        echo "插入数据成功";
    }else{
        echo "数据错误，请联系管理员，管理员如何联系，请问管理员";
    }

    mysql_close($conn);
?>