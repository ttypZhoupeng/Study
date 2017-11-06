<meta charset="utf-8">

<?php
    var_dump($_POST);


    $conn = mysql_connect("localhost","root","root");

    mysql_connect("mydb",$conn);

    mysql_query("SET NAMES UTF8");

    $sql = "INSERT INTO msg1 (title,content,pubtime) VALUES ('".$_POST['title']"','".$_POST['content']"','".$_POST['pubtime']"')";

    echo $sql;

    $re = mysql_query($sql);

    if($re == 1){
        echo "留言成功";
    }else{
        echo "留言失败";
    }
?>