<template>
  <div class="home">
    <Users></Users>
  </div>
</template>

<script>



import Users from '../components/Users';


export default {
  name: 'home',
  components: {
    Users,
  }
};
</script>


<style lang="less" scoped>
    .home {
      margin-top: 10px;
    }
</style>
