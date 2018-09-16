//
////
////		let confirmpay=document.getElementById("confirm-pay");
////		let oInfo=document.getElementsByClassName("buy-info1")[0];
////		let oshade=document.getElementsByClassName("shade")[0];

		$("#confirm-pay").click(function(){
			$(".shade").css("display","block");
			$(".buy-info1").css("height",485);
//			document.body.style.overflow="hidden";
//			document.documentElement.style.overflow='hidden';
		})
		
		
	    let cir=document.querySelectorAll(".choose1 li .fr");
	    for(let i=0;i<cir.length;i++){
	    	cir[i].onclick=function(){
	    		for(let j=0;j<cir.length;j++){
	    			cir[j].className="fr";
	    		}
	    		cir[i].className="fr active";
	    	}
	    	
	    }
