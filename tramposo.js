ipcontent = document.getElementById('ip');

fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    console.log('Your Public IP Address:', data.ip);
    ipcontent.innerHTML = data.ip;
  })
  .catch(error => {
    console.error('Error fetching IP:', error);
    ipcontent.innerHTML = "bueno, tal vez no sepamos tu ip, pero no hagas trampa";

  });
