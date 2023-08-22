const arrayBtnAutoSpin = document.querySelectorAll('#btn-spin');
const arrayBtnPrice = document.querySelectorAll('#btn-price');
const arrayColumnSpin = document.querySelectorAll('#column-spin');

arrayBtnPrice[0].onclick = ()=>{
 document.querySelector('#price-game').textContent = Number(document.querySelector('#price-game').textContent) + 10000;
}

arrayBtnPrice[1].onclick = ()=>{
 document.querySelector('#price-game').textContent = Number(document.querySelector('#price-game').textContent) - 10000;
 if(Number(document.querySelector('#price-game').textContent) <= 0){
 	document.querySelector('#price-game').textContent = 0;
 }
}


arrayBtnAutoSpin[1].onclick = () =>{
	clearInterval( AutoSpin)
	document.querySelector('#price-user').textContent = Number(document.querySelector('#price-user').textContent) - Number(document.querySelector('#price-game').textContent)
	if(Number(document.querySelector('#price-user').textContent) <= 0){
	 	document.querySelector('#price-user').textContent = 0;
	 }else{
	 	SPIN(0, 410 , 1);
		SPIN(2 , 410 , 2);
		SPIN(1 , 410 , 1.6);
		setTimeout(()=>{
			Win(7);
			Win(6);
			Win(8);
			return
		}, 2000)	 
	 }

}


const AutoSpin = setInterval(()=>{document.querySelector('#price-user').textContent = Number(document.querySelector('#price-user').textContent) - Number(document.querySelector('#price-game').textContent)
	if(Number(document.querySelector('#price-user').textContent) <= 0){
	 	document.querySelector('#price-user').textContent = 0;
	 }else{
	 	SPIN(0, 600 , 1);
		SPIN(2 , 600 , 2);
		SPIN(1 , 600 , 1.6);
		setTimeout(()=>{
			Win(7);
			Win(8);
			Win(9);
			return
		}, 2000)	 
	 }
}, 6000)


arrayBtnAutoSpin[0].onclick =  AutoSpin;





const SPIN  = function(e, top ,time){
	arrayColumnSpin[e].innerHTML=`
		<li>
					<img id="icons-`+ e +`" `+`src="imgs/game-icon/1.png">
				</li>
				<li>
					<img id="icons-`+ e +`" `+` src="imgs/game-icon/6.png">
				</li>
				<li
					<img id="icons-`+ e +`" `+` src="imgs/game-icon/5.png">
				</li>
	`
	arrayIcons.forEach((item)=>{
		const liIcon = document.createElement('li')
		let i = Math.floor(Math.random() * 8)
		liIcon.innerHTML='<img id="icons-'+ e +'" key="'+i+'" src="'+arrayIcons[i]+'">'
		arrayColumnSpin[e].append(liIcon);
		})
	arrayColumnSpin[e].style.marginTop = '0px'
	let liFirst = document.querySelector('#column-spin li:first-child')
	liFirst.scrollIntoView({behavior: "smooth" })
	arrayColumnSpin[e].style.transitionDuration=time+'s'
	setTimeout(()=>{
		setTimeout(()=>arrayColumnSpin[e].style.marginTop= '-' + top + 'px',900)		
} ,1000)
}

const Win = (e)=>{
	const arrayIconsFirst = document.querySelectorAll('#icons-0');
	const arrayIconsSecond = document.querySelectorAll('#icons-1');
	const arrayIconsThrid = document.querySelectorAll('#icons-2');
	if(arrayIconsThrid[e].attributes[1].value == arrayIconsFirst[e].attributes[1].value &&
	 arrayIconsFirst[e].attributes[1].value == arrayIconsSecond[e].attributes[1].value){
		document.querySelector('#stars').textContent = Number(document.querySelector('#stars').textContent) + 100;
		document.querySelector('#price-user').textContent = Number(document.querySelector('#price-user').textContent) + (Number(document.querySelector('#price-game').textContent)* 5) 
		return
	}
}