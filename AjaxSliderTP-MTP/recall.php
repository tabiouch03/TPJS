<?php

$m = new Memcached();
$m->addServer('localhost', 11211);

echo $m->get('X')."/".$m->get('Y') ;


?>