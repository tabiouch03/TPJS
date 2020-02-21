<?php

$m = new Memcached();
$m->addServer('localhost', 11211);

if ( @$_REQUEST["x"] && @$_REQUEST["y"] ) {
    $newX = $_REQUEST["x"] ;
    $newY = $_REQUEST["y"] ;
    // get the q parameter from URL
    $m->set('X', $newX  );
    $m->set('Y', $newY );
}
else { ; }
// just output values as string
echo $m->get('X')."/".$m->get('Y') ;

// could be better received by js from a json format ...
?>