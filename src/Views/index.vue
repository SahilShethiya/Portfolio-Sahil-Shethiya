<template>
<div class="min-h-screen lg:max-w-screen-xl lg:mx-auto">
    <app-user-details></app-user-details>
    <app-user-experience></app-user-experience>
    <div class="lg:flex">
         <div class="lg:flex lg:flex-col lg:max-w-sm">
            <app-user-skills></app-user-skills>
            <app-user-certifications></app-user-certifications>
        </div>
        <div class="lg:flex lg:flex-col lg:flex-1">
            <app-user-projects></app-user-projects>
             <app-user-blogs></app-user-blogs>
        </div>
    </div>
    <footer>
        <app-user-footer></app-user-footer>
    </footer>
</div>
</template>

<script>
export default {
    name: "Index",
    components: {
        'appUserDetails': () => import('@/components/UserDetails'),
        'appUserExperience': () => import('@/components/UserExperience'),
        'appUserBlogs': () => import('@/components/UserBlogs'),
        'appUserSkills': () => import('@/components/UserSkills'),
        'appUserCertifications': () => import('@/components/UserCertifications'),
        //'appUserProjects': () => import('@/components/UserProjects'),
        'appUserFooter': () => import('@/components/UserFooter'),
    },
    created() {
        window.scrollTo(0, 0);
    },
}
</script>

<style lang="scss" scoped>

</style>
