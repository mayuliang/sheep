<template>
  <div id="app">
     <router-view></router-view>
     <div class="bottom">
       <router-link to="/home">home</router-link>
       <router-link to="/list">list</router-link>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  padding-bottom: 50px;
}
h1{
  margin: 20px;
  font-size: 1.5rem;
}
ul{
  list-style: none;
}
.formItem{
  padding: 0;
  margin: 0;
}
.formItem li{
  margin-bottom: 10px;
}
.formItem li label{
  width: 20%;
  text-align: left;
  display: inline-block;
  white-space:nowrap;
}
.formItem li input{
  border-radius:4px;
  border:1px solid #eee;
  width: 60%;
  height: 34px;
  line-height: 32px;
  font-size: 1rem;
}
.btn{
  width: 200px;
  display: inline-block;
  text-align: center;
  border: 1px solid rgba(112, 153, 66, 0.53);
  line-height: 32px;
  height: 34px;
  border-radius: 22px;
  cursor: pointer;
  font-size: 0.8rem;
  margin: 10px;
}
a{
  color: #333;
  text-decoration: none;
}
.bottom{
  position: fixed;
  bottom: 0;
  left: 0;
  text-align: center;
  width: 100%;
  background-color: #999;
  height: 40px;
  line-height: 40px;
}
</style>
