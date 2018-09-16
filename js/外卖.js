window.onload=function(){
		var oImg=document.getElementById("add");
		var oFive=document.getElementById("five");
		var oBuy=document.getElementById("buy-car");
		var oSong=document.getElementById("song");
		let oNum=document.getElementsByClassName("Num")[0];
		oBuy.style.backgroundColor="#ccc";
		oFive.style.display="none";
		oSong.style.backgroundColor="#ccc";
		let osub=document.getElementsByClassName("minus")[0];
		let num=0;
		let oa=document.getElementById("song_a");
		oImg.onclick=function()
		{
			num++;
			osub.style.display="block";
			oBuy.style.backgroundColor="#FF6D01";
			oFive.style.display="block";
			oFive.innerHTML=num;
			oSong.style.backgroundColor="#FF6D01";
			oNum.style.display="block";
			oNum.innerHTML=num;
			
//			if(oSong.style.backgroundColor=="#FF6D01";)
//			{
//				oa.href="javascript:;";
//			}else{
//				oa.href="shade.html";
//			}
			
		}
		oa.onclick=function(){
			if(num==0){
				this.href="#";
			}else if(num>0){
				this.href="shade.html";
			}
		}
		osub.onclick=function(){
			num--;
			oFive.innerHTML=num;
			oNum.innerHTML=num;
			if(num==0){
				this.style.display="none";
				oSong.style.backgroundColor="rgb(204,204,204)";
				oBuy.style.backgroundColor="rgb(204,204,204)";
				oFive.style.display="none";
				oNum.style.display="none";
			}
			
		}
		
		

}
