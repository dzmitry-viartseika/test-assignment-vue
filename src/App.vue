<template>
  <div id="app">
      <header class="header">
    <div class="logo"><router-link  to="/">
    <img class="logo__img" src="../src/assets/images/logo.png" alt="WebFriends"></router-link></div>
        <nav class="menu">

           <router-link tag="a"  to="/" class="menu__link"> USERS  </router-link>


            <router-link tag="a"  to="/admin" class="menu__link">  ADMIN PANEL   </router-link>

        </nav>
      </header>

    <router-view/>
    <footer class="footer">
      <p class="footer__copy">Copyright 2019, WebFriends Team</p>
    </footer>
  </div>
</template>


<style lang="less">

  @font-face {
    font-family: 'Lato-Regular';
    src: url('assets/fonts/Lato-Regular.eot');
    src: url('assets/fonts/Lato-Regular.eot?#iefix') format('embedded-opentype'),
    url('assets/fonts/Lato-Regular.woff2') format('woff2'),
    url('assets/fonts/Lato-Regular.woff') format('woff'),
    url('assets/fonts/Lato-Regular.ttf') format('truetype')
  }
    @font-face {
      font-family: 'goingtodogreatthings';
      src: url('assets/fonts/goingtodogreatthings.ttf') format('truetype')
    }


  @font-face {
    font-family: 'Demo_ConeriaScript';
    src: url('assets/fonts/Demo_ConeriaScript.ttf') format('truetype')
  }


  body {
    padding: 0;
    margin: 0;
    background-color: #f1f1f1;
    font-family: 'Lato-Regular';
    font-size: 16px;
  }

  .header {
    width: 100%;
    height: 94px;
    box-shadow: 0 4px 5px #e4e4e4;
    background-color: #5ec4e2;
    display: flex;
    flex-direction: row;
  }

  .logo {
    width: 225px;
    height: auto;
    background-color: white;
      &__img {
      padding-top: 20px;
      display: block;
      margin: 0 auto;
    }
  }

  .menu {
    display: flex;
    flex-direction: row;
    padding-left: 69px;
      .menu__link {
        width: 123px;
        height: auto;
        background-color: #5ec4e2;
        line-height: 80px;
        text-align: center;
        cursor: pointer;
        border-top: 2px solid #5ec4e2;
        color: white;
        text-decoration: none;

      }
      .menu__link a {

      }
    .menu__link:hover {
      background-color: rgba(255, 255, 255, 0.33);
      border-top: 2px solid white;
    }
  }


  .footer {
    width: 100%;
    height: 62px;
    background-color: #5ec4e2;
    position: fixed;
    bottom: 0;
    left: 0;
    font-weight: 400;
    line-height: 20px;
    color: white;
    &__copy {
      padding-left: 70px;
    }
  };


</style>
