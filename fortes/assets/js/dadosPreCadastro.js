window.onload = function() {
    var dadosArmazenados = localStorage.getItem('dadosPreCadastro');
    if (dadosArmazenados) {
        var dadosArray = JSON.parse(dadosArmazenados);
        var tabela = document.querySelector('.pre-cadastro-table tbody');
        
        dadosArray.forEach(function(dados) {
            var newRow = tabela.insertRow();
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            cell1.textContent = dados.nome;
            cell2.textContent = dados.areaDestinada;
        });
    }
};
