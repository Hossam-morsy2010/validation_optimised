
{
      //holding labels and inputs
      // first name vars
  var fname_label = document.querySelector(".fname_label")
  var fname_input = document.querySelector(".fname_input")
      // last name vars
  var lname_label = document.querySelector(".lname_label")
  var lname_input = document.querySelector(".lname_input")
      // email validation's vars
  var email_reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  var email_input = document.querySelector(".email_input")
  var email_label = document.querySelector(".email_label")
      // phone number validation's vars
  var phone_reg = /^[0-9]{11}$/
  var phone_input = document.querySelector(".phone_input")
  var phone_label = document.querySelector(".phone_label")
      // password validation's vars
  var pass_input = document.querySelector(".pass_input")
  var pass_label = document.querySelector(".pass_label")
      // show-hidden password's vars
  var pointer_cur1 = document.querySelector(".pointer_cur1")
  var pointer_cur2 = document.querySelector(".pointer_cur2")
      // confirm password validation vars
  var confirm_input = document.querySelector(".confirm_input")
  var confirm_label = document.querySelector(".confirm_label")
      // gender validation vars
  var male_check = document.querySelector(".male_check")
  var female_check = document.querySelector(".female_check")
  var gender_label = document.querySelector(".gender_label")
      // birthdate validation vars
  var birth_input = document.querySelector(".birth_input")
  var birth_label = document.querySelector(".birth_label")
      //validation's function
  function validation() {
    if(fname_input.value == "" || !isNaN(fname_input.value)){
      return my_label_origin(fname_label,"invalid first name")      
    }
    else if(lname_input.value == "" || !isNaN(lname_input.value)){
      return my_label_origin(lname_label,"invalid last name")     
    }
    else if(email_input.value == "" || !email_reg.test(email_input.value)){
      return my_label_origin(email_label,"invalid email")    
    }
    else if(phone_input.value == "" || !phone_reg.test(phone_input.value)){
      return my_label_origin(phone_label,"invalid phone number")    
    }
    else if(pass_input.value == "" || pass_input.value.length < 6){
      return my_label_origin(pass_label,"invalid password")  
    }
    else if(confirm_input.value != pass_input.value){
      return my_label_origin(confirm_label,"invalid password confirmation")   
    }
    else if(male_check.checked == false && female_check.checked == false){
      return my_label_origin(gender_label,"please choose a gender")    
    }
    else if(birth_input.value == ""){
      return my_label_origin(birth_label,"please choose a date")
    }
    else{
      return true
    }
  }
      //show invalidation function
  function my_label_origin(label_origin,txt_origin){
    labels()
    label_origin.innerHTML = txt_origin + " <i class='fa-solid fa-circle-minus'></i>"
    label_origin.classList.add("wrong")
    return false
  }
      //reset to the origin state function
  function labels(){
    fname_label.innerHTML = "First Name"
    fname_label.classList.remove("wrong")
    lname_label.innerHTML = "Last Name"
    lname_label.classList.remove("wrong")
    email_label.innerHTML = "Email:"
    email_label.classList.remove("wrong")
    phone_label.innerHTML = "Phone Number:"
    phone_label.classList.remove("wrong")
    pass_label.innerHTML = "Password"
    pass_label.classList.remove("wrong")
    confirm_label.innerHTML = "Confirm Password"
    confirm_label.classList.remove("wrong")
    gender_label.innerHTML = "Gender"
    gender_label.classList.remove("wrong")
    birth_label.innerHTML = "Birthdate"
    birth_label.classList.remove("wrong")
  }
      //show and hide pass event
    pointer_cur1.addEventListener("click",()=>{
      if(pass_input.type == "password"){
        pass_input.type = "text"
      }else if(pass_input.type == "text"){
        pass_input.type = "password"
      }
      
    })
      //show and hide pass's confirmation event
    pointer_cur2.addEventListener("click",()=>{
      if(confirm_input.type == "password"){
        confirm_input.type = "text"
      }else if(confirm_input.type == "text"){
        confirm_input.type = "password"
      }
    })
      //my_on_key function
function my_on_key(keyLabel,keyTxt){
  keyLabel.innerHTML = keyTxt
  keyLabel.classList.add("typing")

}
      //my_up_key function
function my_up_key(keyLabel,keyTxt){
  keyLabel.innerHTML = keyTxt
  keyLabel.classList.remove("typing")
  keyLabel.classList.remove("wrong")
}
}
