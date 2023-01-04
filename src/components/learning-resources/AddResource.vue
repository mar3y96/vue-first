<template>
    <base-dialog @close="confirmError" v-if="inputIsInValid" title="Invalid Input">
    <template #default>
       <p>your inputs is Invalid</p>
    </template>
    <template #actions>
        <base-button @click="confirmError">Okay</base-button>
    </template>
    </base-dialog>  
    <base-card>
        <form @submit.prevent="submitData">
            <div class="form-controll">

                <label for="title">Title</label>
                <input type="text" name="title" id="title" ref="title">
            </div>
            <div class="form-controll">
                <label for="description">Description</label>
                <textarea name="description" rows="3" ref="description" id="description" />
            </div>
            <div class="form-controll">
                <label for="link">Link</label>
                <input type="url" ref="link" name="link" id="link">
            </div>
            <div>
                <base-button type="submit">Add Resource</base-button>
            </div>

        </form>
    </base-card>
</template>

<script>
export default{
    data() {
        return {
            inputIsInValid:false,
        }
    },
    inject:['addResources'],
    methods:{
        submitData(){
            const title = this.$refs.title.value;
            const description = this.$refs.description.value;
            const link = this.$refs.link.value;

            if(title.trim()==''||description.trim()=='' || link.trim()==''){
                this.inputIsInValid=true
                return ;
            }
           this.addResources(title,description,link);
        },
        confirmError(){
            this.inputIsInValid=false
        }

    }
}
</script>

<style scoped>
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
}

.form-control {
    margin: 1rem 0;
}
</style>