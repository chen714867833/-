const AUTHORITYALL=6;
const PARTYMENBER=1;
const PARTYMENBERFEES=5;
const PARTYWORK=3;
const PARTYSTUDY=2;
const PARTYCHART=2;
const PARTYSYSTEM=6;

/*导航栏事件*/
$("#authManage").click(function(e){
	if($("#systemManageTip").children("span").length>1){
		for(i=$("#systemManageTip").children("span").length-1; i>0 ; i--){
			$("#systemManageTip").children("span").eq(i).remove();
		} 
	}
	$("#systemManageTip").append("<span> > 权限管理</span>");
}); 

$("#idenManage").click(function(e){
	if($("#systemManageTip").children("span").length>1){
		for(i=$("#systemManageTip").children("span").length-1; i>0 ; i--){
			$("#systemManageTip").children("span").eq(i).remove();
		}
	}
	$("#systemManageTip").append("<span> > 身份管理</span>");
});

$("#scoreManage").click(function(e){
	if($("#systemManageTip").children("span").length>1){
		for(i=$("#systemManageTip").children("span").length-1; i>0 ; i--){
			$("#systemManageTip").children("span").eq(i).remove();
		}
	}
	$("#systemManageTip").append("<span> > 积分管理</span>");
});

$("#bannerManage").click(function(e){
	if($("#systemManageTip").children("span").length>1){
		for(i=$("#systemManageTip").children("span").length-1; i>0 ; i--){
			$("#systemManageTip").children("span").eq(i).remove();
		}
	}
	$("#systemManageTip").append("<span> > banner管理</span>");
});


$("#origManage").click(function(e){
	if($("#systemManageTip").children("span").length>1){
		for(i=$("#systemManageTip").children("span").length-1; i>0 ; i--){
			$("#systemManageTip").children("span").eq(i).remove();
		}
	}
	$("#systemManageTip").append("<span> > 组织角色</span>");
});

$("#useAuthorize").click(function(e){
	if($("#systemManageTip").children("span").length>1){
		for(i=$("#systemManageTip").children("span").length-1; i>0 ; i--){
			$("#systemManageTip").children("span").eq(i).remove();
		}
	}
	$("#systemManageTip").append("<span> > 使用权限</span>");
});
/*身份管理
*添加身份
*/
$("#idenAdd").click(function(e){
	e.preventDefault();
	if($("#idenInput").val().length>0){
		$("#badgeList").append('<span class="badge">'+$("#idenInput").val()+'</span>');
		$("#idenInput").val("");
	}
});
/*
*删除身份
*/
$("#badgeList").on("click","span.badge",function(e){
	this.remove();
});
/*
*党员管理 全选
*/
/*
*党员
*/
$("div.col-md-6.checkbox-all").on("click","input[name='partyMenberAll']+div.layui-form-checkbox",function(e){
	if($("div.col-md-6.checkbox-all>input+div.layui-form-checkbox.layui-form-checked").length < AUTHORITYALL 
		&& $("div.col-md-6.auth-all>input[name='authorityAll']+div.layui-form-checkbox").hasClass("layui-form-checked")){
		$("div.col-md-6.auth-all>input[name='authorityAll']+div.layui-form-checkbox").removeClass("layui-form-checked");
	}else if($("div.col-md-6.checkbox-all>input+div.layui-form-checkbox.layui-form-checked").length == AUTHORITYALL 
		&& !$("div.col-md-6.auth-all>input[name='authorityAll']+div.layui-form-checkbox").hasClass("layui-form-checked")){
		$("div.col-md-6.auth-all>input[name='authorityAll']+div.layui-form-checkbox").addClass("layui-form-checked");
	}

	if($(this).hasClass("layui-form-checked")){
		$("input[name='partyMenber']").each(function(){
			if(!$(this).next("div.layui-form-checkbox").hasClass("layui-form-checked")){
				$(this).next("div.layui-form-checkbox").addClass("layui-form-checked")
			}
		});
	}else{
		$("input[name='partyMenber']").each(function(){
			if($(this).next("div.layui-form-checkbox").hasClass("layui-form-checked")){
				$(this).next("div.layui-form-checkbox").removeClass("layui-form-checked")
			}
		});
	}
});

