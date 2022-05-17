<?php

print($_POST);

function updateFilmsFile()
{

    $jsonString = file_get_contents('../json/peliculas.json');
    $data = json_decode($jsonString, true);

    print($data);
}

function updateUsersFile()
{

    $jsonString = file_get_contents('../json/usuarios.json');
    $data = json_decode($jsonString, true);

    print($data);
}
