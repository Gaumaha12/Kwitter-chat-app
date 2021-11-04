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
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage("user_name");
room_name = localStorage("room_name");
document.getElementById("user_name").innerHTML="Welcome" + user_name + "!";
function addroom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location("kwitter_page.html");
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-"+Room_names);
      row = "<div class = room_name id = +Room_names+" onclick = "redirectToRoomName(this.id)">#+Room_names+; 
      document.getElementById("output").innerHTML+=row;
      function redirectToRoomName(name
            ) {
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location=("kwitter_page.html");
      }
      function logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location=("index.html")
      }
      //End code
      });});}
getData();
