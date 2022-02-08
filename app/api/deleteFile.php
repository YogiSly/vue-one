<?php
$delFile = "../../" . $_POST["name"] . ".html";
//echo $delFile;
if (file_exists($delFile)) {
  unlink($delFile);
} else {
  header("HTTP/1.0 400 Bad Request");
}