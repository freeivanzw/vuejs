<template>
	<div id="app">
		<HeaderSite 
			v-bind:listDoIt="doIt"
		/>
		<main>tester</main>
	</div>
</template>

<script>
import HeaderSite from '@/components/header';

export default {
	name: 'App',
	data() {
		return {
			doIt: [
				{id: 1, title: 'перший пункт', status: false},
				{id: 2, title: 'другий пункт', status: false},
				{id: 2, title: 'третій пункт', status: false},
			]
		}
	},
	components: {
		HeaderSite
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
 