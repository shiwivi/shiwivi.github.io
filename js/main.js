// 加载页面
$(window).on('load',function(){
    $('.loading').hide(0);
})
$(function(){
$('#fullpage').fullpage({
anchors: ['firstPage', 'secondPage'],
menu: '#Menu',
// 不记录上次访问的页面
recordHistory: false,
// autoScrolling:false,
afterLoad:function(anchorLink,index){
if(index==2)
{//加载文案
    var sentence=[
        '我们都生活在阴沟里，但仍有人仰望星空。',
        '如果你瞄准月亮，即使迷失也是落在星河之间',
        '摘下星星给你，摘下月亮给你，你想要都给你，别再烦恼丧气满脑想着放弃',
        '携带满天星光奔赴更美好的未来',
        '月亮踩碎星光，我们都是藏于银河的幻想',
        '熬过去的那一天，把山河星月当作贺礼'
    ]
let oneSentence=sentence[Math.floor(Math.random()*(sentence.length))];
$(".excerpt").text(oneSentence);

}

}
});
$.fn.fullpage.setAllowScrolling(false,'up');
// 显示副标题，延迟3000ms
$('.tlt').textillate({initialDelay: 1000});
$('.septum').textillate({in:{delay: 100}});

});   

// 倒计时
    let end=new Date('2021/12/24 00:00:00').getTime();
    function cutdown(){
        let now=new Date().getTime();
        let gap=end-now;
        let eSecond=1000;
        let eMinute=eSecond*60;
        let eHour=eMinute*60;
        let eDay=eHour*24;
        let days=Math.floor(gap/eDay);
        let hours=Math.floor((gap%(eDay))/(eHour));
        let minutes=Math.floor((gap%(eHour))/(eMinute));
        let seconds=Math.floor((gap%(eMinute))/(eSecond));
        document.getElementById('day').innerText=days;
        document.getElementById('hour').innerText=hours;
        document.getElementById('minute').innerText=minutes;
        document.getElementById('second').innerText=(seconds>=10)?seconds:'0'+seconds;
    }
    setInterval(function(){
        cutdown();
    },1000)
    document.addEventListener("visibilitychange",function(){
        if(document.visibilityState==="hidden"){
            document.title="这个页面会占用很多内存哦";
        }
        else{
            document.title="";
            setTimeout(function(){
                document.title="是shiwi啊";
            },3000)
        }
    })
    
    //打字机
let txt=["技术&生活&分享&回忆","推荐使用PC端谷歌浏览器访问","兼容性正在优化中","bug一堆，记得和我说","服务器在国外,加载会有亿点点慢"];
let txtIndex=0;//数组下标
let wordIndex=0;//每句话下标
let flag=true;//判断写入/删除
let pause=0;//暂停间隙
var typer=setInterval(()=>{
    if(pause==0){
if(flag){
    $(".tag").text(txt[txtIndex].substring(0,++wordIndex));
}
else{
    $(".tag").text(txt[txtIndex].substring(0,wordIndex--));
}
}
else{
    pause++;
}
if(wordIndex>=txt[txtIndex].length+10){//+10为文本输入完毕后的展示时长
    flag=false;
}
else if(wordIndex<0){
   txtIndex++;
    wordIndex=0;
    pause=-8;//越小暂停时间越长
    flag=true;
        if(txtIndex>=txt.length){
            txtIndex=0;
        }
}
},150)