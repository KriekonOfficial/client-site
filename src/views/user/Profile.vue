<template>
	<div id="Profile">
		<h5>{{ user.username }}</h5>
	</div>
</template>

<script>
export default {
	data ()
	{
		return {
			user: this.$auth.user
		}
	}
}
</script>
