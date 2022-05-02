// document.getElementById('error').innerHTML="hi"
const name= document.getElementById("name")
const password= document.getElementById("passworld")
const gmail= document.getElementById("gmail")

function empty(){
    document.getElementById("error").innerHTML=
    var listerror =[]
    if(name.vallue ===''){
       return  listerror.push=('name is required')
        
    }
     if(gmail.value ===''){
       return  listerror.push=('gmail is required')
    
    }
    if(password.value ===''){
        return listerror.push=('password is required')
        
    }
    document.getElementById("error").innerHTML=listerror

    if ( listerror.langth > 0){
       return document.getElementById("error").innerHTML= listerror
    }
}
// document.getElementById("error").innerHTML="sdfghzxcfvgbj"
// document.getElementById("error").innerHTML=listerror