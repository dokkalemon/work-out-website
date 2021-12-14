<template>
  <header class="full-width">
      <div class="header container px-30">
          <div class="header-logo">
              <img src="../assets/logo-workout.svg" alt="">
          </div>

          <div class="header-nav" :class="{active: headerActive}">
              
              <div class="header-back">
                  <img src="../assets/logo-design.svg" alt="">
              </div>

              <nav class="nav">
                  <ul class="">
                      <!-- V-For prendiamo gli elementi dall'Array in App -->
                      <li  v-for="(item, index) in headerArray" :key="`header${index}`"><router-link :to="item.url" :class="{active: item.activeState}">{{item.label}}</router-link></li>
                  </ul>
              </nav>
          </div>

          <div class="burger" :class="{active: headerActive}" @click="setActiveHeader">
              <div class="burger-line"></div>
              <div class="burger-line"></div>
              <div class="burger-line"></div>
          </div>




      </div>
  </header>
</template>

<script>
export default {
    name: 'Header',

    props: {
        headerArray: Array,
    },

    data() {
        return {
            headerActive: false,
        }
    },

    methods: {
        setActiveHeader() {
            if (this.headerActive === true) {
                this.headerActive = false
            } else if (this.headerActive === false) {
                this.headerActive = true
            }
        }
    }

}
</script>

<style scoped lang="scss">
@import '../styles/vars.scss';

header {
    background-color: $main-back;
    position: fixed;
    .header {
        height: 80px;
        display: flex;
        .header-logo {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                height: 80%;
            }
        }
        .header-nav {
            height: 100%;
            width: 100%;
            transition: $transition;
            background-color: $main-back;
            .header-back {
                height: 100%;
                width: 100%;
                position: absolute;
                top: 0;
                display: none;
                img {
                    opacity: 0.032;
                    height: 100%;
                    width: 100%;                    
                    object-fit: cover;
                    
                }
            }
            .nav {
                height: 100%;
                width: 100%;
                ul {
                    height: 100%;
                    list-style: none;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    li {
                        height: 100%;
                        display: flex;
                        align-items: center;
                        border-bottom: 4px solid $main-back;
                        transition: $transition;
                        cursor: pointer;
                        margin-right: 50px;
                        a {
                            color: $primary-title;
                            text-transform: uppercase;
                            font-size: 16px;
                            font-weight: 900;
                        }
                            .active {
                                color: $primary-color;
                            }
                        &:hover {
                            border-bottom: 4px solid $primary-color;
                        }
                    }

                }
            }
        }
        .burger {
            height: 80px; 
            width: 40px;
            flex-direction: column;
            justify-content: center;
            position: fixed;
            left: 30px;
            display: none;
            z-index: 999;
            cursor: pointer;
            .burger-line {
                height: 1px;
                width: 100%;
                background-color: $primary-title;
                margin-bottom: 8px;
                transition: $transition;
                &:last-child {
                    margin-bottom: 0;
                }
            }
        }   
        .burger.active {
            .burger-line:first-child {
                position: relative;
                top: 9px;
                transform: rotate(225deg)
            }
            .burger-line:nth-child(2) {
                opacity: 0;
                transform: rotate(75deg)
            }
            .burger-line:last-child {
                position: relative;
                top: -9px;
                transform: rotate(-225deg)
            }
        }


    }
}






/* Responsive */
@media screen and (max-width: 720px) {
    header {
        .header {
            
            .header-logo {
                width: 100%;
            }   
            .header-nav {
                margin-top: 80px;
                position: fixed;
                height: 100%;
                width: 100%;
                left: -100%;
                z-index: 1;
                height: calc(100vh - 80px);
                .header-back {
                    padding-top: 80px;
                    display: block;
                    
                }
                .nav {
                    position: relative;
                    z-index: 995;
                    ul {
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        li {
                            border: 0;
                            margin-right: 0px;
                            a {
                                border:0;
                                font-size: 28px;
                            }
                            &:hover {
                                border: 0;
                                a {
                                    color: $primary-color;                                }
                            }
                        }
                    }
                }

        }
        .header-nav.active {
            left: 0
        }
        .burger {
            display: flex;
        }
        }
    }
}


</style>