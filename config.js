import firebase from 'firebase';

  var firebaseConfig = {
    //paste your SDK here
    apiKey: "AIzaSyAYCPqD10649h8b_QxUeBPY5EBWMb0avt4",
    authDomain: "project-b4980.firebaseapp.com",
    projectId: "project-b4980",
    storageBucket: "project-b4980.appspot.com",
    messagingSenderId: "27033777864",
    appId: "1:27033777864:web:a5548946319425b4e517fd"
  


    
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();