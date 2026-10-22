const formBusca = document.getElementById('busca');
formBusca.addEventListener('submit', (evento) => {
    evento.preventDefault();
    document.getElementById('resorts').scrollIntoView();
});