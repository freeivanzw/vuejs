Vue.createApp({
    data() {
        return {
            title: 'список чогось там',
            placeholdertext: 'введіть пункт списку',
            inputValue: '',
            listTasks: [],
        }
    },
    methods: {
        newListItem() {
            if (this.inputValue != '') {
                this.listTasks.push(this.inputValue);
                this.inputValue = ''
            }
        },
        toUp(text) {
            return text.toUpperCase();
        },
        delThisItem(idx) {
            this.listTasks.splice(idx, 1)
        },
        
    },
    computed: {
        doubleList() {
            return this.listTasks.length * 2 
        }
    },
    watch: {
        inputValue(value) {
            console.log(value)
        }
    }
}).mount('#app')