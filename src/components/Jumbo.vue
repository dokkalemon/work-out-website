<template>
    <section class="jumbo">
        <div class="jumbo-scroll">
            <div class="jumbo-item first-slide" style="background-color: yellow"  :class="{active: activeSlide > 0}"></div>
            <div class="jumbo-item second-slide" style="background-color: purple" :class="{active: activeSlide > 1}"></div>
            <div class="jumbo-item third-slide" style="background-color: green" :class="{active: activeSlide > 2}"></div>
            <div class="jumbo-item fourth-slide" style="background-color: blue" :class="{active: activeSlide > 3}"></div>
            
        </div>

        <div class="jumbo-arrow-left" @click="leftSlide">
            <i class="fas fa-caret-square-left"></i>
        </div>
        <div class="jumbo-arrow-right" @click="rightSlide">
            <i class="fas fa-caret-square-right"></i>
        </div>

        <div class="jumbo-nav">
            <div class="nav-line" :class="{active: activeSlide === 1}" @click="activeSlide = 1"></div>
            <div class="nav-line" :class="{active: activeSlide === 2}" @click="activeSlide = 2"></div>
            <div class="nav-line" :class="{active: activeSlide === 3}" @click="activeSlide = 3"></div>
            <div class="nav-line" :class="{active: activeSlide === 4}" @click="activeSlide = 4"></div>
        </div>



    </section>
  
</template>

<script>
export default {
    name: 'Jumbo',

    data() {
        return {
            activeSlide: 1,

            time: setInterval(this.increaseSlide, 10000)
        }
    },

    created() {
    },

    methods: {
        
        slideCondition() {
              if (this.activeSlide > 4) {
                this.activeSlide = 1
            } else if (this.activeSlide < 1) {
                this.activeSlide = 4
            }
        },

         increaseSlide() {
             this.activeSlide++;
           this.slideCondition()
         },

         clearSlide() {
             clearInterval(this.time)
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
            transition: all 1s ease
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
        i {
            
        }
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