$("div.row.checkbox-items").on(
	"click",
	"div.col-md-4.checkbox-item>li>input[name='partyMenber']+div.layui-form-checkbox",
	function(e){
		 //console.log("ok");
		if($(this).hasClass("layui-form-checked")){//add
			if($("div.col-md-4.checkbox-item>li>input[name='partyMenber']+div.layui-form-checkbox.layui-form-checked").length == PARTYMENBER 
				&& !$("div.col-md-6.checkbox-all>input[name='partyMenberAll']+div.layui-form-checkbox").hasClass("layui-form-checked")){
				$("div.col-md-6.checkbox-all>input[name='partyMenberAll']+div.layui-form-checkbox").addClass("layui-form-checked");
			}
		}else{//remove
			if($("div.col-md-4.checkbox-item>li>input[name='partyMenber']+div.layui-form-checkbox.layui-form-checked").length < PARTYMENBER 
				&& $("div.col-md-6.checkbox-all>input[name='partyMenberAll']+div.layui-form-checkbox").hasClass("layui-form-checked")){
				$("div.col-md-6.checkbox-all>input[name='partyMenberAll']+div.layui-form-checkbox").removeClass("layui-form-checked");
			}
		}
});
/*
*党费
*/
$("div.col-md-6.checkbox-all").on("click","input[name='partyMenberFeesAll']+div.layui-form-checkbox",function(e){
	if($("div.col-md-6.checkbox-all>input+div.layui-form-checkbox.layui-form-checked").length < AUTHORITYALL 
		&& $("div.col-md-6.auth-all>input[name='authorityAll']+div.layui-form-checkbox").hasClass("layui-form-checked")){
		$("div.col-md-6.auth-all>input[name='authorityAll']+div.layui-form-checkbox").removeClass("layui-form-checked");
	}else if($("div.col-md-6.checkbox-all>input+div.layui-form-checkbox.layui-form-checked").length == AUTHORITYALL 
		&& !$("div.col-md-6.auth-all>input[name='authorityAll']+div.layui-form-checkbox").hasClass("layui-form-checked")){
		$("div.col-md-6.auth-all>input[name='authorityAll']+div.layui-form-checkbox").addClass("layui-form-checked");
	}
	if($(this).hasClass("layui-form-checked")){
		$("input[name='partyMenberFees']").each(function(){
			if( !$(this).next("div.layui-form-checkbox").hasClass("layui-form-checked")){
				$(this).next("div.layui-form-checkbox").addClass("layui-form-checked")
			}
		});
	}else{
		$("input[name='partyMenberFees']").each(function(){
			if($(this).next("div.layui-form-checkbox").hasClass("layui-form-checked")){
				$(this).next("div.layui-form-checkbox").removeClass("layui-form-checked")
			}
		});
	}
});

