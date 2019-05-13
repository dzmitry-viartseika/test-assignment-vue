
<template>
  <div id="new" v-if="modalForm2">
    <form class="form">
      <div class="form__title">
        Edit User
      </div>

      <div>
        <p class="form__secondTitle">First Name</p>
        <input class="input" v-model="editedFirstName" type="text">
      </div>
      <p class="form__secondTitle">Last Name</p>
      <input class="input" v-model="editedLastName" type="text">
      <p class="form__secondTitle">Country:</p>
      <select v-model="editedCountry" class="input input__selected">
        <option value="Belarus">Belarus</option>
        <option value="USA" selected>United States</option>
        <option value="Russia">Russia</option>
        <option value="France">France</option>
      </select>
      <div class="submit">
        <button type="submit" class="btn form__btn" @click="onSave">SAVE</button>
      </div>
    </form>
  </div>
</template>

<script>

  import {mapMutations} from 'vuex';
  import {mapGetters} from 'vuex';



  export default {
    name: "EditUser",
    props: ['user','id'],
    data() {
      return {
        editedFirstName: this.user.firstName,
        editedLastName: this.user.lastName,
        editedCountry: this.user.country
      }
    },
    computed: {
      ...mapGetters(['modalForm2']),
    },
    methods: {
      methods: {
        onSave() {
          if(this.editedFirstName !== '' && this.editedLastName !== '' && this.editedCountry !== '') {
            this.$store.dispatch('updateUser', {
              firstName: this.firstName,
              lastName: this.lastName,
              country: this.country,
              id: this.user.id
            })
          }
          this.$store.getters.modalForm2 = false;
        }
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
    border: 1px solid #e4e4e4;
    background-color: #ffffff;
    color: #888888;
    &__selected {
      padding-left: 21px;
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
