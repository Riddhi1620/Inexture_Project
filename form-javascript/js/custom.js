function validate() {
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
    }
    else if(count > 200){
        document.getElementById('address-err').innerHTML= 'Maximum 200 characters are allowed';
    }
    else
    document.getElementById('address-err').innerHTML= '';

}
function validatePhone(){
    var phoneno = document.getElementById('phoneno').value;
    var trimmed_phone_no=phoneno.trim();

     if(isNaN(trimmed_phone_no)){
        document.getElementById('phone-err').innerHTML= 'Please enter only  digit';

    }
     else if(trimmed_phone_no.length !=10){
        document.getElementById('phone-err').innerHTML= 'Please Write atleast 10 digit';
    }
    
    else{
        document.getElementById('phone-err').innerHTML= '';

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
                    msg='';
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


        }
     }
        
       
        // alert(passwordarray);
        


    
    function validateCpassword(){
        var password = document.getElementById('password').value;
        var cpassword = document.getElementById('cpassword').value;
        if(password !=cpassword)
        {
            document.getElementById('cpassword-err').innerHTML= 'Password and Conform password must be same';

        }
        else    
            document.getElementById('cpassword-err').innerHTML= '';

    }
    function validateEmail()
    {
        var email = document.getElementById('email').value;
        var email1phase = email.split('@');
        // alert(email1phase[0].length);
        if(email1phase[0].length < 3)
        {
            document.getElementById('email-err').innerHTML= 'name must be atleast 3 characters';
        }
        else{   
            document.getElementById('email-err').innerHTML= '   ';

        }
        var email2phase = email1phase[1].split('.');
        // alert(email2phase);
        if(email2phase[0].length <3)
        {
            document.getElementById('email-err').innerHTML= 'company name must be atleast 3 characters';
        }
        if(email2phase[1].length <2)
        {
            document.getElementById('email-err').innerHTML= 'Domain name must be atleast 2 characters';

        }
    }
    function validateFile(){
        // alert('hi');
        var file = document.getElementById('file');
        var extension = file.files[0].type.split('/');
        document.getElementById('file-err').innerHTML= "Name:"+file.files[0].name +"  Extension:"+extension[1]+"   size:"+file.files[0].size +" bytes";
        // alert(file.files[0].name);

    }

