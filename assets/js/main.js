$(".commands").click(function () {
  let commandName = getCommandName($(this.children[0])[0].innerHTML);
  // console.log($(this.children[0])[0].innerHTML);
  $(this.children[0]).next().toggle();
  let visible = $(this.children[0]).next().is(":visible");
  if (visible) {
    $("div", this.children[0]).html(` &#8681 ${commandName} </span> `);
  } else {
    $("div", this.children[0]).html(` &#8680 ${commandName}</span> `);
  }
});

function showAll() {
  showInfoCommands("block");
  showFunCommands("block");
  showMiscCommands("block");
  showUtilityCommands("block");
  document.getElementById("all").style.backgroundColor = "#49bf9d";
  document.getElementById("info").style.backgroundColor = "#2c2c34";
  document.getElementById("fun").style.backgroundColor = "#2c2c34";
  document.getElementById("misc").style.backgroundColor = "#2c2c34";
  document.getElementById("utility").style.backgroundColor = "#2c2c34";
}

function showInfoCommands(display) {
  document.getElementById("all").style.backgroundColor = "#2c2c34";
  document.getElementById("info").style.backgroundColor = "#49bf9d";
  document.getElementById("fun").style.backgroundColor = "#2c2c34";
  document.getElementById("misc").style.backgroundColor = "#2c2c34";
  document.getElementById("utility").style.backgroundColor = "#2c2c34";
  for (
    let i = 0;
    i < document.getElementsByClassName("info_commands").length;
    i++
  ) {
    document.getElementsByClassName("info_commands")[i].style.display = display;
  }
}

function showFunCommands(display) {
  document.getElementById("all").style.backgroundColor = "#2c2c34";
  document.getElementById("info").style.backgroundColor = "#2c2c34";
  document.getElementById("fun").style.backgroundColor = "#49bf9d";
  document.getElementById("misc").style.backgroundColor = "#2c2c34";
  document.getElementById("utility").style.backgroundColor = "#2c2c34";
  for (
    let i = 0;
    i < document.getElementsByClassName("fun_commands").length;
    i++
  ) {
    document.getElementsByClassName("fun_commands")[i].style.display = display;
  }
}

function showMiscCommands(display) {
  document.getElementById("all").style.backgroundColor = "#2c2c34";
  document.getElementById("info").style.backgroundColor = "#2c2c34";
  document.getElementById("fun").style.backgroundColor = "#2c2c34";
  document.getElementById("misc").style.backgroundColor = "#49bf9d";
  document.getElementById("utility").style.backgroundColor = "#2c2c34";
  for (
    let i = 0;
    i < document.getElementsByClassName("misc_commands").length;
    i++
  ) {
    document.getElementsByClassName("misc_commands")[i].style.display = display;
  }
}

function showUtilityCommands(display) {
  document.getElementById("all").style.backgroundColor = "#2c2c34";
  document.getElementById("info").style.backgroundColor = "#2c2c34";
  document.getElementById("fun").style.backgroundColor = "#2c2c34";
  document.getElementById("misc").style.backgroundColor = "#2c2c34";
  document.getElementById("utility").style.backgroundColor = "#49bf9d";
  for (
    let i = 0;
    i < document.getElementsByClassName("utility_commands").length;
    i++
  ) {
    document.getElementsByClassName("utility_commands")[i].style.display =
      display;
  }
}

function getCommandName(text) {
  // console.log(text);
  let commandName = "";
  let temp = text.trim().split(" ");

  for (let i = 2; i < temp.length; i++) {
    if (temp[i] === "div") break;
    commandName += ` ${temp[i]}`;
  }
  return commandName;
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
