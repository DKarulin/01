<template>
    <div>
        EDIT USER {{id}}

    </div>
</template>

<script>
    export default {
        name: "UserEdit",
        computed:{
            id(){
                return this.$route.params.id
            }
        }
    }
</script>

