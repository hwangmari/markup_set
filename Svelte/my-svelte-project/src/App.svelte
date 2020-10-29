<script>
	let num = "";
	let computer = "";
	let print = "";
	let my = "";

	function ACTION() {
		num = parseInt (Math.random() * 3)
		if (num === 0 ) computer = "가위"
		else if ( num === 1 ) computer = "바위"
		else if ( num === 2 ) computer = "보"	
		
	}



	function SEND (my) {
		clearInterval(timer)
		
		if ( computer === my ) print = "비겼다 ~ㅅ ~" 
		else if ( computer === "가위" && my === "바위" ) print = "이겼다 +ㅅ +"
		else if ( computer === "가위" && my === "보" ) print = "졌다ㅜㅜ"

		else if ( computer === "바위" && my === "가위" ) print = "이겼다 +ㅅ +"
		else if ( computer === "바위" && my === "보" ) print = "졌다ㅜㅜ"

		else if ( computer === "보" && my === "가위" ) print = "이겼다 +ㅅ +"
		else if ( computer === "보" && my === "바위" ) print = "졌다ㅜㅜ"
		
	}

	let timer = setInterval(ACTION, 120);

	// function RESET() {
	// 	let timer = setInterval(ACTION, 300);
	// }
	// 버튼을 눌렀을때 그 값을 보여지게 하고 싶음 bind:value 이걸 어떻게 하는가?
	// 리셋을 누르고 나면 다시 버튼을 눌렀을때 clearInterval(timer)  가 안됨
	// function RESET () {
	// 	if ( RESET ) let timer = setInterval(ACTION, 300);
	// 	else if ( SEND )  clearInterval(timer) 
	// }

</script>

<main>
	<h1>랜덤 가위바위보<br>
		{computer}
	</h1>
	<h2>
		이겼다 비겼다 졌다 <br>
		{print}
	</h2>
	<h3>나의 결과값 {my}</h3>

	<button on:click={()=> SEND('가위')}>가위</button>
	<button on:click={() => SEND('바위')}>바위</button>
	<button on:click={() => SEND('보')}>보</button>

	<button on:click={() => RESET('reset')}>
		reset
	</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	button{display:inline-block;width:100px;height:50px;border:1px solid #000;background:#fff;}
</style>