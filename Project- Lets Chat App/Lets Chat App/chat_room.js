// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCBU1aqOE_8AEtPxmK099oWtJ4m7e2Ru_Q",
      authDomain: "kwitter-1d72f.firebaseapp.com",
      databaseURL: "https://kwitter-1d72f-default-rtdb.firebaseio.com",
      projectId: "kwitter-1d72f",
      storageBucket: "kwitter-1d72f.appspot.com",
      messagingSenderId: "1044599655501",
      appId: "1:1044599655501:web:a71209ae45869a49da2004"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child("room_name").update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData(); {
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}