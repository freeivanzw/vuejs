<template>
	<ul>
		<listOne
			v-for="listItem in myListData"
			v-bind:listItem="listItem"
			v-bind:key="listItem"
		/>
	</ul>
</template>

<script>
import listOne from "@/components/list-one";

export default {
	data() {
		return {
			myListData: [
				{name:'ivan', finishItem: false},
				{name:'ruslan', finishItem: false}
			]
		}
	},
	name: 'App',
	components: {
		listOne
	}
}
</script>

<style>
#app {
	font-family: Arial, sans-serif;

	color: #2c3e50;
	margin-top: 60px;
}

.hidden {
	opacity: 0.5;
}

</style>
