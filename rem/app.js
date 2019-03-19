require('./index.scss');
//获取屏幕宽度（viewport）
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;

//获取html的dom
let htmlDom = document.getElementsByTagName("html")[0];

//设置html的fontSize
htmlDom.style.fontSize = htmlWidth / 10 + "px";

//es6的写法 ()=>
//相当于
// window.addEventListener('resize',function(e){})
//根据页面的大小调整
window.addEventListener('resize',(e)=>{
	let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
	htmlDom.style.fontSize = htmlWidth / 10 + "px";
})


