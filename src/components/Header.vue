<template>
  <header>
      <div class="header container px-30">
          <div class="header-logo">
              <img src="../assets/logo-workout.svg" alt="">
          </div>

          <div class="header-nav ">
              
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




      </div>
  </header>
</template>

<script>
export default {
    name: 'Header',

    props: {
        headerArray: Array,
    }
}
</script>

<style scoped lang="scss">
@import '../styles/vars.scss';

header {
    background-color: $main-back;
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
            .header-back {
                height: 100%;
                width: 100%;
                position: absolute;
                top: 0;
                display: none;
                img {
                    opacity: 0.029;
                    height: 150%;
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
                padding-top: 80px;
                position: fixed;
                height: 100%;
                width: 100%;
                left: 00%;
                z-index: 1;
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
        }
    }
}


</style>