import $ from 'jQuery'
import './css/1.css'
import './css/1.less'
import './css/1.scss'

$(function(){
    $('li:odd').css('backgroundColor', 'red');
    $('li:even').css('backgroundColor', 'cyan');
})

class Person {
    static info = 'aaa'
}
console.log(Person.info);

import Vue from 'vue'
import App from './components/app.vue'

const vm = new Vue({
    el: '#app',
    render: h => h(App)
})