$("div.row.checkbox-items").on(
	"click",
	"div.col-md-4.checkbox-item>li>input[name='partyMenberFees']+div.layui-form-checkbox",
	function(e){
		 //console.log("ok");
		if($(this).hasClass("layui-form-checked")){//add
			if($("div.col-md-4.checkbox-item>li>input[name='partyMenberFees']+div.layui-form-checkbox.layui-form-checked").length == PARTYMENBERFEES 
				&& !$("div.col-md-6.checkbox-all>input[name='partyMenberFeesAll']+div.layui-form-checkbox").hasClass("layui-form-checked")){
				$("div.col-md-6.checkbox-all>input[name='partyMenberFeesAll']+div.layui-form-checkbox").addClass("layui-form-checked");
			}
		}else{//remove
			if($("div.col-md-4.checkbox-item>li>input[name='partyMenberFees']+div.layui-form-checkbox.layui-form-checked").length < PARTYMENBERFEES 
				&& $("div.col-md-6.checkbox-all>input[name='partyMenberFeesAll']+div.layui-form-checkbox").hasClass("layui-form-checked")){
				$("div.col-md-6.checkbox-all>input[name='partyMenberFeesAll']+div.layui-form-checkbox").removeClass("layui-form-checked");
			}
		}
});
/*
*工作
*/
$("div.col-md-6.checkbox-all").on("click","input[name='partyWorkAll']+div.layui-form-checkbox",function(e){
	if($("div.col-md-6.checkbox-all>input+div.layui-form-checkbox.layui-form-checked").length < AUTHORITYALL 
		&& $("div.col-md-6.auth-all>input[name='authorityAll']+div.layui-form-checkbox").hasClass("layui-form-checked")){
		$("div.col-md-6.auth-all>input[name='authorityAll']+div.layui-form-checkbox").removeClass("layui-form-checked");
	}else if($("div.col-md-6.checkbox-all>input+div.layui-form-checkbox.layui-form-checked").length == AUTHORITYALL 
		&& !$("div.col-md-6.auth-all>input[name='authorityAll']+div.layui-form-checkbox").hasClass("layui-form-checked")){
		$("div.col-md-6.auth-all>input[name='authorityAll']+div.layui-form-checkbox").addClass("layui-form-checked");
	}
	if($(this).hasClass("layui-form-checked")){
		$("input[name='partyWork']").each(function(){
			if( !$(this).next("div.layui-form-checkbox").hasClass("layui-form-checked")){
				$(this).next("div.layui-form-checkbox").addClass("layui-form-checked")
			}
		});
	}else{
		$("input[name='partyWork']").each(function(){
			if($(this).next("div.layui-form-checkbox").hasClass("layui-form-checked")){
				$(this).next("div.layui-form-checkbox").removeClass("layui-form-checked")
			}
		});
	}
});

$("div.row.checkbox-items").on(
	"click",
	"div.col-md-4.checkbox-item>li>input[name='partyWork']+div.layui-form-checkbox",
	function(e){
		 //console.log("ok");
		if($(this).hasClass("layui-form-checked")){//add
			if($("div.col-md-4.checkbox-item>li>input[name='partyWork']+div.layui-form-checkbox.layui-form-checked").length == PARTYWORK 
				&& !$("div.col-md-6.checkbox-all>input[name='partyWorkAll']+div.layui-form-checkbox").hasClass("layui-form-checked")){
				$("div.col-md-6.checkbox-all>input[name='partyWorkAll']+div.layui-form-checkbox").addClass("layui-form-checked");
			}
		}else{//remove
			if($("div.col-md-4.checkbox-item>li>input[name='partyWork']+div.layui-form-checkbox.layui-form-checked").length < PARTYWORK 
				&& $("div.col-md-6.checkbox-all>input[name='partyWorkAll']+div.layui-form-checkbox").hasClass("layui-form-checked")){
				$("div.col-md-6.checkbox-all>input[name='partyWorkAll']+div.layui-form-checkbox").removeClass("layui-form-checked");
			}
		}
});
/*
*报表
*/
$("div.col-md-6.checkbox-all").on("click","input[name='partyChartAll']+div.layui-form-checkbox",function(e){
	if($("div.col-md-6.checkbox-all>input+div.layui-form-checkbox.layui-form-checked").length < AUTHORITYALL 
		&& $("div.col-md-6.auth-all>input[name='authorityAll']+div.layui-form-checkbox").hasClass("layui-form-checked")){
		$("div.col-md-6.auth-all>input[name='authorityAll']+div.layui-form-checkbox").removeClass("layui-form-checked");
	}else if($("div.col-md-6.checkbox-all>input+div.layui-form-checkbox.layui-form-checked").length == AUTHORITYALL 
		&& !$("div.col-md-6.auth-all>input[name='authorityAll']+div.layui-form-checkbox").hasClass("layui-form-checked")){
		$("div.col-md-6.auth-all>input[name='authorityAll']+div.layui-form-checkbox").addClass("layui-form-checked");
	}
	if($(this).hasClass("layui-form-checked")){
		$("input[name='partyChart']").each(function(){
			if( !$(this).next("div.layui-form-checkbox").hasClass("layui-form-checked")){
				$(this).next("div.layui-form-checkbox").addClass("layui-form-checked")
			}
		});
	}else{
		$("input[name='partyChart']").each(function(){
			if($(this).next("div.layui-form-checkbox").hasClass("layui-form-checked")){
				$(this).next("div.layui-form-checkbox").removeClass("layui-form-checked")
			}
		});
	}
});

