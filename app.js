const app = Vue.createApp({
    data() {
        return {
            name: 'Sai',
            age: 21,
            galaxyImage: 'https://media.istockphoto.com/id/481229372/photo/spiral-galaxy-illustration-of-milky-way.jpg?s=612x612&w=0&k=20&c=O-OKRJWM_XhGv48z6OhOj_tKBwEaDsvhYKguEN1yuJM=',
        };
    },
    methods: {
        agePlusFiveYears() {
            return this.age + 5;
        },

        randomNumberBetweenZeroAndOne() {
            if (Math.random() < 0.5)
                return 0;
            else
                return 1;
        }
    }
});


app.mount('#assignment');