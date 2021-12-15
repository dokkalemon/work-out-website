<template>
    <section class="Home">
        <Jumbo :sliderArray="sliderItem"/>






    </section>
</template>

<script>
import Jumbo from '@/components/Jumbo.vue'


export default {
    name: 'Home',
    components: {
        Jumbo
    },

    data() {
        return {
            sliderItem: [
                {
                    thumb: 'young-girl-playing-dumbbell-exercise-fitness.jpg',
                    title: 'Un nuovo concetto di Fitness',
                    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, delectus doloremque sapiente odio ipsum aperiam minus necessitatibus repellat, cumque fuga quibusdam perferendis suscipit alias veritatis facere earum nam, at explicabo!'
                },
                {
                    thumb: 'close-up-dumbbells-arranged-row-fitness-center.jpg',
                    title: 'Un nuovo concetto di Fitness',
                    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, delectus doloremque sapiente odio ipsum aperiam minus necessitatibus repellat, cumque fuga quibusdam perferendis suscipit alias veritatis facere earum nam, at explicabo!'
                },
                {
                    thumb: 'gym-equipments-fitness-club.jpg',
                    title: 'Un nuovo concetto di Fitness',
                    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, delectus doloremque sapiente odio ipsum aperiam minus necessitatibus repellat, cumque fuga quibusdam perferendis suscipit alias veritatis facere earum nam, at explicabo!'
                },
                
            ]
        }
    }

}
</script>

<style>

</style>