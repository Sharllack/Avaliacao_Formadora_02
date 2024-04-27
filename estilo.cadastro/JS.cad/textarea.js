function atualizarContador() {
    let text = document.getElementById('idobs').value;
    let cont = text.length;
    document.getElementById('cont').innerHTML = cont + '/200';
}