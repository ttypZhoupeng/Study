<meta charset="utf-8">

<?php
    var_dump($_POST);


    $conn = mysql_connect("localhost","root","root");

    mysql_connect("mydb",$conn);

    mysql_query("SET NAMES UTF8");

    $sql = "SELECT * FROM msg1";

    echo $sql;

    $re = mysql_query($sql);

    while($row = mysql_fetch_array($re)){
        echo "<h1>{$row['title']}</h1>";
    }
?>