// Funzione per gestire il cambio di stato attivo sugli elementi cliccati
document.querySelectorAll('.port, .day').forEach(item => {
    item.addEventListener('click', function(event) {
        // Rimuovi lo stato attivo da tutti gli elementi
        document.querySelectorAll('.port, .day').forEach(el => el.classList.remove('active'));

        // Aggiungi lo stato attivo all'elemento cliccato
        event.target.classList.add('active');
    });
});
