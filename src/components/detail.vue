<template>
  <div class="list">
    <form>
      <ul class="formItem" id="menu">
       <li v-for="(val, key) in details">
         <label>{{ key }}</label>:
         <input type="number" v-model='details[key]' disabled>
       </li>
      </ul>
      <div>
        总金额为：{{ isNaN(calc)? 0 : calc }}
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'detail',
    data () {
      return {
        details: {},
        price: []
      }
    },
    computed: {
      calc: function () {
        for(var x in this.details){
          if (this.details[x] && x !== this.SEAT) {
            this.price.push(this.details[x])
          }
        }
        return this.price.reduce(function (a, b) {
          return parseFloat(a) + parseFloat(b)
        },0)
      }
    },
    mounted () {
      let that = this
      var query = new that.AV.Query('Order')
      query.equalTo('objectId', this.$route.params.id)
      query.find().then(function (res) {
        console.log(res)
        that.details = res[0].attributes.detail
        console.log(that.details)
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
