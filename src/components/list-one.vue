<template>
    <li>
        <span v-bind:class="{hidden: listItem.finishItem}">
            <input type="checkbox" v-on:change="listItem.finishItem = !listItem.finishItem">
            <span>{{listItem.name}}</span>
            <button v-on:click="$emit('deleteItem', listItem.id)">deleter</button>
        </span>
    </li>
</template>

<script>
export default {
    props: {
        listItem: this
    },
    methods: {
        
    }
}

</script>

<style>

</style>

