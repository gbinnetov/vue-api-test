<template>
  <tr>
    <td class="text-danger">#{{course.id}}</td>
    <td class="text-info">{{course.title}}</td>
    <td class="text-success">{{course.couponCode}}</td>
    <td class="text-warning font-italic">{{course.price}}</td>
    <td>
      <button @click="$store.dispatch('deleteCourse', course.id)" class="btn btn-sm btn-outline-danger">Sil</button>
      <router-link :to="{name : 'duzenle-parametre',params : {course : course}}" tag="button" class="btn btn-sm btn-outline-warning">Duzenleme</router-link>
    </td>
  </tr>
</template>

<script>
export default {
  props : ["course"]
}
</script>