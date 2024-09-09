
        function formatDate(date) {
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Monate sind 0-basiert
            const year = date.getFullYear();
            
            return `${day}.${month}.${year}`;
        }

        // Aktuelles Datum holen
        const currentDate = new Date();

        // Datum formatieren
        const formattedDate = formatDate(currentDate);

        // Datum in das HTML-Element einfügen
        document.getElementById('datum').textContent = formattedDate;
  