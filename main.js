function fadeIn() {
  const text = $(".content")
    .text()
    .replace(/^\s+|\s+$/g, "");
  let length = text.length;
  let i = 0;
  let txt;
  const html = [];
  const sp = 4;
  for (; i < length; i += sp) {
    txt = text.substring(i, i + sp);

    html.push('<span class="c animated">' + txt + "</span>");
  }
  $(".content").removeClass("c").html(html.join(""));

  for (i = 0, length = html.length; i < length; i++) {
    !((i) => {
      setTimeout(() => {
        $(".content").find(".animated").eq(i).addClass("fadeIn");
      }, i * 420);
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
