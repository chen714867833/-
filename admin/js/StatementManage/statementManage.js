//初始化宽度
var width4=parseInt($("#memberManage>div.layui-row>div.layui-col-md4:first-child").css("width"));
//console.log(width4);
$("#memberManage>div.layui-row>div.layui-col-md4").css("height",width4+"px");
$("#memberManage>div.layui-row>div.layui-col-md4>div").css("width",(width4-15)+"px");
$("#memberManage>div.layui-row>div.layui-col-md4>div").css("height",(width4-15)+"px");
var width12=parseInt($("#memberManage>div.layui-row>div.layui-col-md12").css("width"));
//console.log(width12);
$("#memberManage>div.layui-row>div.layui-col-md12>div").css("width",(width12*0.7)+"px");
$("#memberManage>div.layui-row>div.layui-col-md12>div").css("height",(width12*0.6)+"px");

var width6=parseInt($("div.tab-content").css("width"))*0.5
//console.log(parseInt($("div.tab-content").css("width"))*0.5);
$("#organizeManage>div.layui-row>div.layui-col-md6").css("height",width6+"px");
$("#organizeManage>div.layui-row>div.layui-col-md6>div").css("width",(width6-10)+"px");
$("#organizeManage>div.layui-row>div.layui-col-md6>div").css("height",width6+"px");

//监听窗口大小变化
window.onresize=function(){
    var width4=parseInt($("#memberManage>div.layui-row>div.layui-col-md4:first-child").css("width"));
    //console.log(width4);
    $("#memberManage>div.layui-row>div.layui-col-md4").css("height",width4+"px");
    $("#memberManage>div.layui-row>div.layui-col-md4>div").css("width",(width4-15)+"px");
    $("#memberManage>div.layui-row>div.layui-col-md4>div").css("height",(width4-15)+"px");

    var width12=parseInt($("#memberManage>div.layui-row>div.layui-col-md12").css("width"));
    //console.log(width12);
    $("#memberManage>div.layui-row>div.layui-col-md12>div").css("width",(width12*0.7)+"px");
    $("#memberManage>div.layui-row>div.layui-col-md12>div").css("height",(width12*0.6)+"px");

    var width6=parseInt($("div.tab-content").css("width"))*0.5
    //console.log(parseInt($("div.tab-content").css("width"))*0.5);
    $("#organizeManage>div.layui-row>div.layui-col-md6").css("height",width6+"px");
    $("#organizeManage>div.layui-row>div.layui-col-md6>div").css("width",(width6-10)+"px");
    $("#organizeManage>div.layui-row>div.layui-col-md6>div").css("height",width6+"px");

    setMemberManage();
    setOriganizeManage();
};

var colors=['#dd6b66','#759aa0','#8dc1a9','#e69d87','#919e8b','#aaaaaa'];

  var sexChart=echarts.init(document.getElementById("sexProportion"));
  var ageChart=echarts.init(document.getElementById("ageProportion"));
  var academicChart=echarts.init(document.getElementById("academicProportion"));
  var timeChart=echarts.init(document.getElementById("timeProportion"));
  var nationChart=echarts.init(document.getElementById("nationProportion"));
  var countHeadsChart=echarts.init(document.getElementById("countHeadsOfMonth"));
  var origanizeChart=echarts.init(document.getElementById("organizeProportion"));
  var idenChart=echarts.init(document.getElementById("idenProportion"));
  sexChart.showLoading();
  ageChart.showLoading();
  academicChart.showLoading();
  timeChart.showLoading();
  nationChart.showLoading();
  countHeadsChart.showLoading();
  origanizeChart.showLoading();
  idenChart.showLoading();

