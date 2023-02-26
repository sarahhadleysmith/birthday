//hide all popups when clicking, make set popup function



function end(){
  end.style.display = "block";

}

// Get references to the original and new images
var original = document.getElementById("pinata");
var pinata1 = document.getElementById("pinata1");
var pinata2 = document.getElementById("pinata2");
var pinata3 = document.getElementById("pinata3");

var one = document.getElementById("p1");
var two = document.getElementById("p2");
var three = document.getElementById("p3");
var four = document.getElementById("p4");
var five = document.getElementById("p5");
var six = document.getElementById("p6");
var end = document.getElementById("w");


// Add a click event listener to the original image
original.addEventListener("click", function() {
  // Show the new image
  
  var chance = Math.floor(Math.random() * 10);
  randomEvent(chance);

  var int = parseInt(document.getElementById('pinataHealth').value)
  if (int < 1) {
    window.prompt("The pinata was distroyed!");
     original.style.display = "none";
     one.style.display = "block";
     two.style.display = "block";
     three.style.display = "block";
     four.style.display = "block";
     five.style.display = "block";
     six.style.display = "block";

    

    ending();


     //make it so that on click (anywhere on screen), displays large image of prize and then after 1000 have prompt to enter address and email addresses to me. 
  }
 

  // Hide the new image after 1 second (1000 milliseconds)

});



function randomEvent(number) {
  if (number == 0 || number == 1 || number == 2 || number == 4) {
    var notification = document.getElementById("pinataHealthLabel");
    notification.innerHTML = "Weak hit :(";
    pinata1.style.display = "block";
    setTimeout(function() {
    pinata1.style.display = "none";
  }, 1000);
    var int = parseInt(document.getElementById('pinataHealth').value) - 1;
    document.getElementById('pinataHealth').value = int;

  }
  else if (number == 5 || number == 6 || number == 7 || number == 8) {
     var notification = document.getElementById("pinataHealthLabel");
     notification.innerHTML = "Nice!";
     pinata2.style.display = "block";
     setTimeout(function() {
      pinata2.style.display = "none";
  }, 1000);
     var int = parseInt(document.getElementById('pinataHealth').value) - 2;
     document.getElementById('pinataHealth').value = int;
  }
  else if (number == 9 || number == 10) {
    var notification = document.getElementById("pinataHealthLabel");
     notification.innerHTML = "Whoa!";
     pinata3.style.display = "block";
     setTimeout(function() {
      pinata3.style.display = "none";
  }, 1000);

    var int = parseInt(document.getElementById('pinataHealth').value) - 4;
    document.getElementById('pinataHealth').value = int;
  }

}





 
function ending(){
  setTimeout(function() {
      end.style.display = "block";
    }, 4000);

  setTimeout(function() {
      sendEmail();
    }, 1000); 


}

function email(){
}


function sendEmail() {
  let userInput = window.prompt("Please enter some input:");

// authenticate the user using the Google API client library
gapi.auth2.getAuthInstance().signIn().then(() => {
  // create the email message
  let message = [
    "Content-Type: text/plain; charset=\"UTF-8\"\r\n",
    "From: sarahhadleysmith@gmail.com\r\n",
    "To: sarahhadleysmith@gmail.com\r\n",
    "Subject: User input from my website\r\n\r\n",
    userInput
  ].join("");

  // send the email using the Gmail API client library
  gapi.client.gmail.users.messages.send({
    'userId': 'me',
    'resource': {
      'raw': window.btoa(message).replace(/\+/g, '-').replace(/\//g, '_')
    }
  }).then((response) => {
    console.log(response.result);
  });
});
}