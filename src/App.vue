<template>
  <div id="app">
    <header class="page-head">
      <h1>记录开发点滴，刨根问底。</h1>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body{
    background-color: #f4f5f5;
  }
  .page-head{
    padding: 8rem 9.6rem;
    width: 100%;
    color: #fff;
    text-align: center;
    background-color: #159957;
    background-image: linear-gradient(120deg, #155799, #159957);
  }
  .page-head h1{
    margin-bottom: 0.1rem;
    font-size: 3.25rem;
  }
</style>
