<?php
$tosi = $_POST["tosi"];
$birthday = strtotime($tosi);
// 入力した生年月日をそれぞれの数字に分ける。
$tuki = (int)date("m",$birthday);
$hiniti = (int)date("d",$birthday);
$year = (int)date("Y",$birthday);

$now_year = (int)date("Y");
$age = $now_year - $year
?>

あなたの誕生日は<?php print $tuki; ?>月<?php print $hiniti; ?>日です。
<br>
あなたの年齢は<?php print $age; ?>歳です。
<br>

<?php
//	星座名	時期
//	水瓶座	1/20～2/18
//	魚座/	2/19～3/20
//	牡羊座/　3/21～4/19
//	牡牛座/	4/20～5/20
//	双子座/　5/21～6/21
//	蟹座/	6/22～7/22
//	獅子座/　7/23～8/22
//	乙女座/　8/23～9/22
//	天秤座/　9/23～10/23
//	蠍座/　　10/24～11/21
//	射手座/　11/22～12/21
//	山羊座/	12/22～1/19
if(($tuki == 1 && $hiniti >= 20)||($tuki == 2 && $hiniti <= 18)){
  echo "星座は水瓶座です。";
}else if(($tuki == 2 && $hiniti >= 19)||($tuki == 3 && $hiniti <= 20)){
  echo "星座は魚座です。";
}else if(($tuki == 3 && $hiniti >= 21)||($tuki == 4 && $hiniti <= 19)){
  echo "星座は牡羊座です。";
}else if(($tuki == 4 && $hiniti >= 20)||($tuki == 5 && $hiniti <= 20)){
  echo "星座は牡牛座です";
}else if(($tuki == 5 && $hiniti >= 21)||($tuki == 6 && $hiniti <= 21)){
  echo "星座は双子座です";
}else if(($tuki == 6 && $hiniti >= 22)||($tuki == 7 && $hiniti <= 22)){
  echo "星座は蟹座です";
}else if(($tuki == 7 && $hiniti >= 23)||($tuki == 8 && $hiniti <= 22)){
  echo "星座は獅子座です";
}else if(($tuki == 8 && $hiniti >= 23)||($tuki == 9 && $hiniti <= 22)){
  echo "星座は乙女座です";
}else if(($tuki == 9 && $hiniti >= 23)||($tuki == 10 && $hiniti <= 23)){
  echo "星座は天秤座です";
}else if(($tuki == 10 && $hiniti >= 24)||($tuki == 11 && $hiniti <= 21)){
  echo "星座は蠍座です";
}else if(($tuki == 11 && $hiniti >= 22)||($tuki == 12 && $hiniti <= 21)){
  echo "星座は射手座です";
}else if(($tuki == 12 && $hiniti >= 22)||($tuki == 1 && $hiniti <= 19)){
  echo "星座は山羊座です";
}
?>