function randomColors(colors){
  for(var i=6;i>0;i--){
    var x=Math.floor(Math.random()*(colors.length-1));
    var y=Math.floor(Math.random()*(colors.length-1));
    var temp=colors[y];
    colors[y]=colors[x];
    colors[x]=temp;
  }
  return colors;
}
function setMemberManage(){
  //#009688深绿,#5FB878浅绿,#1E9FFF蓝,#01AAED浅蓝,#FF5722橙,#FFB800黄,#2F4056深灰
  var sexOption={
    title : {
      text: '性别占比',
      top:10,
      left:5,
    },
    color: randomColors(colors),
    legend : {
      orient: 'vertical',
      right:10,
      top:40,
    },
    tooltip: {
      formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    series : [
        {
            name: '性别',
            type: 'pie',
            radius: ['25%','40%'],
            center: ['35%', '60%'],
            data:[
                {value:235, name:'男'},
                {value:274, name:'女'},
            ]
            //roseType: 'angle',
        }
    ]
  };
  var ageOption={
    title : {
      text: '年龄占比',
      top:10,
      left:5,
    },
    color: randomColors(colors),
    legend : {
      orient: 'vertical',
      right:10,
      top:40,
    },
    tooltip: {
      formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    series : [
        {
            name: '年龄',
            type: 'pie',
            radius: ['25%','40%'],
            center: ['35%', '60%'],
            data:[
                {value:115, name:'18-25岁'},
                {value:274, name:'26-35岁'},
                {value:300, name:'36-49岁'},
            ]
            //roseType: 'angle',
        }
    ]
  };
  var academicOption={
    title : {
      text: '学历占比',
      top:10,
      left:5,
    },
    color: randomColors(colors),
    legend : {
      orient: 'vertical',
      right:10,
      top:40,
    },
    tooltip: {
      formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    series : [
        {
            name: '学历',
            type: 'pie',
            radius: ['25%','40%'],
            center: ['35%', '60%'],
            data:[
                {value:115, name:'本科'},
                {value:274, name:'硕士'},
            ]
            //roseType: 'angle',
        }
    ]
  };
  var timeOption={
    title : {
      text: '入党时长占比',
      top:10,
      left:5,
    },
    color: randomColors(colors),
    legend : {
      orient: 'vertical',
      right:10,
      top:40,
    },
    tooltip: {
      formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    series : [
        {
            name: '入党时长',
            type: 'pie',
            radius: ['25%','40%'],
            center: ['35%', '60%'],
            data:[
                {value:115, name:'2年以下'},
                {value:274, name:'6-9年'},
                {value:300, name:'10-20年'},
            ]
            //roseType: 'angle',
        }
    ]
  };
  var nationOption={
    title : {
      text: '民族占比',
      top:10,
      left:5,
    },
    color: randomColors(colors),
    legend : {
      orient: 'vertical',
      right:10,
      top:40,
    },
    tooltip: {
      formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    series : [
        {
            name: '民族',
            type: 'pie',
            radius: ['25%','40%'],
            center: ['35%', '60%'],
            data:[
                {value:115, name:'汉族'},
            ]
            //roseType: 'angle',
        }
    ]
  };
  var countHeadsOption={
    title : {
      text: '党员数量月统计数据',
    },
    color: randomColors(colors),
    legend : {
    },
    tooltip: {
      formatter: "{a} <br/>{b}: {c}",
    },
    xAxis:{
      data:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    },
    yAxis:[{
      type:'value',
      name:'(人)'
    }],
    series : [
        {

            name: '党员数量',
            type: 'bar',
            data:[20,10,30,40,50,30,12,32,12,33,23,12]
        }
    ]
  };
  
  setTimeout(function(){
    sexChart.hideLoading();
    ageChart.hideLoading();
    academicChart.hideLoading();
    timeChart.hideLoading();
    nationChart.hideLoading();
    countHeadsChart.hideLoading();

    sexChart.setOption(sexOption);
    ageChart.setOption(ageOption);
    timeChart.setOption(timeOption);
    academicChart.setOption(academicOption);
    nationChart.setOption(nationOption);
    countHeadsChart.setOption(countHeadsOption);
  },2000);
  
  
}

function setOriganizeManage(){
  var idenOption={
    title : {
      text: '身份占比',
      
    },
    color: randomColors(colors),
    legend : {
    },
    tooltip: {
      formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    label: {
      textStyle:{
        fontSize: 30,
      },
    },
    series : [
        {
            name: '身份',
            type: 'pie',
            roseType: 'angle',
            radius: ['30%','50%'],
            data:[
                {value:115, name:'学生'},
                {value:45, name:'其他'},
            ]
            //roseType: 'angle',
        }
    ]
  };
  var origanizeCountOption={
    title : {
      text: '各组织人数',
    },
   color: randomColors(colors),
    legend : {
    },
    tooltip: {
      formatter: "{a} <br/>{b}: {c}",
    },
    xAxis:{
      data:['测试部门'],
    },
    yAxis:[{
      type:'value',
      name:'(人)'
    }],
    series : [
        {
            name: '部门人数',
            type: 'bar',
            data:[34],
        }
    ]
  };
  
  setTimeout(function(){
    origanizeChart.hideLoading();
    idenChart.hideLoading();

    origanizeChart.setOption(origanizeCountOption);
    idenChart.setOption(idenOption);
  },2000);
}

$("#memberManageClick").click(function(event){
  setMemberManage();
});
$("#origanizeManageClick").click(function(event){
  setOriganizeManage();
});

$("#memberManageClick").click();