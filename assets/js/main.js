// Función que permite controlar el desplazamiento del smooth scroll
$(document).ready(function () {
  $("a").click(function () {
    var slowerScroll = this.hash;
    $("html,body").animate(
      {
        scrollTop: $(slowerScroll).offset().top - 70,
      },
      3000
    );
  });
});

//Función para inicializar efecto Toolip
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

//Función paracarousel
