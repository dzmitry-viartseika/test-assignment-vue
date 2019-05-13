<template>
  <div class="home">

    <NewUser></NewUser>
    <Users></Users>


  </div>
</template>

<script>


import NewUser from '../components/NewUser';
import Users from '../components/Users';


export default {
  name: 'home',
  components: {
    NewUser,
    Users,
  }
};
</script>


<style lang="less" scoped>
    .home {
      margin-top: 10px;
    }
</style>
