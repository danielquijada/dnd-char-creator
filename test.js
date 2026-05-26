alert("Testing stuff, get out");

fetch('./test.json')
  .then(response => response.json())
  .then(data => alert(JSON.stringify(data)))
  .catch(error => console.error(error));