<meta charset="utf-8">

<?php
    $title = $_POST["title"];
    $content = $_POST["content"];
    // $time = time();


    $conn = mysql_connect("localhost","root","root");

    mysql_select_db("mydb",$conn);

    mysql_query("SET NAMES UTF8");

    $sql = "INSERT INTO msg1 (title,content,pubtime) VALUES ('{$title}','{$content}','".time()."')";

    $re = mysql_query($sql);

    if($re == 1){
        echo "留言成功！";
    }else{
        echo "留言失败！";
    }
?>