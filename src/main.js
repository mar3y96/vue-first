import { createApp } from 'vue';
import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import StoredResources from './components/learning-resources/StoredResources.vue';
import AddResource from '@/components/learning-resources/AddResource';
import BaseDialog from '@/components/UI/BaseDialog.vue';

const app=createApp(App)
app.component('base-card',BaseCard)
app.component('base-button',BaseButton)
app.component('stored-resources',StoredResources)
app.component('add-resource',AddResource)
app.component('base-dialog',BaseDialog)
app.mount('#app');

