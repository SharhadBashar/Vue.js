const app = Vue.createApp({
    data() {
        return {
            show: false,
            title: 'some title',
            age: 10,
            x: 0,
            y: 0,
            books: [
                {
                    title: 'name1',
                    author: 'author1'
                },
                {
                    title: 'name2',
                    author: 'author2'
                },
                {
                    title: 'name3',
                    author: 'author3'
                }
            ]
        }
    },
    methods: {
        change_age() {
            this.age++
            this.show = !this.show
        },
        handle_event(e, data) {
            console.log(e.type)
            if (data) {
                console.log(data)
            }
        },
        handle_mousemove (e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    },
    computed: {
        filter_books() {
            return this.books.filter((books) => books.title === 'name1')
        }
    }
})

app.mount('.app')