<template>
  <div>
    <span>{{msg + 1}}</span>
    <a :href="url">百度</a>
    <a href="www.mi.com">mi</a>
    <button @click="changeMsg">点击改变msg</button>
    <p v-if="true">seen</p><p v-if="false">no seen</p>
    <div :class="{'div1': true, 'div2': activeClass}">active class</div>
    <p>computed: {{testComputed}}</p>
    <input v-model="input_value"/><p>input_value: {{input_value}}</p>
    <p :style="{color: activeColor, fontSize: fontSize + 'px'}">行内样式</p>
    <div class="div1" v-for="(item, idx) in arrData" :key="idx">
      <span>{{item}}</span>
    </div>
    <div @click="changeMsg">v-if</div>
    <div v-if="showQ">showQ</div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: '123',
      url: 'www.baidu.com',
      arrData: ['q', 'w', 'e'],
      activeClass: true,
      input_value: 'guodegang',
      activeColor: 'red',
      fontSize: 10,
      showQ: false
    }
  },
  methods: {
    changeMsg () {
      this.msg = 888
      this.showQ = true
    }
  },
  computed: {
    testComputed: function () {
      return this.msg + '999'
    }
  }
}
</script>

<style scoped>
  .div1 {
    color: skyblue;
    font-size: 30px;
  }
  .div2 {
    color: red;
  }
</style>
