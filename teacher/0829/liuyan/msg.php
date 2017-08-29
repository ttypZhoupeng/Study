<meta charset="utf-8">

<?php
    var_dump($_POST);


    $conn = mysql_connect("localhost","root","root");

    mysql_connect("mydb",$conn);

    mysql_query("SET NAMES UTF8");

    $tid = $_GET["tid"];

    echo $tid;

    $sql = "SELECT * FROM msg WHERE id=" . $tid;

    $re = mysql_query($sql);

   echo $re;
?>