<template>
	<div id="landing_page">
		<section class="bg-second">
			<div class="container padding-top-20 padding-bottom-20">
				<div class="col-lg-10 mx-auto">
					<h3 class="coming-soon-h3">WHAT IS KRIEKON?</h3>
					<h2 class="coming-soon-h2 padding-bottom-15"><strong>WHERE GAMING MEETS SOCIAL</strong></h2>
					<p class="text-color-center padding-top-10">Kriekon is a New Social Network for Gamers. Kriekon is a 1 Stop Shop for Gamers, where the community can take advantage of the platform we have built. We as Gamers enjoy information, entertainment, and socialization.</p>
					<p class="text-color-center">By Joining Kriekon you will be able to embark hopefully :P on a journey that will lead you too new friends, a plethora of knowledge, join communites, and most of all have fun playing Games! Whether that would be Killing Monsters, 360 No-Scope in a FPS, Miticulating your next move in a Stratgey Game, or playing the ever growing list of simulation games. There is limitless possibilites that can be achieved.</p>
					<p class="text-color-center">We as Gamers, pride ourselves on being connected to our friends, colleagues, our favorite streamer, the meme of the day, the next game coming out, gameplay tips and tricks, connect with developers, the list can go on and on. We hope you join us on our journey to connect the Gaming Industry and bring us all a little closer together :P</p>
				</div>
			</div>
		</section>
		<div class="container padding-top-20">
			<div class="row">
				<div class="col-lg-10 mx-auto">
					<h3 class="coming-soon-h3">WHAT YOU WILL FIND ON KRIEKON</h3>
					<h2 class="coming-soon-h2 padding-bottom-15"><strong>KRIEKON FEATURES</strong></h2>
				</div>
			</div>
			<div class="row padding-top-15">
				<div class="col-sm-4">
					<widgetgame
					image_src="https://i.ytimg.com/vi/ZDzPkTEMBgc/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBxz_jizewRgO2MsMDuM3fwpG27Hg"
					title="Article/Blog and Forum System"
					status="Under Construction"
					description="Allow Users to post Blog's and use inhouse forum engine."
					percent=70></widgetgame>
					<widgetgame
					image_src="https://img.youtube.com/vi/U75Qkzc2tqA/maxresdefault.jpg"
					title="News System"
					status="Planned"
					description="Use of RSS feeds that display content to our users based on their likes when joining the site."
					percent=10></widgetgame>
					<widgetgame
					image_src="https://img.youtube.com/vi/mW4LMCtoIkg/maxresdefault.jpg"
					title="Video System"
					status="Planned"
					description="Creation of File Systems that house's Users Videos over a CDN."
					percent=0></widgetgame>
				</div>
				<div class="col-sm-4">
					<widgetgame
					image_src="https://i.ytimg.com/vi/eyEhO0P2_HU/maxresdefault.jpg"
					title="User System"
					status="Under Construction"
					description="Backbone of the User System, Friend's List, and Messenger."
					percent=40></widgetgame>
					<widgetgame
					image_src="https://img.youtube.com/vi/K5tRSwd-Sc0/maxresdefault.jpg"
					title="Games System"
					status="Partially Designed"
					description="Creation for Developers and Kriekon to create Game Hubs for Games. Essentially you click on the Hub you get all the content related too that Game in the Hub."
					percent=10></widgetgame>
					<widgetgame
					image_src="https://img.youtube.com/vi/BhTkoDVgF6s/maxresdefault.jpg"
					title="Photo System"
					status="Planned"
					description="Creation of File Systems that house's Users Images over a CDN."
					percent=5></widgetgame>
				</div>
				<div class="col-sm-4">
					<widgetgame
					image_src="https://img.youtube.com/vi/xUGRjNzGz3o/maxresdefault.jpg"
					title="User Interaction System"
					status="Planned"
					description="Based on the level of interaction with other users in the community. Levels, points, Tokens, and Reputation are awarded too the User via Content Creation."
					percent=5></widgetgame>
					<widgetgame
					image_src="https://img.youtube.com/vi/D3pYbbA1kfk/maxresdefault.jpg"
					title="Community/Group System"
					status="Partially Designed"
					description="Backbone of Communities System that will allow Users to create their own Communities inside the Kriekon Domain."
					percent=15></widgetgame>
					<widgetgame
					image_src="https://img.youtube.com/vi/kUKrStkG-hE/maxresdefault.jpg"
					title="Stream System"
					status="Researching"
					description="Creation of File Systems that house's Users Streams over a CDN. As well as Integration with the Twitch API"
					percent=5></widgetgame>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.bg-second {
	background-color: #002521;
}
.text-color-center {
	color: #fff;
	text-align: center;
}
.coming-soon-h2 {
	text-align: center;
	border-bottom: 2px solid rgb(77, 175, 175);
}
.coming-soon-h3 {
	text-align: center;
	letter-spacing: 0.3em;
	font-weight: 400;
}
</style>

<script>
import widgetgame from '@/components/widget_card.vue'
export default {
	components: {
		widgetgame
	}
}
</script>
