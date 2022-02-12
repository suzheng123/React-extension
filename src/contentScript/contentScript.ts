chrome.runtime.sendMessage('From contentScript', (response) => {
  console.log(response)
})
