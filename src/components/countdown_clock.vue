<template>
	<div class="countdown">
		<div class="block">
			<p class="digit">{{ days | two_digits }}</p>
			<p class="text">Days</p>
		</div>
		<div class="block">
			<p class="digit">{{ hours | two_digits }}</p>
			<p class="text">Hours</p>
		</div>
		<div class="block">
			<p class="digit">{{ minutes | two_digits }}</p>
			<p class="text">Minutes</p>
		</div>
		<div class="block">
			<p class="digit">{{ seconds | two_digits }}</p>
			<p class="text">Seconds</p>
		</div>
	</div>
</template>

<script>
export default {
	filters: {
		two_digits: function (value)
		{
			if (value < 0)
			{
				return '00'
			}
			else if (value.toString().length <= 1)
			{
				return `0${value}`
			}
			return value
		}
	},
	created ()
	{
		this.interval = window.setInterval(() =>
		{
			this.now = Math.trunc((new Date()).getTime() / 1000)
		}, 1000)
	},
	props: {
		date: {
			type: String
		}
	},
	data ()
	{
		return {
			now: Math.trunc((new Date()).getTime() / 1000),
			interval: null
		}
	},
	computed: {
		dateInMilliseconds ()
		{
			return Math.trunc(Date.parse(this.date) / 1000)
		},
		seconds ()
		{
			return (this.dateInMilliseconds - this.now) % 60
		},
		minutes ()
		{
			return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60
		},
		hours ()
		{
			return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24
		},
		days ()
		{
			return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24)
		}
	},
	destroyed ()
	{
		window.clearInterval(this.interval)
	}
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:100);
.countdown {
  display: flex;
  justify-content: center;
}

.block {
    display: flex;
    flex-direction: column;
    margin: 20px;
    background-color: #00332e;
    box-shadow: 0px 0px 7px 3px #00e18a;
}

.text {
    color: #1abc9c;
    font-size: 25px;
    font-family: 'Roboto Condensed', serif;
    font-weight: 40;
    margin-bottom: 10px;
    text-align: center;
}

.digit {
    color: #ecf0f1;
    font-size: 80px;
    font-weight: 100;
    font-family: 'Roboto', serif;
    margin: 10px 10px 2px 10px;
    text-align: center;
}

@media screen and (max-width: 628px)
{
	.text {
		font-size: 15px;
	}

	.digit {
		font-size: 40px;
	}
}

@media screen and (max-width: 406px)
{
	.block {
		margin: 10px;
	}
	.text {
		font-size: 12px;
	}

	.digit {
		font-size: 30px;
	}
}
</style>
