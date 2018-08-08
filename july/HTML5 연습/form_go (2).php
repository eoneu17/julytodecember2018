<!DOCTYPE html>
<html lang="ko">
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<meta charset="UTF-8">
	<title>index</title>
</head>
<body>
  안녕하세요.
  <?
  echo $_GET["name"];
  ?>
  님,<br>
  당신의 이메일은
  <?
  echo $_GET["email"];
  ?>입니다.

</body>
</html>
