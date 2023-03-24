//动态标题根据离开页面跟回来显示不同的文字描述~
var OriginTitile = document.title
var titleTime;
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    //离开当前页面时标签显示内容
    document.title = "达咩ovo！！ 给我回来！";
    clearTimeout(titleTime);
  } else {
    //返回当前页面时标签显示内容
    document.title = "欢迎回来ovo~~！我的宝贝ovo" + OriginTitile;
    //两秒后变回正常标题
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});