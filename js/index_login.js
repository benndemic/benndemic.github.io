$(function () {

   $(".input input").focus(function () {

      $(this).parent(".input").each(function () {
         $("label", this).css({
            "line-height": "18px",
            "font-size": "18px",
            "font-weight": "100",
            "top": "0px"
         })
         $(".spin", this).css({
            "width": "100%"
         })
      });
   }).blur(function () {
      $(".spin").css({
         "width": "0px"
      })
      if ($(this).val() == "") {
         $(this).parent(".input").each(function () {
            $("label", this).css({
               "line-height": "60px",
               "font-size": "24px",
               "font-weight": "300",
               "top": "10px"
            })
         });

      }
   });

   $(".button").click(function (e) {
      var pX = e.pageX,
         pY = e.pageY,
         oX = parseInt($(this).offset().left),
         oY = parseInt($(this).offset().top);

      $(this).append('<span class="click-efect x-' + oX + ' y-' + oY + '" style="margin-left:' + (pX - oX) + 'px;margin-top:' + (pY - oY) + 'px;"></span>')
      $('.x-' + oX + '.y-' + oY + '').animate({
         "width": "500px",
         "height": "500px",
         "top": "-250px",
         "left": "-250px",

      }, 600);
      $("button", this).addClass('active');
   })

   $(".alt-2").click(function () {
      if (!$(this).hasClass('material-button')) {
         $(".shape").css({
            "width": "100%",
            "height": "100%",
            "transform": "rotate(0deg)"
         })

         setTimeout(function () {
            $(".overbox").css({
               "overflow": "initial"
            })
         }, 600)

         $(this).animate({
            "width": "140px",
            "height": "140px"
         }, 500, function () {
            $(".box").removeClass("back");

            $(this).removeClass('active')
         });

         $(".overbox .title").fadeOut(300);
         $(".overbox .input").fadeOut(300);
         $(".overbox .button").fadeOut(300);

         $(".alt-2").addClass('material-buton');
      }

   })

   $(".material-button").click(function () {

      if ($(this).hasClass('material-button')) {
         setTimeout(function () {
            $(".overbox").css({
               "overflow": "hidden"
            })
            $(".box").addClass("back");
         }, 200)
         $(this).addClass('active').animate({
            "width": "700px",
            "height": "700px"
         });

         setTimeout(function () {
            $(".shape").css({
               "width": "50%",
               "height": "50%",
               "transform": "rotate(45deg)"
            })

            $(".overbox .title").fadeIn(300);
            $(".overbox .input").fadeIn(300);
            $(".overbox .button").fadeIn(300);
         }, 700)

         $(this).removeClass('material-button');

      }

      if ($(".alt-2").hasClass('material-buton')) {
         $(".alt-2").removeClass('material-buton');
         $(".alt-2").addClass('material-button');
      }

   });

});

/* VERIFICATION CODE */

const login_email = document.getElementById('login_email'),
   login_pass = document.getElementById('login_pass'),
   reg_email = document.getElementById('reg_email'),
   reg_pass = document.getElementById('reg_pass'),
   rereg_pass = document.getElementById('rereg_pass'),
   login_button = document.getElementById('login_button'),
   reg_button = document.getElementById('reg_button')

function validate_email(field) {
   with (field) {
      apos = value.indexOf("@");
      dotpos = value.lastIndexOf(".");
      if (apos < 1 || dotpos - apos < 2) {
         // alert(alerttxt);
         return false;
      }
      else {
         return true;
      }
   }
}

function validatePassword(fld) {
   var illegalChars = /[\W_]/; // allow only letters and numbers

   if (fld.value == "") {
      fld.style.background = 'blue';
      error = "You didn't enter a password.\n";
      // alert(error);
      return false;

   } else if ((fld.value.length < 7) || (fld.value.length > 15)) {
      error = "The password is the wrong length. \n";
      fld.style.background = 'blue';
      // alert(error);
      return false;

   } else if (illegalChars.test(fld.value)) {
      error = "The password contains illegal characters.\n";
      fld.style.background = 'blue';
      // alert(error);
      return false;

   } else if ((fld.value.search(/[a-zA-Z]+/) == -1) || (fld.value.search(/[0-9]+/) == -1)) {
      error = "The password must contain at least one numeral.\n";
      fld.style.background = 'blue';
      // alert(error);
      return false;

   } else {
      fld.style.background = 'White';
   }
   return true;
}

function Redirect(local) {
   window.location.href = local
}

login_button.addEventListener('click', () => {
   if (validate_email(login_email) & validatePassword(login_pass)) {
      // alert('working')
      setTimeout(function () { window.location = "home.html" })
   }
   else {
      alert('Invalid login details : \n Valid Email must be entered \n Password must be alphanumerical and between 8 to 16 charachters')
   }
}, false)

// SIGN UP FORM

function validate_name(fld) {
   var letters = /^[A-Za-z]+$/;
   if (fld.value.match(letters)) {
      return true;
   }
   else {
      // alert("message");
      return false;
   }
}

function validateRePassword(fld1,fld2){
   if(fld1.value==fld2.value)
   {
      return true;
   }
   else
   {
      return false;
   }
}

reg_button.addEventListener('click', () => {
   if (validate_email(reg_email) & validatePassword(reg_pass) & validateRePassword(reg_pass,rereg_pass)) {
      // alert('working')
      alert("You are logged in with the entered credencials :)")
      setTimeout(function () { window.location = "home.html" })
   }
   else {
      alert('Invalid login details : \n Valid Email must be entered \n Password must be alphanumerical and between 8 to 16 charachters')
   }
}, false) 

document.getElementById('forgot').addEventListener('click', () => {
   alert('This functionality is not built-in yet for the POC (Alpha 1.0) build, please register with a new id :)')
},false)