<?php

file_put_contents('../json/usuarios.json', file_get_contents("php://input"));

print("Worked");
