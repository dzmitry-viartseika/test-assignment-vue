<template>
    <div class="user">
      <div class="profile">
        <img src="../assets/images/logo22.png" alt="" class="profile__img">
        <p class="profile__name">{{user.firstName}} {{user.lastName}}</p>
        <p class="profile__country">{{user.country}}</p>
      </div>
    </div>
</template>

<script>
export default {
  props: ['id'],
  name: "User",
  computed: {
    user() {
      const id = this.id;
      return this.$store.getters.userById(id);
    }
  }
}
</script>

<style scoped lang="less">
  .user {
    width: 380px;
    height: 444px;
    box-shadow: 0 1px 0 #e4e4e4;
    border-radius: 0 0 5px 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -160px;
    margin-left: -222px;
    &__profile {
      margin: 50px auto;
      width: 780px;
      height: 197px;
      border: 1px solid black;
    }
  }


  .profile {
    margin: 20px auto;
    max-width: 300px;
    text-align: center;
    z-index: 0;
    &__name {
      font-weight: bold;
      font-size: 26px;
      color: #474747;
    }
    &__country {
      color: #00caf5;
      font-size: 16px;
    }
  }


</style>
