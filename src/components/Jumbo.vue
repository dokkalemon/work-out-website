<template>
    <section class="jumbo">
        <div class="jumbo-cover">
            <img src="../assets/young-girl-playing-dumbbell-exercise-fitness.jpg" alt="">
        </div>




    </section>
  
</template>

<script>
export default {
    name: 'Jumbo',

}
</script>

<style scoped lang="scss">
@import '../styles/vars.scss';

.jumbo {
    height: 100vh;
    width: 100%;
    .jumbo-cover {
        height: 100%;
        width: 100%;
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: top;
        }
    }
}


</style>