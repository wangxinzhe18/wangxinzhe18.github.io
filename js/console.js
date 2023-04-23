var now1 = new Date();

function createtime1() {
  var grt = new Date("03/14/2023 00:00:00"); //此处修改你的建站时间或者网站上线时间
  now1.setTime(now1.getTime() + 250);
  var days = (now1 - grt) / 1000 / 60 / 60 / 24;
  var dnum = Math.floor(days);

  var ascll = [
    `Welcome WXZ.Blog\`Blog!`,
    `生活明朗, 万物可爱`,
    `
    __      ______  _____________   __________.__                 
    /  \    /  \   \/  /\____    /   \______   \  |   ____   ____  
    \   \/\/   /\     /   /     /     |    |  _/  |  /  _ \ / ___\ 
     \        / /     \  /     /_     |    |   \  |_(  <_> ) /_/  >
      \__/\  / /___/\  \/_______ \ /\ |______  /____/\____/\___  / 
           \/        \_/        \/ \/        \/           /_____/  
                                              
`,
    "WXZ`Blog 已上线",
    dnum,
    "天",
    "©2023 By Anzhiyu",
  ];

  setTimeout(
    console.log.bind(
      console,
      `\n%c${ascll[0]} %c ${ascll[1]} %c ${ascll[2]} %c${ascll[3]}%c ${ascll[4]}%c ${ascll[5]}\n\n%c ${ascll[6]}\n`,
      "color:#3b70fc",
      "",
      "color:#3b70fc",
      "color:#3b70fc",
      "",
      "color:#3b70fc",
      ""
    )
  );
}

createtime1();

function createtime2() {
  var ascll2 = [`NCC2-036`, `调用前置摄像头拍照成功，识别为【小笨蛋】.`, `Photo captured: `, `  `];

  setTimeout(
    console.log.bind(
      console,
      `%c ${ascll2[0]} %c ${ascll2[1]} %c \n${ascll2[2]} %c\n${ascll2[3]}\n`,
      "color:white; background-color:#4fd953",
      "",
      "",
      'background:url("https://unpkg.zhimg.com/anzhiyu-assets@latest/image/common/tinggge.gif") no-repeat;font-size:450%'
    )
  );

  setTimeout(console.log.bind(console, "%c WELCOME %c 你好，小傻瓜.", "color:white; background-color:#4f90d9", ""));

  setTimeout(
    console.warn.bind(
      console,
      "%c ⚡ Powered by Anzhiyu %c 你正在访问 WXZ 的博客.",
      "color:white; background-color:#f0ad4e",
      ""
    )
  );

  setTimeout(console.log.bind(console, "%c W23-12 %c 你已打开控制台.", "color:white; background-color:#4f90d9", ""));
  setTimeout(
    console.warn.bind(console, "%c S013-782 %c 你现在正处于监控中.", "color:white; background-color:#d9534f", "")
  );
}
createtime2();

console.log = function () {};</_>