fetch('IBAN.txt')
    .then(response => {
        if (!response.ok) {
            throw new Error('Netzwerkantwort war nicht ok');
        }
        return response.text();
    })
    .then(text => {
        document.getElementById('IBAN').textContent = text;
    })
    .catch(error => {
        document.getElementById('IBAN').textContent = 'Fehler beim Laden der Datei: ' + error;
    });