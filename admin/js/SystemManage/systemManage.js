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
		$("#idenBadgeList").append('<span class="badge">'+$("#idenInput").val()+'</span>');
		$("#idenInput").val("");
	}
});
/*
*删除身份
*/
$("#idenBadgeList").on("click","span.badge",function(e){
	this.remove();
});
/*组织管理
*添加组织
*/
$("#origAdd").click(function(e){
    e.preventDefault();
    if($("#origInput").val().length>0){
        $("#origBadgeList").append('<span class="badge">'+$("#origInput").val()+'</span>');
        $("#origInput").val("");
    }
});
/*
*删除身份
*/
$("#origBadgeList").on("click","span.badge",function(e){
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

/*
*更改图片
*/
$("#bannerChange").click(function(e){
	if($("#bannerChange").text() === "更改照片")
	{
		$("#bannerCancel").addClass("unDisabled");
		$("#bannerLink").prop("disabled",false);
		$("#bannerChange").text("确认更改");
	}else{
        if($("#bannerLink").val().length == 0){
            $("#bannerLink").tooltip("show");
            setTimeout(function(){
            	$("#bannerLink").tooltip("hide");
			},2000);
		}
		else{
            $("#bannerCarousel>div[carousel-item]>div.layui-this>img").prop("src",$("#bannerLink").val());
            $("#bannerImg").prop("src",$("#bannerCarousel>div[carousel-item]>div.layui-this>img").prop("src"));
            $("#bannerLink").prop("value","");
            $("#bannerLink").prop("disabled",true);
            $("#bannerCancel").removeClass("unDisabled");
            $("#bannerChange").text("更改照片");
        }

	}
});

$("#bannerCancel").click(function(){
	if($(this).hasClass("unDisabled")){
        $("#bannerChange").text("更改照片");
        $("#bannerLink").prop("value","");
        $("#bannerLink").prop("disabled",true);
        $("#bannerCancel").removeClass("unDisabled");
	}
});
/*
$("#bannerSave").click(function(e){

});
*/
$("#bannerDelete").click(function(e){
	if(confirm("确定删除？")){
		$("#bannerCarousel>div[carousel-item]>div.layui-this").remove();
        $("#bannerCarousel>div.layui-carousel-ind>ul>li.layui-this").remove();
        $("#bannerCarousel>div[carousel-item]>div:first-child").addClass("layui-this");
        $("#bannerCarousel>div.layui-carousel-ind>ul>li:first-child").addClass("layui-this");
        layui.use('carousel', function(){
            var carousel = layui.carousel;
            //建造实例
            carousel.render({
                elem: '#bannerCarousel'
                ,width: '100%' //设置容器宽度
                ,arrow: 'always' //始终显示箭头
                ,indicator: 'outside'
                ,autoplay: false
            });

            //监听滚动
            carousel.on('change(bannerCarousel)', function(obj){
                //bannerCarousel来源于对应HTML容器的 lay-filter="bannerCarousel" 属性值
            	//console.log(obj.index); //当前条目的索引
                //console.log(obj.prevIndex); //上一个条目的索引
                //console.log(obj.item); //当前条目的元素对象
                setTimeout(function(){$("#bannerImg").prop("src",obj.item.children("img").prop("src"))},300);
            });

            $("#bannerImg").prop("src",$("#bannerCarousel>div[carousel-item]>div.layui-this>img").prop("src"));
        });
	}
});
