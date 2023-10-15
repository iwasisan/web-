<!-- アロー関数 -->
<?php

$add = fn($v1,$v2) => $v1 + $v2;

echo $add(1,2);

?>

<br>

<?php
class User{
  public $name;
  public $age;
  public $haveFever;

  function __construct(string $name,int $age,bool $haveFever)
  {
    $this->name = $name;
    $this->age = $age;
    $this->haveFever = $haveFever;
  }
}

$sample_user = new User("sato takasi",25,false);

echo "名前：".$sample_user->name."<br />";
echo "年齢：".$sample_user->age."<br />";

echo "健康状態";

if($sample_user->haveFever){
  echo "体調不良<br />";
}else{
  echo "良好<br />";
}


