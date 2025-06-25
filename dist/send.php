<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// 1. Вручную подключаем файлы PHPMailer
require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mail = new PHPMailer(true); 
    try {
        // 2. Настройки SMTP (пример для Gmail)
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'sbrilkov111@gmail.com';
        $mail->Password = 'qhtq ywci udky amnx'; // Пароль приложений Gmail
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;


		   // Кодировка
    	  $mail->CharSet = 'UTF-8'; // Важно!
    	  $mail->Encoding = 'base64'; // Для корректного отображения
		
        // 3. Отправка письма
        $mail->setFrom('sbrilkov111@gmail.com', 'Форма');
        $mail->addAddress('sbrilkov111@gmail.com');
        $mail->Subject = 'Новая заявка';

		  $name = $_POST['name'];
		  $number = $_POST['number'];
		  $psckage = $_POST['package-name'] ?? 'Help';
        $mail->Body = "Name:  $name \nNumber: $number\nPackage: $psckage";
		


        $mail->send();
        echo json_encode(['success' => true, 'message' => 'Письмо отправлено!']);
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'message' => 'Ошибка отправки!']);
    }
}

?>
