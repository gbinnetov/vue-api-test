<template>
    
    <div class="row">
        <div class="col-md-8 offset-2 mt-5">
            <table  v-if="courses.length > 0" class="table table-hover table-dark table-striped border border-dark shadow-lg">
                <thead>
                    <th>#id</th>
                    <th>Kursun Adi</th>
                    <th>Kupon Kodu</th>
                    <th>Ucreti</th>
                    <th>Islem</th>
                </thead>
                <tbody>
                   <Course v-for="course in courses"  :key="courses.id" :course="course" />
                </tbody>
            </table>
            <div v-else class="alert alert-primary border-0">
                Bos....
            </div>
            <router-link to="/yeni" tag="button" class="btn-dark btn text-info float-right">Yeni Ekle</router-link>
        </div>
    </div>
</template>

<script>
import Course from './Course.vue'
export default {
    components : {
        Course
    },
    computed : {
        courses(){
            return this.$store.getters.getCourses;
        }
    }
}
</script>

