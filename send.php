<?php
	$to = "jkl130773@gmail.com"; 
	$from = $_POST['email']; 
	$name = $_POST['name'];
	$subject = "Форма отправки сообщений с сайта портфолио";
	$subject2 = "Copy of your form submission";
	$message = $name . " оставил сообщение:" . "\n\n" . $_POST['message'];
	$message2 = "Here is a copy of your message " . $name . "\n\n" . $_POST['message'];
	$headers = "From:" . $from;
	$headers2 = "From:" . $to;
	mail($to,$subject,$message,$headers);
	// mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender - Отключено!
	echo "Сообщение отправлено. Спасибо Вам " . $name . ".";
	echo "<br /><br /><a href='https://epicblog.net'>Вернуться на сайт.</a>";
?>

<!--Переадресация на главную страницу сайта, через 3 секунды-->
<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="https://epicblog.net/index.php");}
window.setTimeout("changeurl();",3000);
history.replaceState({ searchTerm: searchBox.val(), page: pageNumber, loaded: 0 }, "", document.URL);
</script>
