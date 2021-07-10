window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.background = "#1C3046";
    document.getElementById("navbar").style.padding = "0px 40px";
    document.getElementById("navbar").style.transition = ".5s";
  } else {
    document.getElementById("navbar").style.background = "none";
    document.getElementById("navbar").style.padding = "0px 20px";
    document.getElementById("navbar").style.transition = ".5s";
  }
}

$(document).ready(function() {
    $("#btn-open").click(function() {
        $(".items-responsive").css("right", "0%");
        $(".items-responsive").css("transition", ".5s");
        $(".container").addClass("blur");
        
    });

    $("#btn-close").click(function() {
        $(".items-responsive").css("right", "-100%");
        $(".items-responsive").css("transition", ".5s");
        $(".container").removeClass("blur");
    })
})