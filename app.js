const app =Vue.createApp({
    data(){
        return{
            name : 'zaali',
            age : 19,
            ageinYear : this.age + 5,
            randomNumber : Math.random().toFixed(1)

        }
    }
})

app.mount('#assignment')