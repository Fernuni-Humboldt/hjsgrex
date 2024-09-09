<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = $_POST['data'];

    // Speichern der Daten in der Datei
    file_put_contents('Daten.txt', $data);

    echo 'Daten wurden erfolgreich gespeichert!';
} else {
    echo 'Ungültige Anforderung!';
}
?>
