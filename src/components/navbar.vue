<template>
	<header id="header">
	<div class="navbar-backdrop container">
		<div class="navbar">
			<div class="navbar-center">
				<router-link to='/' class="logo">
					<div>
						<img class='logo-img' src="@/assets/Kriekon_logo.png" alt="Kriekon - Social Network for Gamers" ref="logo"/>
						<img class="logo-img2" src="@/assets/Kriekon-word.png" alt="Kriekon" />
					</div>
				</router-link>
			</div>
		</div>
	</div>
	</header>
</template>

<script>
export default {
	data ()
	{
		return {
			user: this.$auth.user,
			launched: true
		}
	},
	methods: {
		logout ()
		{
			this.$auth.logout()
		}
	}
}
</script>

<style scoped>
#header {
	width: 100%;
	height: 62px;
	background: rgb(0, 51, 46);
	position: fixed;
	top: 0;
	z-index: 999;
	border-bottom: 2px solid black;
}
#header .navbar {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	border: 0;
	padding: 0;
	border-radius: 0;
	margin: 0;
	height: 62px;
}

#header .navbar .navbar-left {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	margin-right: auto;
}

#header .navbar .navbar-right {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	margin-left: auto;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
}

#header .navbar .navbar-center {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	margin: 0 auto;
}

#header .logo {
	height: 62px;
	position: relative;
}
.logo-img {
	width:65px;
}
.logo-img2 {
	width: 101px;
}
</style>
