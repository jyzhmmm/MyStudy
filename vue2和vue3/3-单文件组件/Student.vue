<template>
   <div>
    <h2>学生名字：{{studentName}}</h2>
    <h2>学生年龄：{{age}}</h2>
   </div>
</template>

<script>
export default {
    name:'Student',
      data() {
            return {
                studentName: '毛毛',
                age: 18
            }
        }
}
</script>