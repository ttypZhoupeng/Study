<?php
    $zhuangtai = $_GET["zhuangtai"];

    $conn = mysql_connect("localhost","root","root");

    mysql_select_db("kaoladeshujuku",$conn);

    mysql_query("SET NAMES UTF8");

    $result = mysql_query("SELECT * FROM xuexizhuangkuang WHERE timu1 = '{$zhuangtai}'");

    echo $result;
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>本页面要求有zhuangtai的get参数</h1>
    <select name="" id="">
        <option <?php if($zhuangtai=="非常明白"){echo "selected";} ?> value="非常明白">非常明白</option>
        <option <?php if($zhuangtai=="比较明白"){echo "selected";} ?> value="比较明白">比较明白</option>
        <option <?php if($zhuangtai=="一般"){echo "selected";} ?> value="非常明白">一般</option>
        <option <?php if($zhuangtai=="懵逼"){echo "selected";} ?> value="非常明白">懵逼</option>
        <option <?php if($zhuangtai=="非常懵逼"){echo "selected";} ?> value="非常明白">非常懵逼</option>
        <option <?php if($zhuangtai=="跳楼"){echo "selected";} ?> value="非常明白">跳楼</option>
    </select>


    <script>
        var oSelect = document.getElementsByTagName("select")[0];

        oSelect.onchange = function(){
            // alert("值被改变"+this.value);

            //改变网址
            window.location.href = "11_getxueyuanzhuangtai.php?zhuangtai="+this.value;
        }
    </script>

    <table border="1">

        <tr>
            <th>状态</th>
            <th>意见</th>
            <th>留言</th>
        </tr>
        <?php
            while($row = mysql_fetch_array($result)){
        ?>
                <tr>
                    <td><?php echo $row["timu1"] ?></td>
                    <td><?php echo $row["timu2"] ?></td>
                    <td><?php echo $row["timu3"] ?></td>
                </tr>
        <?php
            }
        mysql_close($conn);
        ?>
    </table>
</body>
</html>