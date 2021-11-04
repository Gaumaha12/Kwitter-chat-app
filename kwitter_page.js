//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyByvuHJIlUNAlLIB3-FqFJXYKEvLBA6HM8",
      authDomain: "kwitter-app-42449.firebaseapp.com",
      databaseURL: "https://kwitter-app-42449-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-42449",
      storageBucket: "kwitter-app-42449.appspot.com",
      messagingSenderId: "981150828526",
      appId: "1:981150828526:web:2ed806964de63bcfccf0ff"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
}
}
}
//Start code
firebase.database().ref("/").on('value', function(snapshot) {
         document.getElementById("output").innerHTML = ""; 
         snapshot.forEach(function(childSnapshot) {
         childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
         document.getElementById("output").innerHTML += row;
//End code
      }); 
      });
      }
getData();
function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name", name);
window.location("kwitter_page.html");
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location("index.html");
}
function send() {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}