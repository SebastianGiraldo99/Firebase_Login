function registrar(){
var correo = document.getElementById('email').value;
var password = document.getElementById('password').value;
console.log(correo +password );
firebase.auth().createUserWithEmailAndPassword(correo, password)
.then(function(){
  verify();
})



.catch(function(error) {

  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage)
  // ...
});
    
}

function ingresar(){
  var email = document.getElementById('email2').value;
  var password = document.getElementById('password2').value;
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  var password = document.getElementById('password2').value="";
  var email = document.getElementById('email2').value = "";
}

function observador(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(user.emailVerified)
      aparece(user)
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      console.log("no exite usuario")
      // ...
    }
  });
}
observador();

function aparece(user){
  var usuario = user
  if(user.emailVerified){
    var contenido = document.getElementById('contenido');
  contenido.innerHTML = '<button onclick="singOut()">Cerrar Sesion</button> <p>Su session esta iniciada</p>';
  }else{
  var contenido = document.getElementById('contenido');
  contenido.innerHTML = '<p> Verifique su correo</p>';
  }
}

function singOut(){
  firebase.auth().signOut().then(function(){
    console.log("SALIO DE LA SESION....")
  }).catch(function(error){
    console.log(error)
  })
  var contenido = document.getElementById('contenido');
  contenido.innerHTML = '';
}


function verify(){
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function() {
  console.log("Enviando el correo");
  }).catch(function(error) {
  // An error happened.
  console.log(error);
  });
<<<<<<< HEAD
}

function inicio_google(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

}

function inicio_facebook(){
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithRedirect(provider);
  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
=======
>>>>>>> 4d414c2f0df8042bab9e9d0eeb03fcdbb7be7d8c
}