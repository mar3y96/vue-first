<template>
    <TheHeader title="Remember Me" />
    <stored-resources :resources="storedResources"></stored-resources>

</template>

<script>
import StoredResources from './components/learning-resources/StoredResources.vue';
import TheHeader from './components/layouts/TheHeader.vue';
export default {
    data() {
        return {
            storedResources: [
                {
                    id: 'vue',
                    title: 'learn vue',
                    description: 'this resource to learn vue',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google',
                    title: 'learn google',
                    description: 'this resource to learn google',
                    link: 'https://google.com'
                },
            ]
        }
    },
    components: {
        StoredResources,
        TheHeader
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
    box-sizing: border-box;
}

html {
    font-family: 'Roboto', sans-serif;
}

body {
    margin: 0;
}
</style>
