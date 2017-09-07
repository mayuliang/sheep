<template>
  <div class="list">
     <ul>
       <li v-for="lt in list">
         <router-link :to="{name: 'detail', params: {id: lt.id}}">
            <span>{{ lt.attributes.detail['桌号'] }}号桌</span>
         </router-link>
       </li>
     </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: []
      }
    },
    mounted () {
      let that = this
      var query = new that.AV.Query('Order');
      query.find().then(function (res) {
        console.log(res)
        that.list = res
      }).catch(function(error) {
        alert(JSON.stringify(error));
      });
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
