function shuffle(str) {
  var str = document.getElementById("txt");
  var a = str.innerHTML;
  var newArr = [];
  var neww = "";
  var text = a.replace(/[\r\n]/g, "").split(" ");

  text.map(function (v) {
    v.split("").map(function () {
      var hash = Math.floor(Math.random() * v.length);
      neww += v[hash];
      v = v.replace(v.charAt(hash), "");
    });
    newArr.push(neww);
    neww = "";
  });
  var x = newArr.map((v) => v.split("").join(" ")).join("\n");
  str.value = x
    .split("")
    .map((v) => v.toUpperCase())
    .join("");
}
