// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA3lg7bFMop2qxVZ3VyWEUnwflVeey7n9A",
    authDomain: "corona-virus-3db8e.firebaseapp.com",
    databaseURL: "https://corona-virus-3db8e-default-rtdb.firebaseio.com",
    projectId: "corona-virus-3db8e",
    storageBucket: "corona-virus-3db8e.appspot.com",
    messagingSenderId: "637765904709",
    appId: "1:637765904709:web:d6098f2613cb1a537b762c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var UserInputsRef=firebase.database().ref('UserInputs')
  document.getElementById('testForm').addEventListener('submit',submitForm);
  function submitForm(e){
    e.preventDefault();
    var state =getInputVal('state');
    state=state.toLowerCase();
    readState(state);
    var fname=getInputVal('firstname');
    var lname=getInputVal('lastname');
    var mobile=getInputVal('mobile');
    var email=getInputVal('email');
    var profession=getInputVal('profession');
    var dateofbirth=getInputVal('dateofbirth');
    var symptomslist=getSelectedCheckBoxValues('symptoms');
    var selectedOption=document.querySelector(`input[name=option]:checked`).value
    saveMessages(lname+" "+fname,mobile,email,profession,dateofbirth,state,symptomslist,selectedOption)

  }
  function getSelectedCheckBoxValues(name){
    const checkboxes=document.querySelectorAll(`input[name="${name}"]:checked`)
    let values=[];
    checkboxes.forEach((checkbox)=>{
      values.push(checkbox.value)
    })
    return values;
  }
   
  function saveMessages(name,mobile,email,profession,dateofbirth,state,symptomslist,selectedOption){
    var newUserInputsRef=UserInputsRef.push();
    newUserInputsRef.set({
      name:name,
      mobile:mobile,
      email:email,
      dateofbirth:dateofbirth,
      state:state,
      profession:profession,
      symptomslist:symptomslist,
      selectedoption:selectedOption
    })
  }
  function readState(state){
    var centers;
    var ref = firebase.database().ref(state);
    ref.on('value', (data)=>{
     centers = data.val();
     document.getElementById("result").innerHTML ="<br>"+centers;
})

}
function getInputVal(id){
    return document.getElementById(id).value;
}

