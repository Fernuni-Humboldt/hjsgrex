fetch('Summe.txt')
    .then(response => {
        if (!response.ok) {
            throw new Error('Netzwerkantwort war nicht ok');
        }
        return response.text();
    })
    .then(text => {
        // Debugging: Ausgabe des rohen Textes zur Überprüfung
        console.log('Roher Text:', text);

        // Die Zahl aus dem Text extrahieren und in eine Dezimalzahl umwandeln
        const number = parseFloat(text.trim());
        
        // Debugging: Ausgabe der extrahierten Zahl zur Überprüfung
        console.log('Extrahierte Zahl:', number);

        // Funktion zur Formatierung der Zahl mit Tausendertrennung und zwei Dezimalstellen
        function formatNumber(num) {
            return num.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' EUR';
        }

        // Falls der Text keine gültige Zahl ist, verwenden wir eine Standardnachricht
        const formattedText = isNaN(number) ? 'Ungültiger Kontostand' : formatNumber(number);

        // Debugging: Ausgabe des formatierten Textes zur Überprüfung
        console.log('Formatierter Text:', formattedText);

        document.getElementById('Summe').textContent = formattedText;
    })
    .catch(error => {
        document.getElementById('Summe').textContent = 'Fehler beim Laden der Datei: ' + error;
    });
