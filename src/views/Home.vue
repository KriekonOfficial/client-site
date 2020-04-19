<template>
	<div id="Home">
		<ComingSoon/>
		<LandingPage/>
	</div>
</template>

<script>
import ComingSoon from '@/components/coming_soon'
import LandingPage from '@/views/LandingPage.vue'
export default {
	components: {
		ComingSoon,
		LandingPage
	}
}
</script>
