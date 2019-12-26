function validateFname(){
    var fname=document.getElementById('fname').value;
    if(fname ==""){
         document.getElementById('fname-err').innerHTML= 'First name can not be blank';
    return false;
    }
    else{
    document.getElementById('fname-err').innerHTML= '';
    return true;
    }

}
function validateLname(){
    var fname=document.getElementById('lname').value;
    if(fname ==""){
    document.getElementById('lname-err').innerHTML= 'Last name can not be blank';
    return false;
    }
    else{
        document.getElementById('lname-err').innerHTML= '';
        return true;
    }

}

function validateAddress() {
    var address = document.getElementById('address').value;

     var addrssarray=Array.from(address);
     var characters=address.split(' ');
      var count=0;
      var i;
    //  alert(addrssarray);

     for(i=0;i<addrssarray.length;i++){

        if(addrssarray[i]==" ")
            continue;
        count +=addrssarray[i].length;
         
     }
    
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
    var phoneno = document.getElementById('phoneno').value;
    var trimmed_phone_no=phoneno.trim();

     if(isNaN(trimmed_phone_no)){
        document.getElementById('phone-err').innerHTML= 'Please enter only  digit';
        return false;

    }
     else if(trimmed_phone_no.length !=10){
        document.getElementById('phone-err').innerHTML= 'Please Write atleast 10 digit';
        return false;
    }
    
    else{
        document.getElementById('phone-err').innerHTML= ' ';
        return true;

    }
}
    function validatePassword(){
        var password = document.getElementById('password').value;
        var passwordarray=Array.from(password);
        var i;
        var specialchar = ['!',']','@','#','$','%','^','&','*','(',')','-','_','+','=','{','}','[',']','~','`'];

        var msg ='';
        var capflag=false;
        var smallflag=false;
        var digitflag=false;
        var speflag=false;
        // alert(password.length);
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
                    // alert(passwordarray[i]);
                    // msg= 'Enter atleast 1 capital letter';
                    capflag=true;
                }

                else if( passwordarray[i] >='a' && passwordarray <='z')
                {
                    // msg+= 'Enter atleast 1 small letter';
                    smallflag=true;
                }
            
                else if( passwordarray[i] >= '0' && passwordarray[i] <= '9')
                {
                    // msg+= 'Enter atleast 1 digit ';
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

                if(capflag!=false && smallflag!=false && digitflag!=false && speflag !=false)
                    return true;
                else
                return false;

        }
     }
        
       
        // alert(passwordarray);
        


    
    function validateCpassword(){
        var password = document.getElementById('password').value;
        var cpassword = document.getElementById('cpassword').value;
        if(password !=cpassword)
        {
            document.getElementById('cpassword-err').innerHTML= 'Password and Conform password must be same';
            return false;

        }
        else    
            document.getElementById('cpassword-err').innerHTML= ' ';
            return true;

    }
    function validateEmail()
    {
        var email = document.getElementById('email').value;
        var email1phase = email.split('@');
        var namemsg=false;
        var sldemsg=false;
        var tldmsg=false;
        var emailmsg=' ';
        // alert(email1phase[0].length);
        if(email1phase[0].length < 3)
        {
            // emailmsg +='name must be atleast 3 characters';
            namemsg=true;
        }
       
        // document.getElementById('email-err').innerHTML=emailmsg;
        var email2phase = email1phase[1].split('.');
        // alert(email2phase);
        if(email2phase[0].length <3)
        {
            sldemsg=true;
            // document.getElementById('email-err').innerHTML= 'company name must be atleast 3 characters';
        }
        if(email2phase[1].length <2)
        {
            tldmsg=true;
            // document.getElementById('email-err').innerHTML= 'Domain name must be atleast 2 characters';

        }
        if(namemsg==true)
            emailmsg +='name must be atleast 3 characters  ';
        if(sldemsg==true)
           emailmsg +='second level domain must be atleast 3 characters  ';
        if(tldmsg==true)
          emailmsg +='top level domain must be atleast 2 characters  ';

        document.getElementById('email-err').innerHTML=emailmsg;
        if(namemsg!=true && sldemsg!=true && tldmsg!=true)
            return true;
            else
            return false;

        }
    function validateFile(){
        // alert('hi');
        var file = document.getElementById('file');
        var extension = file.files[0].type.split('/');
        document.getElementById('file-err').innerHTML= "Name:"+file.files[0].name +"  Extension:"+extension[1]+"   size:"+file.files[0].size +" bytes";
        // alert(file.files[0].name);
    }


    function enableButton(){
//         var fname=document.getElementById('fname-err').value;
//         var lname=document.getElementById('lname-err').value;
//         var address=document.getElementById('address-err').value;
//         var pwd=document.getElementById('password-err').value;
//         var cpwd=document.getElementById('cpassword-err').value;
//         var file=document.getElementById('file-err').value;
//         var phoneno=document.getElementById('phone-err').value;
//         var email=document.getElementById('email-err').value;
// console.log(fname);
// console.log(lname);
// console.log(pwd);
// console.log(cpwd);
// console.log(address);
// console.log(phoneno);
// console.log(email);

//       if(fname!='' && lname != '' && address!='' && pwd!='' && cpwd!='' && phoneno!='' && email!='')
//             document.getElementById('submit').disabled=true;
//         else
//         document.getElementById('submit').disabled=false;

        if(validateFname() && validateLname() && validatePassword() && validateCpassword() && validatePhone() && validateEmail())
                     document.getElementById('submit').disabled=false;


    }
    

