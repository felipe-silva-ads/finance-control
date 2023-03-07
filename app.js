function onFormSubmit() {
    let nome = document.querySelector('.nome').value
    let tipo = document.querySelector('.tipo').value
    let data = document.querySelector('.data').value
    let valor = document.querySelector('.valor').value

    if (!nome || !tipo || !data || !valor) {
        alert('preencha todos os campos')
    } else {
        formData();
        clearData();
    }
}

function formData() {
    /*RECEBE A TABELA*/
    let table = document.querySelector('table')

    /*ADICIONA LINHA*/
    let newRow = table.insertRow(-1);

    /*ADICIONA CELULA NOME*/
    let newCellNome = newRow.insertCell(0)
    var nome = document.querySelector('.nome').value;
    newCellNome.innerText = nome;

    /*ADICIONA CELULA TIPO*/
    let newCellTipo = newRow.insertCell(1)
    var tipo = document.querySelector('.tipo').value;
    newCellTipo.innerText = tipo;

    /*ADICIONA CELULA DATA*/
    let newCellData = newRow.insertCell(2)
    var data = document.querySelector('.data').value;
    newCellData.innerText = data;

    /*ADICIONA CELULA VALOR*/
    let newCellValor = newRow.insertCell(3)
    var valor = document.querySelector('.valor').value;
    newCellValor.innerText = valor;

    let newCellDelete = newRow.insertCell(4)
    newCellDelete.classList.add('apagar')
    newCellDelete.innerText = 'Deletar'
}

function clearData() {
    document.querySelector('.nome').value = ''
    document.querySelector('.tipo').value = ''
    document.querySelector('.data').value = ''
    document.querySelector('.valor').value = ''
}


