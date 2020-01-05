// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const ipc = require('electron').ipcRenderer;

const printButton = document.getElementById('print-button');

printButton.addEventListener('click', function(event){
  ipc.send('print-document');
});

ipc.on('print-success', function(event){
  const message = 'Print Successful';
  document.getElementById('message').innerHTML = message;
})