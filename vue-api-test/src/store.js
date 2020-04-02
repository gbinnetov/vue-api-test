import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';


Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        courses: []
    },
    mutations: {
        initCourses(state, courses) {
            state.courses = courses;
        },
        addCourse(state, course) {
            state.courses.push(course);
        },
        updateCourse(state, course) {
            let index = state.courses.findIndex(c => c.id == course.id);
            if (index > -1) {
               // console.log(course)
               // console.log(state.courses[index])
               // state.courses[index] = course
               state.courses[index].title= course.title;
               state.courses[index].couponCode = course.couponCode;
               state.courses[index].price = course.price;
            }
        },
        deleteCourse(state, courseID) {
            let index = state.courses.findIndex(c => c.id == courseID);
            if (index > -1) {
                state.courses.splice(index, 1)
            }

        }
    },
    actions: {
        initApp(context) {
            axios.get("http://localhost:3000/posts")
                .then(response => {
                    context.commit("initCourses", response.data)
                })
        },
        addCourse(context, course) {

            axios.post("http://localhost:3000/posts", course).then(response => {
                context.commit("addCourse", response.data)
            });

        },
        updateCourse(context, course) {
            axios.put("http://localhost:3000/posts/"+course.id, course).then(response => {
                context.commit("updateCourse", course)
              });
            
        },
        deleteCourse(context, courseID) {
            axios.delete("http://localhost:3000/posts/"+courseID).then(response => {
                context.commit("deleteCourse", courseID)
            });
           
        }
    },
    getters: {
        getCourses(state) {
            return state.courses
        }
    }

});


export default store

