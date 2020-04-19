<template>
  <div id="app">
    <navbar/>
    <div class='site-content'>
        <router-view/>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
export default {
	components: {
		navbar
	}
}
</script>
<style>
@import './assets/css/margin.css';
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
body {
	background-color: rgb(8, 27, 25);
	color: white;
	height: 100%;
	width: 100%;
	margin: 0;
}
.site-content {
  position: relative;
  padding-top: 62px;
}

</style>
