var n = document.getElementById('user');
   var pw = document.getElementById('pw');
   var message = document.getElementById('message');
   var cf = document.getElementById('cf'); 



   function checkLength() {
       if (n.value.length > 8 || n.value.length < 4 || pw.value.length > 8 || pw.value.length < 4) {
           message.innerHTML = 'The length of user name and password must be between 4 and 8.';

           message.style.visibility = 'visible';
           message.style.color = 'red';
           message.style.fontSize = '14px';

       } 
    //    else if (n.value.length == 0 && pw.value.length == 0) {
    //        message.style.visibility = 'hidden';
    
       else {
        message.style.visibility = 'hidden';
        checkPass()
    }


   }

   function checkPass() {
       if (pw.value!==cf.value) {
           message.innerHTML = 'The passwords are different';

           message.style.visibility = 'visible';
           message.style.color = 'red';
           message.style.fontSize = '14px';
        
        }else {
            message.innerHTML = 'The input values are correct';

           message.style.visibility = 'visible';
           message.style.color = 'green';
           message.style.fontSize = '14px';
        }

   }
   
 document.querySelector('button').addEventListener('click', ()=>{checkLength()}) 