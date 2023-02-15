alert("ayoo");

chrome.runtime.onMessage.addListener(
  function(request,sender,sendResponse){
    if (request.action === "cheesify") cheesify();
  }
)

function cheesify() {
  // TODO: Add the image replacement script here
  document.querySelectorAll("img").forEach( (img) => {
    img.src = "https://images.emojiterra.com/google/android-10/512px/1f9c0.png";
    img.srcset = img.src;

    alert("IT WORKED!");
  })
  
}

// TODO: Write a function to listen for messages on the content page using chrome.runtime.onMessage
