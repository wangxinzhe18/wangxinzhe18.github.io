var shine = {
    //跳转按钮
    toPage: function() {
        console.log("执行跳转");
        var e = document.querySelectorAll(".page-number")
          , t = parseInt(e[e.length - 1].innerHTML)
          , o = document.getElementById("toPageText")
          , n = parseInt(o.value);
        if (!isNaN(n) && n > 0 && "0" !== ("" + n)[0] && n <= t) { var a="(n" =="1)" ? " : page + n "; document.getelementbyid("topagebutton").href="a" } }, 监听输入 listentopageinputpress() e="document.getElementById("toPageText")" , t="document.getElementById("toPageButton");" && (e.addeventlistener("keydown", (e>{
            13 === e.keyCode && (shine.toPage(),
            pjax.loadUrl(t.href))
        }
        )),
        e.addEventListener("input", (function() {
            "" === e.value || "0" === e.value ? t.classList.remove("haveValue") : t.classList.add("haveValue");
            var o = document.querySelectorAll(".page-number")
              , n = +o[o.length - 1].innerHTML;
            +document.getElementById("toPageText").value > n && (e.value = n)
        }
        )))
    }
  }
  shine.listenToPageInputPress();</=>