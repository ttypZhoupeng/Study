<meta charset="utf-8">
<?php
    $xingming = $_GET["xingming"];
    $nianling = $_GET["nianling"];
    $qqhao = $_GET["qqhao"];

    echo $xingming . $nianling . $qqhao;

    $conn = mysql_connect("localhost","root","root");

    mysql_select_db("kaoladeshujuku",$conn);

    mysql_query("SET NAMES UTF8");

    $result = mysql_query("INSERT INTO xuesheng(xingming,nianling,qqhao) VALUES ('{$xingming}','{$nianling}','{$qqhao}')");

    if( $result == 1){
        echo "数据成功插入";
    }else{
        echo "数据错误，请联系管理员，管理员如何联系，请问管理员";
    }
    

    mysql_close($conn);
?>