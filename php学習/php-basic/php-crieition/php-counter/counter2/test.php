<?php
  $filename = "counter.dat";

  $fp = fopen($filename,"r+");
  $count = fgets($fp,32);
  $count++;
  fseek($fp,0);
  fputs($fp,$count);
  flock($fp,LOCK_UN);
  fclose($fp);
  echo "あなたは".$count."番目のお客様です。";
?>