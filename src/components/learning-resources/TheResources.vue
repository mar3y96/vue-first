<template>
    <base-card>
        <base-button :mode="storedResourceSelected" @click="selectTab('stored-resources')">Stored
            Resources</base-button>
        <base-button :mode="addResourceSelected" @click="selectTab('add-resource')">Add Resource</base-button>
    </base-card>
    <keep-alive>

        <component :is='selectedTab'></component>
    </keep-alive>
</template>

<script>
export default {
    data() {
        return {
            selectedTab: 'stored-resources',
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
    methods: {
        selectTab(selectedTab) {
            this.selectedTab = selectedTab
        },
        addResources(title, description, link) {
            const newResource = {
                title: title,
                description: description,
                link: link,
                id: new Date().toISOString() +'-'+title.toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, '')
            }
            this.storedResources.unshift(newResource)
            this.selectedTab='stored-resources';
        },

        deleteResources(id) {
            // this.storedResources = this.storedResources.filter((res) => res.id != id)
            const index = this.storedResources.findIndex((res)=>res.id==id);
            this.storedResources.splice(index,1);
        }
    },
    computed: {
        storedResourceSelected() {
            if (this.selectedTab == 'stored-resources') {
                return null;
            }
            return 'flat';
        },
        addResourceSelected() {
            if (this.selectedTab == 'add-resource') {
                return null;
            }
            return 'flat';
        }
    },
    provide() {
        return {
            resources: this.storedResources,
            addResources: this.addResources,
            deleteResources: this.deleteResources
        }
    }
}
</script>