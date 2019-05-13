<template>
    <div id="users" :style="{'font-family': changeFont}">
    <h1 class="users__title">Default Title</h1>
       <div class="flex">

         <div class="table"  v-if="tableShow">

           <div class="title">
             <div class="actions">
               <div class="actions__title">{{title}}</div>
               <div class="actions__add"
               @click="openForm()"
               >Add user</div>
               <div class="actions__delete"
               :style="{'background': bgColor}"
                @click="deleteAll"
               >Delete Items</div>
             </div>
             <div class="sorting">
               <div class="sorting__sort">
                 <p class="sorting__text">Sort By
                   <span class="sorting__up"
                    @click="sortingUp"
                    >&#9650;</span>
                   <span class="sorting__down"
                   @click="sortingDown"
                   >&#9660</span></p>

               </div>
               <div class="sorting__search">
                 <input class="sorting__input" placeholder="Search by Name" type="text"
                 @keyup.enter="filtered" v-model="search"
                 >
               </div>
             </div>
           </div>
           <div class="content">
             <div class="info" v-for="(user,index) in filtered">
                <div class="information">
                 <div class="information__checkbox"><input type="checkbox" v-model="user.selected"></div>
                 <div class="information__img"><router-link class="user__link" :to="'/user/' + user.id"><img src="../assets/images/Layer_63.png" alt=""></router-link></div>
                 <div class="user">
                   <router-link class="user__link" :to="'/user/' + user.id"><p class="user__name">{{user.firstName}} {{user.lastName}} </p></router-link>
                   <router-link class="user__link" :to="'/user/' + user.id"><p class="user__country" :style="{'font-weight': changeFont}">{{user.country}}</p></router-link>
                 </div>
               </div>
               <div class="changing">
                 <div class="btn changing__dublicate"
                 @click="dublicate(index)"
                 >DUBLICATE</div>
                 <div class="btn changing__edit"
                      @click="editForm(user)"
                 >EDIT</div>
                 <div class="btn changing__delete"
                 @click="removeUser(index)"
                 :style="{'background': bgColor}"
                 >DELETE</div>
               </div>

             </div>
           </div>
         </div>
         <div class="settings" v-if="tableShow">
           <div class="settings__title">
             Settings
           </div>
           <div>
             <input class="settings__input" type="text" placeholder="Title of table" v-model="changeTitle">
           </div>
           <p class="settings__secondTitle">Font Family</p>
           <select class="settings__input2" v-model="changeFont">
             <option value="Lato-Regular">Lato</option>
             <option value="goingtodogreatthings" selected>Goingtodogreatthings</option>
             <option value="Demo_ConeriaScript">ConeriaScript</option>
           </select>
              <p class="settings__secondTitle">Accent Color: <input class="settings__color" type="color" v-model="bgColor"></p>
         </div>
       </div>
      <NewUser :userEdit.sync="userEdit" v-if="modalForm"></NewUser>
    </div>

</template>

<script>

import NewUser from '../components/NewUser';
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

    export default {
        name: "Users",
      components: {
        NewUser,
      },
      data() {
          return {
            search: '',
            changeTitle: '',
            bgColor: '#f14f5b',
            changeFont: '',
            userEdit: {
            }
          }
      },
      computed: {
          ...mapGetters(['users','tableShow','addItem','modalForm']),
        title() {
          if( this.changeTitle === '') {
            return this.$store.getters.title;
          } else {
            let tableTitle = this.$store.getters.title;
            tableTitle = this.changeTitle;
            return tableTitle;
          }
        },
        filtered() {
         return  this.$store.getters.users.filter( (user) => {
            return user.firstName.match(this.search)
          })
        }
      },
      methods: {
          ...mapActions(['openForm','editForm','onSearch','sortingUp','sortingDown','deleteAll']),
        removeUser(index) {
          this.$store.getters.users.splice(index, 1);
        },
        dublicate(index) {
          let newAdd = this.$store.getters.users[index];
          this.$store.getters.users.push(newAdd)
        },
        editForm(user) {
          this.userEdit = user
          this.$store.dispatch('openForm');
        }
      }
    }
</script>

