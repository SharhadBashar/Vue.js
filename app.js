const app = Vue.createApp({
    data() {
        return {
            'show': false,
            'title': 'some title',
            'age': 10
        }
    },
    methods: {
        change_age() {
            this.age++
            this.show = !this.show
        }
        
    }
})

app.mount('.app')