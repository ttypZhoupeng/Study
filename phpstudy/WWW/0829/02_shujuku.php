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
        //创建一个连接,连接那个数据库服务器,用户名，密码
        $conn = mysql_connect("localhost","root","root");

        //选择一个库
        mysql_select_db("kaoladeshujuku",$conn);

        //设置一下字符集mysql_query就是执行sql的意思
        mysql_query("SET NAMES UTF8");

        //执行一条SQL语句,SQL语句操作数据库
        $result = mysql_query("SELECT * FROM xuesheng");

        // $result很像js中的类数组对象，但是还不是数组
        // mysql_fetch_array这个函数就能把$result混沌状态的
        while($row = mysql_fetch_array($result)){
            print_r($row);
            echo "<br />";
        }

        //关闭数据库
        mysql_close($conn);
    ?>
</body>
</html>