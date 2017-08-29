<meta charset="utf-8">
<?php
    $conn = mysql_connect("localhost","root","root");

    mysql_select_db("kaoladeshujuku",$conn);

    mysql_query("SET NAMES UTF8");

    $result = mysql_query("INSERT INTO xuesheng(xingming,nianling,qqhao) VALUES('小石','19','1111111111')");

    if($result == 1){
        echo "数据成功插入";

    }else{
        echo "数据库错误，请联系管理员，管理员如何练习，请问管理员";
    }

    mysql_close($conn);
?>