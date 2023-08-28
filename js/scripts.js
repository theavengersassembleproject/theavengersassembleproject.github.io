
var modal = $("#myModal")[0];
var image = $("#myImage")[0];
var caption = $("#myCaption")[0];
var TRange = null;

$(document).ready(function () {
  //*************************** LOVE YOU COUNTER ***************************//
  var premiere = new Date("04/26/2019");
  var today = new Date();
  // To calculate the time difference of two dates
  var timePassed = today.getTime() - premiere.getTime();
  // To calculate the no. of days between two dates
  var daysPassed = Math.ceil(timePassed / (1000 * 3600 * 24));
  var loveYou = 3000 + daysPassed;
  $("#loveCounter").append("<span class='days'>"+loveYou+'</span>');
  $("#homeTitle").append("<h3>I Love You "+loveYou+"</h3>")

  //************************** SHADOW UNDER HEADER *************************//
  var header = $("header");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      header.addClass('navbar-shadow');
    } else {
      header.removeClass('navbar-shadow');
    }
  });

  //******************************** SLIDERS *******************************//
  $('#myCarousel').owlCarousel({
    animateOut: 'fadeOut',
    autoplay: true,
    autoplaySpeed: 500,
    dots: false,
    items: 1,
    lazyLoad: true,
    lazyLoadEager: 2,
    loop: true,
    nav: true,
    navSpeed: 500
  });
});


//*************************** MOMENTS IMAGE MODAL **************************//

function momentModal(moment, title) {
  modal.style.display = "block";
  image.src = "resources/images/" + moment + ".jpg";
  caption.innerHTML = title;
}

$(".close")[0].onclick = function () {
  modal.style.display = "none";
  image.src = "";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//*************************** MESSAGES SEARCH BAR **************************//

function search(str) {
 if (parseInt(navigator.appVersion)<4) return;
 var strFound;
 if (window.find) {
  // CODE FOR BROWSERS THAT SUPPORT window.find
  strFound = self.find(str);
  if(!strFound) {
   strFound = self.find(str,0,1);
   while(self.find(str,0,1)) continue;
  }
 }
 else if (navigator.appName.indexOf("Microsoft")!=-1) {
  // EXPLORER-SPECIFIC CODE
  if (TRange!=null) {
   TRange.collapse(false);
   strFound=TRange.findText(str);
   if (strFound) TRange.select();
  }
  if (TRange==null || strFound==0) {
   TRange=self.document.body.createTextRange();
   strFound=TRange.findText(str);
   if (strFound) TRange.select();
  }
 }
 else if (navigator.appName=="Opera") {
  alert ("Opera browsers not supported, sorry...")
  return;
 }
 if (!strFound) alert ("No se encontró esa frase, pero. <3")
 return;
}

// Execute a function when the user releases a key on the keyboard
function pressSearch(e) {
  if(e.keyCode == 13) {
    $("#myButton").click();
  }
}
