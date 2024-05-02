
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.wishlist, .btn, .share').forEach(function(button) {
    button.addEventListener('click', function() {
      var message = '';
      if (this.classList.contains('wishlist')) {
        message = 'Added to Wishlist';
      } else if (this.classList.contains('btn')) {
        message = 'Added to Cart';
      } else if (this.classList.contains('share')) {
        message = 'Shared';
      }

      showToast(message);
    });
  });
});

function showToast(message) {
  var toast = document.getElementById('toast');
  toast.textContent = message;
  toast.style.display = 'block';
  setTimeout(function() {
    toast.style.display = 'none';
  }, 3000); // 3000 milliseconds = 3 seconds
}



$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
       autoplay:true,
        margin:30,
        loop:true,
        dots:true,
       nav:true,
       navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>" ],
       responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  });