function atualizarContador() {
    let text = document.getElementById('idobs').value;
    let cont = text.length;
    document.getElementById('cont').innerText = cont + '/200';
}