var fname=document.getElementById('fname');
var lname=document.getElementById('lname');
var address = document.getElementById('address');
var phoneno = document.getElementById('phoneno');
var password = document.getElementById('password');
var cpassword = document.getElementById('cpassword');
var email = document.getElementById('email');
var file = document.getElementById('file');
var password_flag=false;
var specialchar = ['!',']','@','#','$','%','^','&','*','(',')','-','_','+','=','{','}','[',']','~','`','.'];
var special_email_char = ['!',']','/','#','$','%','^','&','*','(',')','+','=','{','}','[',']','~','`'];



function validateFname(){
    var i;  
    var trim_fname=fname.value.trim();
    var fnamearray=Array.from(trim_fname);
   
    for(i=0;i<fnamearray.length;i++)
    {
        if(specialchar.includes(trim_fname[i])==true || trim_fname[i]==" ")
        {
            document.getElementById('fname-err').innerHTML= 'First name  not valid';
            return false;
        }
    }
    if(fname.value =="" || trim_fname==""){

         document.getElementById('fname-err').innerHTML= 'First name can not be blank';
    return false;
    }
    
    else{
    document.getElementById('fname-err').innerHTML= '';
    return true;
    }

}
function validateLname(){
    var trim_lname=lname.value.trim();
    var lnamerray=Array.from(trim_lname);
    var i;
    for(i=0;i<lnamerray.length;i++)
    {
        if(specialchar.includes(trim_lname[i])==true || trim_lname[i]==" ")
    {
        document.getElementById('lname-err').innerHTML= 'Last name not  valid';
        return false;

    }
    }
    if(lname.value =="" || trim_lname==""){
    document.getElementById('lname-err').innerHTML= 'Last name can not be blank';
    return false;
    }
    
    else{
        document.getElementById('lname-err').innerHTML= '';
        return true;
    }

}

function validateAddress() {

     var addrssarray=Array.from(address.value);
     var characters=address.value.split(' ');
      var count=0;
      var i;
    //  alert(addrssarray);

     for(i=0;i<addrssarray.length;i++){

        if(addrssarray[i]==" ")
            continue;
        count +=addrssarray[i].length;
         
     }
    // var string_after_remove_space=address.value.replace(" ","");
    // count= string_after_remove_space.length;

    
    if(count <10){
        document.getElementById('address-err').innerHTML= 'Please Write Atleast 10 characters';
        return false;
    }
    else if(count > 200){
        document.getElementById('address-err').innerHTML= 'Maximum 200 characters are allowed';
        return false;
    }
    else{
        document.getElementById('address-err').innerHTML= ' ';
        return true;
    }


}
function validatePhone(){
    var trimmed_phone_no=phoneno.value.trim();

     if(isNaN(trimmed_phone_no)){
        document.getElementById('phone-err').innerHTML= 'Please enter only  digit';
        return false;

    }
     else if(trimmed_phone_no.length !=10){
        document.getElementById('phone-err').innerHTML= 'Please enter only 10 digit';
        return false;
    }
    
    else{
        document.getElementById('phone-err').innerHTML= ' ';
        return true;

    }
}
    function validatePassword(){
        var passwordarray=Array.from(password.value);
        var i;
        var msg ='';
        var capflag=false;
        var smallflag=false;
        var digitflag=false;
        var speflag=false;
        if(passwordarray.length < 8)
        {
            document.getElementById('password-err').innerHTML= 'Please Write atleast 8 Characters';
            return false;
        }
        else{

            for(i=0;i<passwordarray.length;i++)
             {
                if( passwordarray[i] >='A' && passwordarray[i] <='Z')
                {
                    capflag=true;
                }

                else if( passwordarray[i] >='a' && passwordarray <='z')
                {
                    smallflag=true;
                }
            
                else if( passwordarray[i] >= '0' && passwordarray[i] <= '9')
                {
                    digitflag=true;
                }
                else if(specialchar.includes(passwordarray[i])==true){
                    speflag=true;
                }
                else
                {
                    msg=' ';
                }
            }
            if(capflag==false)
                msg += 'Enter atleast 1 capital letter';
            if(smallflag==false)
            msg+= 'Enter atleast 1 small letter';
            if(digitflag==false)
                msg+= 'Enter atleast 1 digit ';
                if(speflag==false)
                msg+= 'Enter atleast 1 special character';
                document.getElementById('password-err').innerHTML=msg;

                if(capflag!=false && smallflag!=false && digitflag!=false && speflag !=false){
                    password_flag=true;
                    return true;
                }
                else{
                    password_flag=false;
                    return false;
                }
        }
     }
    
    function validateCpassword(){
       
        if(cpassword.value.length ==0)
            document.getElementById('cpassword-err').innerHTML= 'Conform Password can not be blank';
            if(password_flag==true){

        if(password.value !=cpassword.value)
        {
            document.getElementById('cpassword-err').innerHTML= 'Password and Conform password must be same';
            return false;

        }
        else    
            document.getElementById('cpassword-err').innerHTML= ' ';
            return true;
    }
    else
    document.getElementById('cpassword-err').innerHTML= 'Password must be valid';


    }
    function validateEmail()
    {
        var namemsg=false;
        var sldemsg=false;
        var tldmsg=false;
        var emailmsg="";
        var i;
        var email_array=Array.from(email.value);
        var email_flag=false;
        for(i=0;i<email_array.length;i++)
        {
            if((email_array[i]<'A' && email_array[i]>'Z') || (email_array[i]<'a' && email_array[i]>'z') || (email_array[i]<0 && email_array[i]>9) || (special_email_char.includes(email_array[i])))
            {
                email_flag=true;
            }
        }
        
        if(email.value.length ==0)
        {
            emailmsg+="Email can not be blank ";
        }

        else{

            var email1phase = email.value.split('@');

            if(email1phase.length == 2){
                if(email1phase[0].length < 3)
                {
                    namemsg=true;   
                }
                var email2phase = email1phase[1].split('.');
            
                if(email2phase.length >= 2){
                    if(email2phase[0].length<3)
                    {
                        sldemsg=true;
                    }
                    if(email2phase[1].length <2)
                    {
                        tldmsg=true;
                    }
                    if(namemsg==true)
                        emailmsg +='name must be atleast 3 characters     ';
                    if(sldemsg==true)
                        emailmsg +='second level domain must be atleast 3 characters    ';
                    if(tldmsg==true)
                        emailmsg +='top level domain must be atleast 2 characters    ';
                }
                else{
                    email_flag=true;
                }
            }
            else{
                
                email_flag=true;
            }
        }
        if(email_flag==true)
            emailmsg+="Email not valid   ";
        document.getElementById('email-err').innerHTML=emailmsg;
        if(namemsg!=true && sldemsg!=true && tldmsg!=true)
            return true;
        else
            return false;
    

        }
    function validateFile(){
        if(file.files.length==0){
            document.getElementById('file-err').innerHTML = "File is not selected."
            consol.log('invalid file');
            return false
        }
        else{
            

            var extension = file.files[0].type.split('/');
            document.getElementById('file-err').innerHTML= "Name:"+file.files[0].name +"  Extension:"+extension[1]+"   size:"+file.files[0].size +" bytes";
            enableButton();
            return true
        }
    }


    function enableButton(){
        if(validateFname() && validateLname() && validatePassword() && validateCpassword() && validatePhone() && validateEmail() )
            document.getElementById('submit').disabled=false;
        else
        document.getElementById('submit').disabled=true;


    }       