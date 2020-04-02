<template>
<div>
    <h1>Trade or View your Portfolio</h1>
    <h6>You may save & load tour Data</h6>
    <h6>Click on 'End Day' to begin a New Day!</h6>
    <p>Tour Fund : {{funds | currency}}</p>
</div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        funds(){
        return this.$store.getters.funds
    }
    }
}
</script>