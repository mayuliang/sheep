<template>
  <div class="hello">
    <h1>账单</h1>
    <form>
      <ul class="formItem" id="menu">
        <li>
          <label>桌号</label> ：
          <input type="number" id="num">
        </li>
        <li v-for="(name, index) in product">
          <label>{{ name.attributes.title }}</label>：
          <input type="number" v-model="price[index]">
        </li>
      </ul>
      <div>
        总金额为：{{ isNaN(calc)? 0 : calc }}
      </div>
      <a class="btn" @click="post">保存</a>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        product: [],
        price: [],
        order: {}
      }
    },
    mounted () {
      let that = this
      var query = new that.AV.Query('Product');
      query.find().then(function (res) {
        console.log(res)
        that.product = res
        console.log(that.product)
      }).catch(function(error) {
        alert(JSON.stringify(error));
      });
    },
    computed: {
      calc: function () {
        return this.price.reduce(function (a, b) {
          return parseFloat(a) + parseFloat(b)
        },0)
      }
    },
    methods: {
      post: function () {
        let menu = this.getId('menu')
        let lis = menu.children
        for(var i = 0; i < lis.length; i++){
          let label = lis[i].childNodes[0].innerText
          if (lis[i].lastChild.value) {
            this.order[label] = lis[i].lastChild.value
          }
        }
        console.log(this.order)
        // 声明类型
        var Order = this.AV.Object.extend('Order')
        // 新建对象
        var order = new Order()
        // 设置名称
        let that = this
        order.set('detail',this.order)
        order.save().then(function (res) {
          console.log(res.id)
          //输入框置空
          that.price = []
          that.getId('num').value = ''
          alert('成功')
        }, function (error) {
          console.error(error);
        });
      },
      getId: function (id) {
        return document.getElementById(id)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
