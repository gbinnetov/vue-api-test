import Vue from 'vue'
import VueRouter from 'vue-router'
import Courses from './components/ListCourse/Courses.vue'
import NewCourse from './components/NewCourse.vue'
import UpdateCourse from './components/UpdateCourse'

Vue.use(VueRouter);


export const router = new VueRouter({
    routes : [
        {path : "/", component : Courses },
        {path : "/yeni", component : NewCourse},
        {path : "/duzenle", component : UpdateCourse, name : "duzenle-parametre"},
        {path : "*", redirect: "/"}
    ],
    mode: "history"
})
