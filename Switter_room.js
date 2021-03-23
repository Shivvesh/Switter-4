
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCa9OiKQdnuh5aofj_enVBiP1GWxbmYArA",
    authDomain: "switter-dff58.firebaseapp.com",
    databaseURL: "https://switter-dff58-default-rtdb.firebaseio.com",
    projectId: "switter-dff58",
    storageBucket: "switter-dff58.appspot.com",
    messagingSenderId: "30141062735",
    appId: "1:30141062735:web:263b90a89cdf29cd14143a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "Switter_page.html";
  }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "Switter_page.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }
