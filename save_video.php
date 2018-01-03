<?php
    
    if(!$_POST['type'] || !$_POST['video'])
    {
        echo 'missing params';
        return;
    }
    
    $path = 'video/' . $_POST['type'];
    $ext = '.mkv';
    $file = time() . '-' . bin2hex(openssl_random_pseudo_bytes(16)) . $ext;
    
    if (!file_exists($path)) {
        mkdir($path, 0777, true);
    }
    
    file_put_contents($path . '/' . $file, base64_decode($_POST['video']));
    echo 'video saved successfully';
    ?>
