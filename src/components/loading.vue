<template>
  <div class="mask">
    <div class="loading loading1">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "loading"
    }
</script>

<style scoped>
  .mask{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0);
    z-index: 999;
  }
  .loading{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .loading1{
    width: 80px;
    height: 40px;
    margin: 0 auto;
    margin-top:100px;
  }
  .loading1 span{
    display: inline-block;
    width: 8px;
    height: 100%;
    border-radius: 4px;
    background: lightgreen;
    -webkit-animation: load 1s ease infinite;
  }
  @-webkit-keyframes load{
    0%,100%{
      height: 40px;
      background: lightgreen;
    }
    50%{
      height: 70px;
      margin: -15px 0;
      background: lightblue;
    }
  }
  .loading1 span:nth-child(2){
    -webkit-animation-delay:0.2s;
  }
  .loading1 span:nth-child(3){
    -webkit-animation-delay:0.4s;
  }
  .loading1 span:nth-child(4){
    -webkit-animation-delay:0.6s;
  }
  .loading1 span:nth-child(5){
    -webkit-animation-delay:0.8s;
  }
</style>
