const constraints = {
    username: {
        presence: {
            message: "is required"
        },
    },
    email: {
        presence: true,
        email: true
    },
    password: {
        presence: true,
        length: {
            minimum : 8,
            message: "must be at least 8 length"
        },        
    },
    language: {
        presence: true
    }
}
const app = Vue.createApp({
    data(){
        return {
            nickname: "Boat",
            name: "Prakit Wongnuntananon",
            career: "FrontEnd Developer",
            followers: "2M",
            following: "01",
            groups: "12K",
            img: './images/me.png',
            username: null,
            email: null,
            password: null,
            language: null,
            errors: null
        }
    },
    methods: {
        handleSubmit(event){
            event.preventDefault();
            this.errors = validate({
                            username: this.username,
                            email: this.email,
                            password: this.password,
                            language: this.language,
                        },constraints)
            if(!this.errors) alert("Your profile is updated successfully")
        }
    }
})

var mountedApp = app.mount('#app');