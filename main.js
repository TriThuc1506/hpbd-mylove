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
    html.push('<span class="c animated">' + txt + "</span>");
    if (text[i].includes("!")) {
      html.push("<br />");
    }
  }
  $(".content").removeClass("c").html(html.join(""));
  for (i = 0, length = html.length; i < length; i++) {
    !((i) => {
      setTimeout(() => {
        $(".content").find(".animated").eq(i).addClass("fadeIn");

      }, i * 455);
    })(i);
  }
}

document.querySelector("#start").onclick = () => {
  document.querySelector("#audio").play();
  document.querySelector("#start-frame").style = "display: none";
  document.querySelector(".content").style = "display: block";
  document.querySelector("#heart").hidden = false;
  document.querySelector("body").style.backgroundColor = "#f953c6";
  fadeIn();
};
