<template>
<div class="user-Certifications-component">
    <div class="card">
        <h3 class="font-primary font-medium text-2xl text-gray-2 leading-8">Certifications</h3>
        <div class="md:flex md:justify-around lg:block">
            <div v-for="(certification,index) in data" :key="index" class="mt-6 md:w-56 lg:w-full">
                <div>
                    <img class="rounded-12px md:h-48 md:object-cover lg:h-auto" :src="require(`@/assets/images/${certification.photo}`)" :alt="certification.title">
                </div>
                <p class="font-primary font-semibold text-lg leading-5 text-black-1 pt-5">{{certification.title}}</p>
                <p class="font-primary font-medium text-base leading-5 text-gray-3 pt-2">{{certification.description}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "userSkills",
    mounted(){
        //Fetching details from store state
        this.data = this.$store.state.userCertifications;
    },
    data(){
        return{
            //Certifications
            data : ''
        }
    }
}
</script>

<style>

</style>