<style lang="less" scoped>
  #users {
    margin: 0 205px;
  }

  .users__title {
    text-align: center;
  }


  .flex {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
  }


  .table {
    width: 1048px;
    border-radius: 5px 5px 0 0;
    z-index: 1;
    height: auto;
  }

  .title {
    display: flex;
    flex-direction: row;
    height: 60px;
    border-radius: 5px 5px 0 0;
    background-color: #5ec4e2;
    position: relative;
  }

  .title:before {
    position: absolute;
    content: '';
    bottom: -10px;
    width: 96%;
    height: 1px;
    background-color: #e4e4e4;
    left: 2%;
    right: 5%;
    z-index: 10;
  }

  .actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: white;
    flex: 1 1;
    &__title {
      flex: 1 1 61px;
      padding-left: 22px;
      font-size: 26px;
    }
    &__add {
      flex: 1 1 110px;
      margin-left: 36px;
      height: 32px;
      border-radius: 4px;
      background-color: #1c8898;
      text-align: center;
      text-transform: uppercase;
      line-height: 32px;
      cursor: pointer;
    }
    &__delete {
      flex: 1 1 135px;
      height: 32px;
      border-radius: 4px;
      background-color: #f14f5b;
      text-align: center;
      text-transform: uppercase;
      line-height: 32px;
      margin-left: 30px;
      cursor: pointer;
    }
  }




  .sorting {
    margin-left: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex: 1 1;
    color: white;
    &__sort {
      flex: 1 1 182px;
      border-radius: 4px;
    }
    &__search {
      flex: 1 1 182px;
      border-radius: 4px;
      position: relative;
    }
    &__search:after {
      position: absolute;
      content: '';
      background-image: url(../assets/images/Forma_1_copy_5.png);
      width: 21px;
      height: 21px;
      right: 10%;
      top: 18%;
    }
    &__input {
      height: 28px;
      border-radius: 4px;
      background-color: #ffffff;
      border: none;
      outline: none;
      padding-left: 20px;
      color: #888888;
      margin-left: -30px;
    }
    &__text {
      position: relative;
    }
    &__up {
      position: absolute;
      top: -20%;
      cursor: pointer;

    }
    &__down {
      position: absolute;
      top: 45%;
      cursor: pointer;

    }

  }

  .info, .information, .changing {
    display: flex;
    flex-direction: row;
    background-color: white;
  }

  .info {
    position: relative;
  }

  .information {
    justify-content: flex-start;
    flex: 1 1 50%;
    &__checkbox, &__img {
      flex: 1 1 30px;
      align-self: center;
    }
    &__checkbox {
      padding-left: 29px;
    }
  }

  .information:after {
    position: absolute;
    content: '';
    bottom: 4%;
    width: 96%;
    height: 1px;
    background-color: #e4e4e4;
    left: 2%;
    right: 5%;
  }

  .btn {
    line-height: 32px;
    text-align: center;
    border-radius: 4px;
    height: 32px;
    align-self: center;
    margin: 0 8px;
    cursor: pointer;
  }

  .changing {
    flex: 1 1 50%;
    justify-content: flex-end;
    margin-right: 35px;
    &__dublicate {
      background-color: #9ccc1c;
      flex: 1 1 110px;
      max-width: 110px;

    }
    &__edit {
      background-color: #57d1ad;
      flex: 1 1 100px;
      height: 32px;
      max-width: 100px;
    }
    &__delete {
      flex: 1 1 100px;
      height: 32px;
      max-width: 100px;
      background-color: #f14f5b;
    }
  }

  .user {
    padding-left: 17px;
    flex: 1 1 400px;
    font-weight: bold;
    line-height: 20px;

    &__name {
      color: #262626;
    }
    &__link {
      text-decoration: none;
    }
    &__country {
      color: #0482bd;
      margin-top: -12px;
    }
  }

  .content {
    max-width: 100%;
    background: white;
    height: auto;
    min-height: 248px;
    position: relative;
  }

  .btn {
    color: white;
  }

  .settings {
    width: 380px;
    height: 307px;
    background: white;
    &__title {
      height: 60px;
      border-radius: 5px 5px 0 0;
      background-color: #5ec4e2;
      color: white;
      line-height: 60px;
      font-size: 26px;
      font-weight: 400;
      padding-left: 20px;
    }
    &__input {
      width: 330px;
      height: 48px;
      border-radius: 4px;
      border: 1px solid #e4e4e4;
      background-color: #ffffff;
      display: block;
      margin: 21px auto;
      padding-left: 20px;
      font-size: 16px;
    }
    &__secondTitle {
      padding-left: 20px;
      font-weight: 400;
    }
    &__input2 {
      width: 350px;
      height: 48px;
      border-radius: 4px;
      border: 1px solid #e4e4e4;
      background-color: #ffffff;
      display: block;
      margin: 21px auto;
      padding-left: 20px;
      font-size: 16px;
    }
    &__color {
      margin-left: 23px;
    }
  }


</style>
