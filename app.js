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
        inputChange(e) {
            this.inputValue = e.target.value
        },
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
        }
    }
}).mount('#app')