<template>
    <section class="jumbo" >
        <div class="jumbo-scroll">
            <!-- Slide -->
            <div class="jumbo-item" v-for="(item, index) in sliderArray" :key="`slider${index}`" :class="{active: activeSlide > index}">
                <!-- img -->
                <div class="slide-cover">
                    <img :src="require(`../assets/${item.thumb}`)" alt="">
                </div>

                <!-- Info -->
                <div class="slide-decoration" :class="{active: activeSlide === (index + 1)}"></div>
                <div class="slide-info-container container px-30">
                    <div class="slide-info">
                        <div class="slide-title" :class="{active: activeSlide === (index + 1)}">
                            <h2>{{item.title}}</h2>
                        </div>
                        <div class="slide-text" :class="{active: activeSlide === (index + 1)}">
                            <p>{{item.text}}</p>
                        </div>

                        <div class="slide-button" :class="{active: activeSlide === (index + 1)}">
                            <button class="primary-button">SCOPRI DI PIÙ</button>
                            <button class="secondary-button">CONTATTACI</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- Arrow -->
        <div class="jumbo-arrow-left" @click="leftSlide">
            <i class="fas fa-caret-square-left"></i>
        </div>
        <div class="jumbo-arrow-right" @click="rightSlide">
            <i class="fas fa-caret-square-right"></i>
        </div>

        <!-- Nav -->
        <div class="jumbo-nav">
            <div class="nav-line" :class="{active: activeSlide === (index + 1)}" @click="activeSlide = (index + 1)" v-for="(item, index) in sliderArray" :key="`nav${index}`"></div>
            
        </div>



    </section>
  
</template>

<script>
export default {
    name: 'Jumbo',

    props: {
        sliderArray: Array
    },

    data() {
        return {
            activeSlide: 1,
            time: setInterval(this.increaseSlide, 10000),
        }
    },

    created() {
    },

    methods: {
        
        slideCondition() {
              if (this.activeSlide > this.sliderArray.length) {
                this.activeSlide = 1
            } else if (this.activeSlide < 1) {
                this.activeSlide = 4
            }
        },

         increaseSlide() {
             this.activeSlide++;
           this.slideCondition()
         },

         leftSlide() {
             this.activeSlide--;
             this.slideCondition();
         }, 
         rightSlide() {
             this.activeSlide++;
             this.slideCondition();
         }

    }


}
</script>

<style scoped lang="scss">
@import '../styles/vars.scss';

.jumbo {
    height: 100vh;
    width: 100%;
    position: relative;
    .jumbo-scroll {
        width: 100%;
        height: 100%;
        background-color:red;
        overflow: hidden;
        position: relative;
        z-index: 1;
        .jumbo-item {
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 1;
            left: 100%;
            overflow: hidden;
            transition: all 1s ease;
            .slide-cover {
                height: 100%;
                width: 100%;
                position: absolute;
                z-index: 1;
                img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }
            }
            .slide-decoration {
                height: 155%;
                width: 80%;
                background-color: rgba(0, 0, 0, 0.85);
                border: 5px solid $primary-color;
                position: absolute;
                left: -2000px;
                /* left: -500px; */
                z-index: 1;
                transform: rotate(70deg);
                transition: all 1s 0.5s ease;
            }
            .slide-decoration.active {
                left: -500px;
            }

            .slide-info-container {
                height: 100%;
                padding-top: 40px;
                position: relative;
                z-index: 5;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                
                .slide-info {
                    width: 100%;
                   .slide-title {
                       width: 45%;
                       h2 {
                           font-size: 60px;
                           color: $primary-title;
                       }
                       position: relative;
                       left: -200px;
                        transition: all 1s 1.1s ease;
                        opacity: 0;
                   }
                   .slide-title.active {
                       opacity: 1;
                       left: 0;
                   }
                   .slide-text {
                       width: 45%;
                       margin-top: 15px;
                       margin-bottom: 30px;
                       p {
                           font-size: 20px;
                           line-height: 35px;
                       }
                       position: relative;
                       left: -200px;
                        transition: all 1s 1.3s ease;
                        opacity: 0;
                   }
                   .slide-text.active {
                       opacity: 1;
                       left: 0;
                   }
                   .slide-button {
                       button {
                           margin-right: 20px;
                           &:last-child {
                               margin-right: 0
                           }
                       }
                           position: relative;
                            left: -200px;
                            transition: all 1s 1.5s ease;
                            opacity: 0;
                   }
                   .slide-button.active {
                       opacity: 1;
                       left: 0;
                       
                   }
                }
            }
            
        }

        .active {
            left: 0
        }

    }
    .jumbo-arrow-left,
    .jumbo-arrow-right {
        height: 100%;
        width: 7%;
        position: absolute;
        z-index: 10;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        .svg-inline--fa.fa-w-14 {
            font-size: 25px;
            color: white;
            opacity: 0.5;
            cursor: pointer;
            transition: $transition;
            &:hover {
                opacity: 1
            } 
        }
    }
    .jumbo-arrow-right {
        right: 0;
    }
    .jumbo-nav {
        height: 50px;
        width: 100%;
        position: absolute;
        bottom: 0;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        .nav-line {
            height: 3px;
            width: 50px;
            background-color: white;
            margin-right: 5px;
            cursor: pointer;
            opacity: 0.5;
            transition: $transition;
            &:hover {
                opacity: 1;
            }
            &:last-child {
                margin-right: 0;
            }
        }
        .active {
            opacity: 1
        }
    }
}


</style>