<template>
    <div>
      <h2> Список пользователей</h2>

        <div v-if="!users.length" class="alert alert-warning"> Загрузка... </div>
        <user-list v-else v-bind:users="users"></user-list>
    </div>
</template>

<script>
import axios from "axios"
import UsersList from "@/components/UsersList.vue"

    export default {
        name: "UsersListPage",
        components:{
            "user-list": UsersList
        },
        data: function () {
           return{
               users:[
                   // {
                   //     "id":0,
                   //     "firstName":"Ivan",
                   //     "lastName": "Ivanov",
                   //     "isActive": false,
                   //     "balance": "1.200.100",
                   //     "email":"fjjkf@mail.ru",
                   //     "phone":"85655665",
                   //     "registered":"Moscow",
                   //
                   //
                   // },
                   // {
                   //     "id":1,
                   //     "firstName":"Petya",
                   //     "lastName": "Ivanov",
                   //     "isActive": true,
                   //     "balance": "10000",
                   //     "email":"hhhhh@mail.ru",
                   //     "phone":"7777777",
                   //     "registered":"Yaroslavl"
                   //
                   // },
                   // {
                   //     "id":2,
                   //     "firstName":"Stepan",
                   //     "lastName": "Ivanov",
                   //     "isActive": true,
                   //     "balance": "200.000",
                   //     "email":"AAAA@yandex.ru",
                   //     "phone":"1111111",
                   //     "registered":"Lubim",
                   //
                   //
                   // },
                   // {
                   //     "id":3,
                   //     "firstName":"Nikola",
                   //     "lastName": "Petrov",
                   //     "isActive": false,
                   //     "balance": "350",
                   //     "email":"UUUUUU@mail.ru",
                   //     "phone":"8910",
                   //     "registered":"Ural",
                   //
                   //
                   // },

               ]
           };
        },
        mounted: function ()  {
            this.loadData()
        },
        methods:{
            loadData (){
               axios.get('http://localhost:3004/users').then(response=>(this.users = response.data))
                   .catch(error=> console.error(error))
            }
        }
    }
</script>

