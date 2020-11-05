<script>
	let num = "";
	let computer = "";
	let print = "";
	let my3 = "";
	let print_result = "";

	function ACTION () {
		num = parseInt (Math.random() * 3)
		if (num === 0 ) computer = "ga"
		else if ( num === 1 ) computer = "ba"
		else if ( num === 2 ) computer = "bo"	
	}
	
	let timer = setInterval (ACTION, 200);

	function SEND (my) {
		clearInterval(timer)
		
		my3 = my
		if ( computer === my ) print = "비겼다 ~ㅅ ~"
		else if ( computer === "ga" && my === "ba" ) print = "이겼다 +ㅅ +" 
		else if ( computer === "ga" && my === "bo" ) print = "졌다 ㅜ ㅜ"

		else if ( computer === "ba" && my === "bo" ) print =  "이겼다 +ㅅ +" 
		else if ( computer === "ba" && my === "ga" ) print = "졌다 ㅜ ㅜ"

		else if ( computer === "bo" && my === "ga" ) print = "이겼다 +ㅅ +" 
		else if ( computer === "bo" && my === "ba" ) print = "졌다 ㅜ ㅜ"



		if ( computer === my )  print_result ="user_draw"
		else if ( computer === "ga" && my === "ga") print_result = "user_win" 
		else if ( computer === "ga" && my === "bo" )  print_result = "user_lose"

		else if ( computer === "ba" && my === "bo" ) print_result = "user_win" 
		else if ( computer === "ba" && my === "ga" ) print_result = "user_lose"

		else if ( computer === "bo" && my === "ga" ) print_result = "user_win" 
		else if ( computer === "bo" && my === "ba" ) print_result = "user_lose"
		

	}

	function RESET() {
		clearInterval(timer)
		timer = setInterval(ACTION, 200);
	}

</script>


<div class="body {print_result}">
	<!-- user 기준에 결과값을 따라 스타일을 준다. user_win user_lose user_draw -->
	<section>
		<!-- ga 가위 / ba 바위 /  bo 보 -->
		<!--  selectbx 에 있는 버튼을 클릭과 동시에 랜덤이 멈춘다. -->
		<div class="gababo {computer} computer">
			<div class="inbx">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
		<div class="result">
			vs 
			<!-- 결과값 = 이겼다 user_win / 졌다 user_lose / 비겼다 user_draw -->
			<strong>{print}</strong>
		</div>
	
		<div class="user">
			<!-- selectbx 에 있는 버튼을 클릭할 경우 gababo에 결과값에 클릭한 버튼 값을 전달 한다. -->
			<!-- selectbx 에 있는 버튼을 클릭값과  computer 랜덤 결과값을 매칭하여 result에 최종를 나타낸다. -->
			<div class="selectbx">
				<button on:click={() => SEND('ga')} class:active={my3 === 'ga'} class="btn btn_ga">가위</button>
				<button on:click={() => SEND('ba')} class:active={my3 === 'ba'} class="btn btn_ba">바위</button>
				<button on:click={() => SEND('bo')} class:active={my3 === 'bo'} class="btn btn_bo">보</button>
			</div>
			<div  class="gababo {my3}">
				<div class="inbx">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</div>
	</section>
</div>
<!-- 리셋 버튼을 누르면 computer는 랜덤으로 다시 돌면서 body class를 리무브 한다  -->
<button on:click={() => RESET('reset')} class="btn btn_reset">다시결투!</button>

<style>
*{padding:0;margin:0}

.body{display:flex;align-items:center;justify-content: center;flex-flow:wrap;height:100vh;background:#000;color:#fff}
.btn{display:inline-block;border:1px solid #000;border-radius:5px;background:#fff;color:#000}
section{display:flex;align-items:center;justify-content: center;font-size:50px;padding:30px;}

.inbx{position:relative;width:100px;height:100px;margin:130px 100px 0;border-radius:0 0 12px 12px;border:10px solid #fff;background:#fff}
.inbx span{position:absolute;bottom:100%;border:5px solid #fff;border-radius:12px;background:#fff;box-sizing:border-box;transition: height .2s ease-in}

.gababo span:nth-child(1){top:40px;right:100%;width:60px;height:25px;border-radius:12px 0 0 12px;transform: rotate(30deg);}
.gababo span:nth-child(2){left:-10px;width:24px;height:110px;}
.gababo span:nth-child(3){left:22px;width:24px;height:130px;}
.gababo span:nth-child(4){left:54px;width:24px;height:110px;}
.gababo span:nth-child(5){left:86px;width:24px;height:80px;}

.ga span:nth-child(1){width:60px;}
.ga span:nth-child(2){height:110px;}
.ga span:nth-child(3){height:30px;}
.ga span:nth-child(4){height:24px;}
.ga span:nth-child(5){height:20px;}

.ba span:nth-child(1){width:24px;}
.ba span:nth-child(2){height:24px;}
.ba span:nth-child(3){height:30px;}
.ba span:nth-child(4){height:24px;}
.ba span:nth-child(5){height:20px;}

.bo span:nth-child(1){width:60px;}
.bo span:nth-child(2){height:110px;}
.bo span:nth-child(3){height:130px;}
.bo span:nth-child(4){height:110px;}
.bo span:nth-child(5){height:80px;}

/* 결과 배경처리 */
.user_draw {background:#009688}
.user_win {background:#384698}
.user_lose {background:#7f4358}

.computer{transform: scaleX(-1);}
.result{width:300px;padding-top:100px;text-align:center}
.result strong{display:block;height:100px}
.user{position: relative;}
.user .btn{display:inline-block;width:60px;height:40px;background:#fff;color:#000;font-size:22px;text-align:center;line-height: 40px}
.user .active{background:coral}
.selectbx{position: absolute;top:0;left:100%}
.btn_reset{position:absolute;bottom:10%;left:50%;width:200px;height:60px;font-size:26px;transform:translate(-50%, -50%);}
</style>