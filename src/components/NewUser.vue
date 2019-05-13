<template>
    <div id="new" v-if="modalForm">
      <form class="form" @submit.prevent="onAddUser">
        <div class="form__title" v-if="addItem">
          Add User
        </div>
        <div class="form__title" v-else>
          Edit User
        </div>
        <div>
          <p class="form__secondTitle">First Name</p>
          <input class="input input__firstname" required v-model="user.firstName" type="text">
        </div>
        <p class="form__secondTitle">Last Name</p>
        <input class="input input__lastname" required v-model="user.lastName" type="text">
        <p class="form__secondTitle">Country:</p>
        <select required v-model="user.country" class="input input__selected">
          <option value="Belarus">Belarus</option>
          <option value="USA" selected>United States</option>
          <option value="Russia">Russia</option>
          <option value="France">France</option>
        </select>
        <div class="submit">
          <button type="submit" class="btn form__btn" v-if="addItem">ADD</button>
          <button type="submit" class="btn form__btn" v-else @click="updateUser()">SAVE</button>

        </div>
      </form>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapGetters } from 'vuex';


function getNewUser() {
  return {
    id: '',
    firstName: '',
    lastName: '',
    country: '',
    selected: false,
  };
}


    export default {
        name: "NewUser",
      data() {
        return {
          user: getNewUser()
        }
      },
      computed: mapGetters(['users','modalForm','addItem']),
      methods: {
        ...mapMutations(['addUser','openForm','updateUser']),
        onAddUser() {
          this.user.id = this.$store.getters.users.length + 1;
          this.addUser(this.user);
          this.user = getNewUser();
        }
      }
    }
</script>

<style lang="less" scoped>

  #new {
    width: 380px;
    height: 444px;
    box-shadow: 0 1px 0 #e4e4e4;
    border-radius: 0 0 5px 5px;
    background-color: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -160px;
    margin-left: -222px;
  }


  .input  {
    width: 330px;
    margin-left: 20px;
    height: 48px;
    border-radius: 4px;
    padding-left: 10px;
    border: 1px solid #e4e4e4;
    background-color: #ffffff;
    color: #888888;
    font-size: 18px;
    &__selected {
      padding-left: 10px;
      width: 340px;
    }
  }


  .form {
    &__title {
      height: 60px;
      border-radius: 5px 5px 0 0;
      background-color: #5ec4e2;
      font-size: 26px;
      font-weight: 400;
      line-height: 50px;
      padding-left: 20px;
      color: white;
    }
    &__secondTitle {
      padding-left: 20px;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
    }
    &__btn {
      width: 108px;
      height: 46px;
      border-radius: 4px;
      background-color: #5ec4e2;
      position: absolute;
      bottom: 10px;
      right: 30px;
      border: none;
      outline: none;
      color: white;
    }
  }


</style>
