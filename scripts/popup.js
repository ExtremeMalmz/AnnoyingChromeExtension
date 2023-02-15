function sendCheesifyMsg() {
  console.log("1");
  chrome.tabs.query({active:true, currentWindow : true}, function(tabs){  
    console.log("11");
    chrome.tabs.sendMessage(tabs[0].id, {action : "cheesify"});
    });
  }
  
  // TODO: Write a function to send a message to the active tab to 'cheesify' it



// TODO: Add an event listener to trigger the function above when clicking the 'Cheesify' button
document.querySelector("#cheesify").addEventListener("click", event => sendCheesifyMsg());