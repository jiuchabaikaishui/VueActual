<template>
    <!-- 这里用于定义Vue组件的模板内容 -->
    <div>
        <h1>我是 VUE 组件</h1>
        <p>姓名：{{name}}，年龄：{{age}}</p>
    </div>
</template>

<script>
    // 这里用于定义Vue组件的业务逻辑
    export default {
        data: function() {
            return {
                name: '张三',
                age: 18
            }
        },
        methods: {}
    }
</script>


<style scoped>
/* 这里用于定义组件的样式 */
h1 {
    color: red; 
}
p {
    color: cyan;
}
</style>