$("div.row.checkbox-items").on(
	"click",
	"div.col-md-4.checkbox-item>li>input[name='partyChart']+div.layui-form-checkbox",
	function(e){
		 //console.log("ok");
		if($(this).hasClass("layui-form-checked")){//add
			if($("div.col-md-4.checkbox-item>li>input[name='partyChart']+div.layui-form-checkbox.layui-form-checked").length == PARTYCHART 
				&& !$("div.col-md-6.checkbox-all>input[name='partyChartAll']+div.layui-form-checkbox").hasClass("layui-form-checked")){
				$("div.col-md-6.checkbox-all>input[name='partyChartAll']+div.layui-form-checkbox").addClass("layui-form-checked");
			}
		}else{//remove
			if($("div.col-md-4.checkbox-item>li>input[name='partyChart']+div.layui-form-checkbox.layui-form-checked").length < PARTYCHART 
				&& $("div.col-md-6.checkbox-all>input[name='partyChartAll']+div.layui-form-checkbox").hasClass("layui-form-checked")){
				$("div.col-md-6.checkbox-all>input[name='partyChartAll']+div.layui-form-checkbox").removeClass("layui-form-checked");
			}
		}
});
/*
*学习
*/
$("div.col-md-6.checkbox-all").on("click","input[name='partyStudyAll']+div.layui-form-checkbox",function(e){
	if($("div.col-md-6.checkbox-all>input+div.layui-form-checkbox.layui-form-checked").length < AUTHORITYALL 
		&& $("div.col-md-6.auth-all>input[name='authorityAll']+div.layui-form-checkbox").hasClass("layui-form-checked")){
		$("div.col-md-6.auth-all>input[name='authorityAll']+div.layui-form-checkbox").removeClass("layui-form-checked");
	}else if($("div.col-md-6.checkbox-all>input+div.layui-form-checkbox.layui-form-checked").length == AUTHORITYALL 
		&& !$("div.col-md-6.auth-all>input[name='authorityAll']+div.layui-form-checkbox").hasClass("layui-form-checked")){
		$("div.col-md-6.auth-all>input[name='authorityAll']+div.layui-form-checkbox").addClass("layui-form-checked");
	}
	if($(this).hasClass("layui-form-checked")){
		$("input[name='partyStudy']").each(function(){
			if( !$(this).next("div.layui-form-checkbox").hasClass("layui-form-checked")){
				$(this).next("div.layui-form-checkbox").addClass("layui-form-checked")
			}
		});
	}else{
		$("input[name='partyStudy']").each(function(){
			if($(this).next("div.layui-form-checkbox").hasClass("layui-form-checked")){
				$(this).next("div.layui-form-checkbox").removeClass("layui-form-checked")
			}
		});
	}
});

