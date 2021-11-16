Vue.createApp({
    data() {
        return {
            counter: 0,
            title: 'hello vue.js!'
        }
    },
    methods: {
        reversMessage() {
            this.title = this.title.split("").reverse().join("");
                
        }
        
    }
}).mount('#app')