<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<?php
			$arr = array("东西","南","西","北","中");
			
//			打印数组类型
			var_dump($arr);
			
			echo "<br />";
//			打印数组	
			
			echo "<pre>";
			print_r($arr);
			echo "</pre>";
			
			//数组长度
			echo count($arr);
			
			//有了数组长度，有for循环，那么遍历数组
			echo "<ul>";
			for($i = 0;$i<count($arr);$i++){
				echo "<li><h3>{$i}</h3><span>{$arr[$i]}</span></li>";  //在双引号里面可以写变量,单引号内会输出内容
			}	
				
			echo "</ul>";
		?>
		
	</body>
</html>