<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>array</title>
</head>
<body>
    <?php 
        $arr = array("东西","南","西","北","中");

        //打印数组类型
        var_dump($arr);
        echo "<br />";
        // 打印数组


        echo "<pre>";
        print_r($arr);
        echo "</pre>";

        echo $arr;
        // echo 不能打印数组



        //数组长度
        echo count($arr);

        // 遍历数组
        echo "<ul>";
        for($i = 0;$i<count($arr);$i++){
           
            echo "<li><h3>{$i}</h3><span>{$arr[$i]}</span></li>";
            // 双引号里面可以写变量，单引号会输出内容
        }

        echo "</ul>";
    ?>
</body>
</html>