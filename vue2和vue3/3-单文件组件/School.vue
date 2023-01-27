<template>
        <div class="demo">
    <h2>学校名字：{{schoolName}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="showName">显示毛毛</button>
        </div>
</template>

<script>
export default {
    name:'School',
       data() {
            return {
                schoolName: '白云',
                address: '广州'
            }
        },
        methods: {
            showName(){
                alert('毛毛')
            }
        },
}
</script>

<style>
 .demo{
    background-color: skyblue;
 }
</style>