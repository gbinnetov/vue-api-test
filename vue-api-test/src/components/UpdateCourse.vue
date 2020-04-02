<template>
  <div class="row">
    <div class="col-md-6 offset-3">
      <form @submit.prevent="onSubmit" class="card mt-5 p-3 border border-dark bg-dark shadow-lg">
        <div class="form-group">
          <label class="text-light">Kurs Adi</label>
          <input v-model="course.title"
            type="text"
            class="bg-dark border-info text-info form-control"
            placeholder="kursun adi..."

          />
        </div>
        <div class="form-group">
          <label class="text-light">Kupon Kodu</label>
          <input v-model="course.couponCode"
            type="text"
            class="bg-dark border-success text-success form-control"
            placeholder="Kupon kodu..."
            
          />
        </div>
        <div class="form-group">
          <label class="text-light">Ucreti</label>
          <input v-model="course.price"
            type="text"
            class="bg-dark border-warning text-warning form-control"
            placeholder="Ucreti..."
          />
        </div>
        <div class="button-container">
          <router-link to="/" tag="button" class="btn btn-outline-danger">Cancel</router-link>
          <button type="submit" class="btn btn-outline-success">Update</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
        course : {
          title : '',
          couponCode : '',
          price : 0.0
        }
    }
  },
  methods : {
    onSubmit(){
      this.$store.dispatch("updateCourse", this.course)
      .then(response =>{
        this.$router.push("/")
      })
    }
  },
  created() {
    this.course = {...this.$route.params.course}
  },
}
</script>






