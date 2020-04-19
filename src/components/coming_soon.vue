<template>
	<div id="coming_soon">
		<videobg class="videobg" :sources="[require(`@/assets/cthulhu_front.mp4`)]" :img="require(`@/assets/cthulhu_front.png`)">
			<div class="container" style="height:100%">
				<div class="center-contents">
					<h1 class="margin-20 center-text">Coming Soon</h1>
					<countdownclock date="2020-12-24 08:15:00"></countdownclock>
				</div>
			</div>
		</videobg>
	</div>
</template>

<style scoped>
.center-contents {
	position: absolute;
    top: 37%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    margin: 0;
}
.videobg {
	width: 100%;
}
.center-text {
	text-align: center;
}
</style>

<script>
import countdownclock from '@/components/countdown_clock.vue'
import videobg from 'vue-videobg'
export default {
	components: {
		videobg,
		countdownclock
	}
}
</script>
