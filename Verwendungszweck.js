fetch('Verwendungszweck.txt')
    .then(response => {
        if (!response.ok) {
            throw new Error('Netzwerkantwort war nicht ok');
        }
        return response.text();
    })
    .then(text => {
        document.getElementById('Verwendungszweck').textContent = text;
    })
    .catch(error => {
        document.getElementById('Verwendungszweck').textContent = 'Fehler beim Laden der Datei: ' + error;
    });