$("div.row.checkbox-items").on(
	"click",
	"div.col-md-4.checkbox-item>li>input[name='partyStudy']+div.layui-form-checkbox",
	function(e){
		 //console.log("ok");
		if($(this).hasClass("layui-form-checked")){//add
			if($("div.col-md-4.checkbox-item>li>input[name='partyStudy']+div.layui-form-checkbox.layui-form-checked").length == PARTYSTUDY 
				&& !$("div.col-md-6.checkbox-all>input[name='partyStudyAll']+div.layui-form-checkbox").hasClass("layui-form-checked")){
				$("div.col-md-6.checkbox-all>input[name='partyStudyAll']+div.layui-form-checkbox").addClass("layui-form-checked");
			}
		}else{//remove
			if($("div.col-md-4.checkbox-item>li>input[name='partyStudy']+div.layui-form-checkbox.layui-form-checked").length < PARTYSTUDY 
				&& $("div.col-md-6.checkbox-all>input[name='partyStudyAll']+div.layui-form-checkbox").hasClass("layui-form-checked")){
				$("div.col-md-6.checkbox-all>input[name='partyStudyAll']+div.layui-form-checkbox").removeClass("layui-form-checked");
			}
		}
});
/*
*系统
*/
$("div.col-md-6.checkbox-all").on("click","input[name='partySystemAll']+div.layui-form-checkbox",function(e){
	if($("div.col-md-6.checkbox-all>input+div.layui-form-checkbox.layui-form-checked").length < AUTHORITYALL 
		&& $("div.col-md-6.auth-all>input[name='authorityAll']+div.layui-form-checkbox").hasClass("layui-form-checked")){
		$("div.col-md-6.auth-all>input[name='authorityAll']+div.layui-form-checkbox").removeClass("layui-form-checked");
	}else if($("div.col-md-6.checkbox-all>input+div.layui-form-checkbox.layui-form-checked").length == AUTHORITYALL 
		&& !$("div.col-md-6.auth-all>input[name='authorityAll']+div.layui-form-checkbox").hasClass("layui-form-checked")){
		$("div.col-md-6.auth-all>input[name='authorityAll']+div.layui-form-checkbox").addClass("layui-form-checked");
	}
	if($(this).hasClass("layui-form-checked")){
		$("input[name='partySystem']").each(function(){
			if( !$(this).next("div.layui-form-checkbox").hasClass("layui-form-checked")){
				$(this).next("div.layui-form-checkbox").addClass("layui-form-checked")
			}
		});
	}else{
		$("input[name='partySystem']").each(function(){
			if($(this).next("div.layui-form-checkbox").hasClass("layui-form-checked")){
				$(this).next("div.layui-form-checkbox").removeClass("layui-form-checked")
			}
		});
	}
});

$("div.row.checkbox-items").on(
	"click",
	"div.col-md-4.checkbox-item>li>input[name='partySystem']+div.layui-form-checkbox",
	function(e){
		 //console.log("ok");
		if($(this).hasClass("layui-form-checked")){//add
			if($("div.col-md-4.checkbox-item>li>input[name='partySystem']+div.layui-form-checkbox.layui-form-checked").length == PARTYSYSTEM 
				&& !$("div.col-md-6.checkbox-all>input[name='partySystemAll']+div.layui-form-checkbox").hasClass("layui-form-checked")){
				$("div.col-md-6.checkbox-all>input[name='partySystemAll']+div.layui-form-checkbox").addClass("layui-form-checked");
			}
		}else{//remove
			if($("div.col-md-4.checkbox-item>li>input[name='partySystem']+div.layui-form-checkbox.layui-form-checked").length < PARTYSYSTEM 
				&& $("div.col-md-6.checkbox-all>input[name='partySystemAll']+div.layui-form-checkbox").hasClass("layui-form-checked")){
				$("div.col-md-6.checkbox-all>input[name='partySystemAll']+div.layui-form-checkbox").removeClass("layui-form-checked");
			}
		}
});

/*全部权限*/
$("div.col-md-6.auth-all").on("click","input[name='authorityAll']+div.layui-form-checkbox",function(e){
	if($(this).hasClass("layui-form-checked")){
		$("div.col-md-6.checkbox-all>input+div.layui-form-checkbox").each(function(e){
			if(!$(this).hasClass("layui-form-checked")){
				$(this).click();
			}
		});
	}else{
		$("div.col-md-6.checkbox-all>input+div.layui-form-checkbox").each(function(e){
			if($(this).hasClass("layui-form-checked")){
				$(this).click();
			}
		});
	}
});
