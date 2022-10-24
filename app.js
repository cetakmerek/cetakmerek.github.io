Defer(function() {

// swiper
var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
        // spaceBetween: 30,
        loop: true,
    pagination: {
      el: ".swiper-pagination",
     
    },
    autoplay: {
      delay: 3000,
    },

  });


  // pasang link external
  Defer.dom('img.lazy', 200, 'loaded');
  Defer.css('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',200);
 // Defer.css(' https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;700;900&display=swap',100);//
})


// fungsi waktu 
 function waktu(){
  var h=(new Date()).getHours();
 
if (h >= 4 && h < 10) return "Selamat pagi";
if (h >= 10 && h < 15) return "Selamat siang";
if (h >= 15 && h < 18) return "Selamat sore";
if (h >= 18 || h < 4) return "Selamat malam";
 }

 

// klik tombol produk
let tombolProduk = document.querySelectorAll(".produk")
tombolProduk.forEach(function(e){
  
  e.addEventListener("click" ,function(){
    let hed = e.previousElementSibling.textContent
    let url_wa = 'https://web.whatsapp.com/send'
    
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      url_wa = "whatsapp://send"}
      
      
      
       let parameter = `${url_wa}?phone=6282118391206?text=*${waktu()}%20Cetak%Merek*%20Saya%20Ingin%20Bertanya%20Tentang%20Produk%20*${hed}*`
     
     
   return window.open(parameter);
 
   location.reload();
  
});
});