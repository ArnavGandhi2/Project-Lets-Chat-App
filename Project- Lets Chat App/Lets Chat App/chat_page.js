//YOUR FIREBASE LINKS
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
 room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

