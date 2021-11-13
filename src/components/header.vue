<template>
    <header class="main_header">
        
        <ul>
            <!-- {{listDoIt}} -->
            <ListItem 
            v-for="OneDoIt of listDoIt"
            v-bind:OneDoIt="OneDoIt"
            />
        </ul>
    </header>
</template>

<script>
import ListItem from "@/components/list-item";

export default {
    props: ['listDoIt'],
    components: {
        ListItem
    }
}

</script>
