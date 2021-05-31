<template>
	<div id="coming_soon">
		<video-background class="videobg"
		:src="require(`@/assets/cthulhu_front.mp4`)"
		:poster="require(`@/assets/cthulhu_front.png`)"
		>
			<div class="container" style="height:100%">
				<div class="center-contents">
					<h1 class="margin-20 center-text">Coming Soon</h1>
					<countdownclock date="2021-12-24 08:15:00"></countdownclock>
				</div>
			</div>
		</video-background>
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
#coming_soon {
	height:  100vh;
}
.videobg {
	width: 100%;
	height: 100%;
}
.center-text {
	text-align: center;
}
</style>

<script>
import countdownclock from '@/components/countdown_clock.vue'
import VideoBackground from 'vue-responsive-video-background-player'
export default {
	components: {
		VideoBackground,
		countdownclock
	}
}
</script>
