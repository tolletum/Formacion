<template>
    <div>
        <h3>The new component</h3>
        <button @click="counter++">Increase</button>
        <p>{{ counter }}</p>
    </div>
</template>

<script>
export default {
    data: () => ({
        counter: 0,
    }),
    destroyed: () => {
        console.log('Destroyed!');
    },
    deactivated: () => {
        console.log('Deactivated!');
    },
    activated: () => {
        console.log('Activated!');
    }
    
}
</script>

<style>

</style>