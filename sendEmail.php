<?php

require 'vendor/autoload.php';
  use \Mailjet\Resources;
  $mj = new \Mailjet\Client('32c02ea704d08653c03858e185bdeff0','01f6ff4e408dd4e61cae063cdb821801',true,['version' => 'v3.1']);
  $body = [
    'Messages' => [
      [
        'From' => [
          'Email' => "romain.laurent@epitech.digital",
          'Name' => $_POST["lastnameFirstname"]
        ],
        'To' => [
          [
            'Email' => "romain.laurent@epitech.digital",
            'Name' => "Romain Laurent"
          ]
        ],
        'Subject' => $_POST["mailObject"],
        'HTMLPart' => "<h3>" . $_POST["email"] . " " . $_POST["lastnameFirstname"] . "</h3> <br><br>" . $_POST["mailContent"],
        'CustomID' => "AppGettingStartedTest"
      ]
    ]
  ];
  $response = $mj->post(Resources::$Email, ['body' => $body]);
  $response->success(); // && var_dump($response->getData());

header("location: index.html");
exit();

?>