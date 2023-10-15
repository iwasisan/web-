<?php
    $usr = [
        ['名前' => '山田', '性別' =>'男', '数学' => 78, '国語' => 47, '英語' => 92],
        ['名前' => '田中', '性別' =>'女', '数学' => 12, '国語' => 88, '英語' => 67],
        ['名前' => '高橋', '性別' =>'男', '数学' => 56, '国語' => 34, '英語' => 77],
        ['名前' => '橋本', '性別' =>'女', '数学' => 97, '国語' => 55, '英語' => 45]
    ];
 
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
        <title>tech.pjin.jp HTML5 Template</title>
 
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
 
        <!--[if lt IE 9]>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>
        <div class="container">
            <div class="page-header">
                <h1><i class="fa fa-check-square"></i> PHP問題２４</h1>
            </div>
            <div class="jumbotron">
            <h3>
            <?php
                $sum = 0;
                foreach($usr as $k => $u){
                    if($u['性別'] == '女'){
                        $sum += $u['国語'];
                    }
                }
                print $sum;
            ?>
            </h3>
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    </body>
</html>