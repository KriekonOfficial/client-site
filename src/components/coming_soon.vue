<template>
	<div id="coming_soon">
		<div class="container" style="height:100%">
			<div class="poster-image" :style="{ backgroundImage: 'url(' + require('@/assets/cthulhu_front.png') + ')' }">
				<div class="center-contents">
					<h1 class="margin-20 center-text">Coming Soon</h1>
					<countdownclock date="2022-12-24 08:15:00"></countdownclock>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.center-contents {
	position: absolute;
    top: 42%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    margin: 0;
}
#coming_soon {
	height:  93vh;
}
.videobg {
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
}
.center-text {
	text-align: center;
}
.poster-image {
	width:  100%;
	overflow: hidden;
	background-size:  cover;
	background-position: center;
	height: 100%;
	max-height: 100vh;
	top: 0;
	left: 0;
	position: absolute;
}
</style>

<script>
import countdownclock from '@/components/countdown_clock.vue'
export default {
	components: {
		countdownclock
	}
}
</script>
