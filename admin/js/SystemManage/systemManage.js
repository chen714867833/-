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


$("#idenAdd").click(function(e){
	e.preventDefault();
	if($("#idenInput").val().length>0){
		$("#badgeList").append('<span class="badge">'+$("#idenInput").val()+'</span>');
		$("#idenInput").val("");
	}
});

$("#badgeList").on("click","span.badge",function(e){
	this.remove();
});