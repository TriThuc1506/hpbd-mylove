function fadeIn() {
  let text = $(".content")
    .text()
    .replace(/^\s+|\s+$/g, "")
    .split(" ");

  text = text.filter((item) => item !== "");
  let length = text.length;
  let i = 0;
  let txt;
  const html = [];

  for (; i < length; i++) {
    txt = text[i] + " ";
    
    if (text[i].includes("!")) {
      html.push("<br />");
    }else {
      html.push('<span class="c animated">' + txt + "</span>");
    }
  }
  $(".content").removeClass("c").html(html.join(""));
  for (i = 0, length = html.length; i < length; i++) {
    !((i) => {
      setTimeout(() => {
        $(".content").find(".animated").eq(i).addClass("fadeIn");

      }, i * 250);
    })(i);
  }
}

document.querySelector("#start").onclick = () => {
  const audio = new Audio("./myLove.mp3");
  audio.play();
  audio.loop = true;

  document.querySelector("#start-frame").style = "display: none";
  document.querySelector(".content").style = "display: block";
  document.querySelector(".content").style.backgroundImage = "url('https://i.pinimg.com/564x/00/65/a3/0065a38d22a4b6579b668a7bc7491df1.jpg')";
  document.querySelector("#heart").hidden = false;
  fadeIn();
};
