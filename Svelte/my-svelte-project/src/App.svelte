<script>
	let num = "";
	let computer = "";
	let print = "";
	let my3 = "";

	function ACTION () {
		num = parseInt (Math.random() * 3)
		if (num === 0 ) computer = "가위"
		else if ( num === 1 ) computer = "바위"
		else if ( num === 2 ) computer = "보"	
	}
	
	let timer = setInterval (ACTION, 120);

	function SEND (my) {
		clearInterval(timer)
		
		my3 = my

		if ( computer === my ) print = "비겼다 ~ㅅ ~" 
		else if ( computer === "가위" && my === "바위" ) print = "이겼다 +ㅅ +" 
		else if ( computer === "가위" && my === "보" ) print = "졌다 ㅜ ㅜ"

		else if ( computer === "바위" && my === "가위" ) print = "이겼다 +ㅅ +"
		else if ( computer === "바위" && my === "보" ) print = "졌다 ㅜ ㅜ"

		else if ( computer === "보" && my === "가위" ) print = "이겼다 +ㅅ +"
		else if ( computer === "보" && my === "바위" ) print = "졌다 ㅜ ㅜ"
		
	}

	function RESET() {
		clearInterval(timer)
		timer = setInterval(ACTION, 300);
	}

	
	// 버튼을 눌렀을때 그 값을 보여지게 하고 싶음 bind:value 이걸 어떻게 하는가?
	// 리셋을 누르고 나면 다시 버튼을 눌렀을때 clearInterval(timer)  가 안됨
	// function RESET () {
	// 	if ( RESET ) let timer = setInterval(ACTION, 300);
	// 	else if ( SEND )  clearInterval(timer) 
	// }
	// <button on:click={()} bind:group={scoops} value={1}>가위</button>
</script>

<main>
	<h1>랜덤 가위바위보<br>
		<strong>{computer}</strong>
	</h1>
	<h2>
		결과 <br>
		<strong>{print}</strong>
	</h2>
	<h3>승부다! </h3>

	
	<h1>랜덤 가위바위보<br>
		<strong class="color--{my3}">{my3}</strong>
	</h1>
	<br>
<!--  -->
	<!-- <button>눌러봐라!! {computer}</button> -->
	
	<button on:click={() => SEND('가위')} class:active={my3 === '가위'}>가위</button>
	<button on:click={() => SEND('바위')} class:active={my3 === '바위'}>바위</button>
	<button on:click={() => SEND('보')} class:active={my3 === '보'}>보</button>
	<br><br>
	<button on:click={() => RESET('reset')}>
		다시하기
	</button>
</main>

<style>
	.active {
		background-color: #ff3e00;
		color: white;
	}
	.active:after{
		position: fixed;
		top:50%;left:50%;
		transform: translate(-50%,50%);
		transition: opacity 1s ease-in-out 1s ;
		opacity: 1;
		width:100px;height:100px;
		background:red;
		
		content:'';
		
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 strong{
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
	h2 strong{
		display: block;
		height:40px;
		font-size:30px;
		color:blue;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	button{display:inline-block;width:80px;height:50px;border:1px solid #000;background:#fff;}

	button:active {
		background: red;
	}

	.color--가위 {
		color: blue;
	}
</style>