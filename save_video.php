<?php
    
    if(!isset($_POST['type']) || !isset($_POST['video']) || !$_POST['type'] || !$_POST['video'])
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
    
    $file_path = $path . '/' . $file;
    file_put_contents( $file_path, base64_decode($_POST['video']));
    echo json_encode( array('message'=>'video saved successfully', 'video_id' => $file_path) );
    ?>
