<meta charset="utf-8">
<?php 
    $arr = array(
        "xingming" => "xiaoshi",
        "age" => "19",
        "qqhao" => 13552,
        "shoujihao" => 315614,
    );

    // print_r($arr); 输出下面就不执行了吗

    // foreach( $arr as $key => $value){
    //     echo $key . "是" . $value . "</br>";
    // } //中文乱码

    // $a = array("东","东","东","东");

    // $b = json_encode($a); //json编码，数组数据转换成json数据

    // print_r($b);



    //合并数组
    // $arr1 = array(1,3);
    // $arr2 = array(2,4);

    // print_r(array_merge($arr1,$arr2));

    // //数组去掉重复内容
    // $arr = array(1,2,3,4,5);

    // print_r( array_unique($arr));


    //差值
    // $xiaoshi = array(
    //     "周鹏",
    //     "马冬冬",
    //     "张强"
    // );

    // $zhangqiang = array(
    //     "周鹏",
    //     "马冬冬",
    //     "李明"
    // );

    // print_r(array_diff($xiaoshi,$zhangqiang));

    // $a = array("东","南","西","北");

    // array_push($a,"中");//尾部插入
    // var_dump($a);
    // echo "<br />" ;

    // array_unshift($a,"ab");//头部插入
    // var_dump($a);
    // echo "<br />";

    // array_shift($a);//头部删除
    // var_dump($a);
    // echo "<br />"

?>