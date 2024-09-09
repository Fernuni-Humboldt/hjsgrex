fetch('Summe.txt')
    .then(response => {
        if (!response.ok) {
            throw new Error('Netzwerkantwort war nicht ok');
        }
        return response.text();
    })
    .then(text => {
        document.getElementById('Summe').textContent = text;
    })
    .catch(error => {
        document.getElementById('Summe').textContent = 'Fehler beim Laden der Datei: ' + error;
    });