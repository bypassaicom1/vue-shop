<template>
    <div class="home_container">
        <Navigation class="home_container__navigation"></Navigation>
        <RouterView/>
    </div>
</template>
<script setup>
import Navigation from '@/components/tabar/navigation.vue'
</script>
<style scoped lang="scss">
.home_container{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__navigation{
        width: 87%;
        white-space: nowrap;
    }
}
</style>