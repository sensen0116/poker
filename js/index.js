$(function(){
	var poker=[];
	var colors=['c','h','d','s'];
	var biao={};
	var number=['A','1','2','3','4','5','6','7','8','9','10','11','12','13'];
	while(poker.length<52){

		var huase=Math.floor(Math.random()*4);
		var shuzi=Math.ceil(Math.random()*13);
		var item={huase:colors[huase],shuzi:number[shuzi]};
		if(!biao[huase+'_'+shuzi]){
			poker.push(item);
			biao[huase+'_'+shuzi]=true;
			console.log(66)
		}
		
	}

	var index=0;
	for(var i=0;i<7;i++){
	
	var t=i*50;
	for(var j=0;j<(i+1);j++){
         index+=1;
		var l=(6-i)*50+j*100;
		$('<div>').addClass('pai shang')
		.attr('id',i+'_'+j)
        .appendTo('.zhuozi')
        .css({
			backgroundImage:'url(images/'+poker[index].shuzi+poker[index].huase+'.png)'
		})
		
		.attr('shuzi',poker[index].shuzi)
		.delay(i*200+j*300)
		.animate({
			left:l,
			top:t,
			opacity:1
		})
		
		// console.log(poker[index].number,poker[index].color)
		// 	for(var i=0;i<24;i++){
// 			$('<div>').addClass('pai2').appendTo('.zhuozi')
// 		    .delay(i*20)
// 		    .css({
// 			backgroundImage:'url(images/'+poker[index].shuzi+poker[index].huase+'.png)'
// 		})
//             .animate({
// 			left:100,
// 			top:400,
// 			opacity:1
// 		});
// }
		};

	};
	for (; index < poker.length; index++) {
	$('<div>')
    .addClass('pai zuo')
	.attr('shuzi',poker[index].shuzi)

    // .data('number',poker[index].number)
    .delay(index*100)
    .css({backgroundImage:'url(images/'+poker[index].shuzi+poker[index].huase+'.png)'})
    .animate({
    	top:520,
    	left:100,
    	opacity:1
    })
    .appendTo('.zhuozi')

};

var ymyyz=function(el){
	var x=Number($(el).attr('id').split('_')[0]);
	var y=Number($(el).attr('id').split('_')[1]);
	return $('#'+(x+1)+'_'+y).length&&$('#'+(x+1)+'_'+(y+1)).length
    

	
}
var shangyizhang=null ;
$('.zhuozi .pai').on('click',function(){
	// $(this).addClass('chulie')

	if($(this).hasClass('shang')&&ymyyz(this)){
		return
	}
 
	

	// 点击的牌跳
	$(this).toggleClass('chulie');
	if($(this).hasClass('chulie')){
      $(this).animate({top:'-=30'})
         console.log(888)
      
	}else{
      console.log(777)

      $(this).animate({top:'+=30'})
	}

	// 点k直接消失
     if($(this).attr('shuzi')==='13'){
     	
			$(this).animate({
				top:0,
				left:600,
				opacity:0,
			}).queue(function(){
				$(this).remove();
			})
			return;
			
		}
	// 点第一张
	if(!shangyizhang){
		shangyizhang=$(this);

		// 点第二章
	}else{


		if(Number(shangyizhang.attr('shuzi'))+Number($(this).attr('shuzi'))===13){
			$('.zhuozi .chulie').delay(400).animate({
				top:0,
				left:600,
				opacity:0,
			}).queue(function(){
				$(this).remove()
			})
			
			shangyizhang=null;
		     $(this).animate({
		     	top:0,


		     }).queue(function(){
                 $(this).remove();
		     });


		      // 加起来不是13
		}else{
			$('.zhuozi .chulie').delay(400).animate({
				top:'+=30'
			}).removeClass('chulie')
			
			
		}
		shangyizhang=null;
	}




	}) 










// 左右左右牌
var zIndex=1;
    $('.right').on('click',function(){
    	zIndex+=1;
    	console.log(22)
    	$(' .zuo')
    	.eq(-1)
    	.removeClass('zuo')
    	.addClass('you')
    	.animate({
    		top:520,
    		left:520,
    	})
        .css({
        	zIndex:zIndex
        })
    	
    });
    var cishu=0;
    $('.left').on('click',function(){
    	cishu+=1;
    	if($('.zuo').length){
    		return
    	}
    	if(cishu>3){
    		return
    	}
    	$('.zhuozi .you').each(function(i,el){
          $(this).delay(i*30).animate({
          	top:520,
          	left:100,
          })
          .css({zIndex:0})
          .removeClass('you')
          .addClass('zuo')
    	})
    })
})