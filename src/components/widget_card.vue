<template>
	<div class="widget widget-game">
		<div class="widget-block" :style="{ 'background-image': 'url(' + image_src + ')' }">
			<div class="overlay"></div>
			<div class="widget-item">
			<h4>{{ title }}</h4>
			<span class="meta">{{ due_date }}</span>

			<h5>Status</h5>
			<span class="badge badge-primary">{{ status }}</span>

			<p>{{ description }}</p>
			<div class="progress">
				<div class="progress-bar progress-bar-success" role="progressbar"
				:aria-valuenow="percent" aria-valuemin="0" aria-valuemax="100"
				:style="{ 'width': + percent + '%' }"></div>
			</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		image_src: String,
		title: String,
		status: String,
		description: String,
		percent: String,
		due_date: String
	}
}
</script>
<style scoped>
.progress {
  background-color: #ebedef;
  border-radius: 30px;
  height: 16px;
  -webkit-box-shadow: none;
  box-shadow: none;
  margin-bottom: 25px;
}
.progress-bar {
  background-color: #2575dc;
  line-height: 15px;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 11px;
  font-weight: bold;
  color: #FFF;
}
.progress-bar-success {
  background-color: #6ab961;
}
.badge {
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 400;
  padding: 8px 12px;
  border-radius: 30px;
  color: #fff;
}
.badge-playstation-4,
.badge-ps4,
.badge-primary {
  background-color: #2575dc;
  -webkit-transition: .2s ease-in-out;
  transition: .2s ease-in-out;
}
.widget {
  margin-bottom: 45px;
}
.widget img {
  width: 100%;
}
.widget-game .widget-block {
  min-height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
}
.widget-game .widget-block .overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  height: 100%;
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(37, 37, 37, 0.77)), to(#252525));
  background: linear-gradient(to bottom, rgba(37, 37, 37, 0.77) 0%, #252525 100%);
}

.widget-game .widget-block .widget-item {
  position: relative;
  z-index: 3;
  padding: 35px;
  color: #d0d0d0;
}

.widget-game .widget-block .widget-item h4 {
  font-size: 21px;
  font-weight: 600;
  margin-bottom: 3px;
  color: #fff;
}

.widget-game .widget-block .widget-item h5 {
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 10px;
  margin-top: 30px;
}

.widget-game .widget-block .widget-item .meta {
  font-size: 14px;
}

.widget-game .widget-block .widget-item .badge {
  margin-right: 5px;
}

.widget-game .widget-block .widget-item ul li {
  display: inline-block;
  font-size: 14px;
}

.widget-game .widget-block .widget-item ul li a {
  color: #d0d0d0;
}

.widget-game .widget-block .widget-item ul li a:hover {
  text-decoration: underline;
  color: #fff;
}

.widget-game .widget-block .widget-item p {
  font-size: 14px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.widget-games a {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: block;
  height: 100px;
  width: 100%;
  padding: 25px 20px;
  position: relative;
}

.widget-games a:hover .overlay {
  opacity: .80;
}

.widget-games a .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #232323 0%, #232323 26%, rgba(37, 37, 37, 0.3) 100%);
  -webkit-transition: .2s ease-in-out;
  transition: .2s ease-in-out;
}

.widget-games a .widget-block {
  position: relative;
  z-index: 3;
  display: table;
  width: 100%;
  height: 100%;
}

.widget-games a .widget-block .count {
  display: table-cell;
  vertical-align: middle;
  font-weight: 700;
  float: left;
  font-size: 27px;
  color: rgba(255, 255, 255, 0.5);
}

.widget-games a .widget-block .description {
  display: table-cell;
  vertical-align: middle;
  padding-left: 14px;
  text-align: left;
  width: 95%;
}

.widget-games a .widget-block h5 {
  line-height: 22px;
  color: #fff;
  margin-bottom: 0;
  margin-top: -5px;
}

.widget-games a .widget-block .date {
  font-weight: 500;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
}
</style>
