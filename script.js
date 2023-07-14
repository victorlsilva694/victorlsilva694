fetch('https://github.com/victorlsilva694/victorlsilva694/blob/main/jason.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // Renderiza o conteúdo do JSON
    var jsonContent = data.html;
    var jsonContainer = document.getElementById('json-content');
    jsonContainer.innerHTML = jsonContent;
  })
  .catch(function(error) {
    console.log('Ocorreu um erro ao carregar o arquivo JSON:', error);
  });