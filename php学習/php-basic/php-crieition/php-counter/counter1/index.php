<html>
  <head>
    <title>アクセスカウンター</title>
  </head>
  <body>

  <?php
  $counter_file = "counter.txt";
  $counter_length = 8;

  $fp = fopen($counter_file,"r+");

  if($fp){
    if(flock($fp,LOCK_EX)){

      $counter = fgets($fp,$counter_length);
      $counter++;

      rewind($fp);

      if(fwrite($fp,$counter) === FALSE){
        print("ファイルの書き込みに失敗しました");
      }
      flock($fp,LOCK_UN);
    }
  }
  fclose($fp);
  print("あなたは".$counter."番目のお客様です。");
  ?>

  </body>
</html>