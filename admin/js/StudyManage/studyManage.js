$("#studyContentBack").on("click",function(event){
	event.preventDefault();
	var length=$("#studyManageTip>span").length;
	if(length>1)
		$("#studyManageTip>span")[length-1].remove();
});

$("#studyContent>form.layui-form").on("click","div.layui-form>div.layui-table-box>div.layui-table-body>table>tbody>tr>td>div.layui-table-cell>a.studyContentDetail",function(event){
	event.preventDefault();
	$("#studyManageTip").append("<span> > 学习内容详情</span>");
	//详情加载
});

$("#studyContentNav").click(function(event){
	var length=$("#studyManageTip>span").length;
	while(length>1){
		$("#studyManageTip>span")[length-1].remove();
		length--;
	}
	$("#studyManageTip").append("<span> > 学习内容</span>");
});

$("#studyCircumstancesNav").click(function(event){
	var length=$("#studyManageTip>span").length;
	while(length>1){
		$("#studyManageTip>span")[length-1].remove();
		length--;
	}
	$("#studyManageTip").append("<span> > 学习情况分析</span>");
});