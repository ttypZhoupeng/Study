<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .hong{
            background:red;
        }
    </style>
</head>
<body>
    <?php for($i=1;$i<=100;$i++){ ?>

        <p <?php if($i % 2 ===0){echo "class='hong'";} ?> ><?php echo $i; ?></p>

    <?php } ?>
</body>
</html>