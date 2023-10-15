<!-- 関数・変数の代入は関数内で -->

<?php
function test_func(){
  $test_str = "test";
  return $test_str;
}
echo test_func();
?>


<br>
<!-- クラス -->

<?php
class test_class {
  public function add($a,$b){
    echo $a + $b;
  }
}

$tc = new test_class();
$tc ->add(10,20);
?>