<template>
    <h1> I m Component </h1>
    <h2>{{ num }}</h2>
    <h2>{{ employeelist }}</h2>

    <button @click="NumberMap()">Add number</button>
    <h2>Displaying Prop {{ msg }}</h2>

    <ul v-for="item in list" :key="item.id" class="item">
        <li>{{ item.id }}</li>
        <li>{{ item.email }}</li>
        <li>{{ item.first_name }}</li>
        <img :src="item.avatar" />

    </ul>
</template>

<script>
import axios from 'axios'
export default {
    name: 'TestingComp',
    data() {
        return {
            num: [2, 3, 7, 5, 8, 4],
            countries: ['India', 'England', 'America', 'Australia', 'China', 'Russia'],
            employeelist: [
                { name: 'test', pass: '23' },
                { name: 'test23', pass: '23' },
                { name: 'laiba2', pass: '2223' }
            ],
            text: 'Country',
            list: [],
        }
    },
    props: {
        msg: String
    },
    async mounted() {

        await axios.get('https://reqres.in/api/users?page=1').then((response) => {
            console.log(response.data.data)
            this.list = response.data.data;
        })

        await axios.post("https://jsonplaceholder.typicode.com/users", {
            name: 'TESTING',
            username: 'TEST',
            email: 'TEST@TEST.COM',
        })
            .then((response) => {
                console.warn("post ", response.data);
            });
    },
    methods: {
        NumberMap() {
            // this.num.sort();

            //sums 
            // this.num = this.num.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

            //index 2 will be deleted
            this.num.splice(2, 1);
    
            // this.employeelist = this.employeelist.filter(function (value) {
            //     return value.name !== 'test';
            // });

            // this.num = this.num.findIndex(item => item === 'test');

            // this.num = this.num.map(item => item * 2);
            // this.countries = this.countries.map((country) => this.text.concat(':', country));
            // this.results = this.employee.map((e) =>e.name ); 

        }
    }
}
</script>
<style>
.item {
    display: flex;
}

.item img {
    width: 50px;
}

.item li {
    display: inline-block;
    width: 196px;
    padding: 3px;
    border: 1px solid black;
}
</style>