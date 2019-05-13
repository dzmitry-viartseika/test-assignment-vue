<template>
  <div class="home">

    <NewUser></NewUser>
<!--    <EditUser></EditUser>-->
    <Users></Users>


  </div>
</template>

<script>


import NewUser from '../components/NewUser';
import Users from '../components/Users';
// import EditUser from '../components/EditUser'

export default {
  name: 'home',
  components: {
    NewUser,
    Users,
    // EditUser
  }
};
</script>


<style lang="less" scoped>
    .home {
      margin-top: 10px;
    }
</style>
