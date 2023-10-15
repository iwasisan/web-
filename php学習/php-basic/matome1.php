<!-- できるだけすべて取り込んだ関数（Function)を作成してみる。 -->

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
<body>
  <h3>転職の儀</h3>

  <form action="matome2.php" method="POST">
    <label>あなたの名前を教えてください。</label>
    <br>
    <input type="text" name="myname">
    <br>
    <label>
      ある日道を歩いている際、あなたは何かを見つけました。<br>
      それは一体？
    </label>
    <br>
    <select name="Qus1">
      <option value="Option A">お金</option>
      <option value="Option B">本</option>
      <option value="Option C">木の棒</option>
    </select>
    <br>
    <label>
      休日、雨に降られ予定が変更になりました。<br>
      どう過ごしますか。
    </label>
    <br>
    <select name="Qus2">
      <option value="Option A2">体を鍛える</option>
      <option value="Option B2">友人とコンタクトをとる</option>
      <option value="Option C2">別の予定を立てる</option>
    </select>
    <br>
    <label>
      あなたが大切にしてるものは次のうちどれ？<br>
    </label>
    <select name="Qus3">
      <option value="Option A3">人との繋がり</option>
      <option value="Option B3">財産</option>
      <option value="Option C3">意志</option>
    </select>
    <br>
    <input type="submit" value="送信">
  </form>

</body>
</html>