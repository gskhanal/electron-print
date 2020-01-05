const ipc = require('electron').ipcRenderer;

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})

const printButton = document.getElementById('print-button');

printButton.addEventListener('click', function(event){
  ipc.send('print-document');
});

ipc.on('print-success', function(event){
  const message = 'Print Successful';
  document.getElementById('message').innerHTML = message;
})