/*
dispatch(types.SHOW_TIP, dispatch, '你好 世界');
dispatch(types.SHOW_TIP, dispatch, '你好 世界', false);
dispatch(types.HIDE_TIP)
  * 使用方式 2
  import {
    showTip,
    hideTip
  } from '../vuex/actions/dialog'
  export default {
    methods: {
      show () {
        this.showTip('hello world');
      }
    },
    vuex: {
      actions: {
        showTip,
        hideTip
    }
  }
*/
<template>
  <div v-if="tip.visible" class="tip-wrap">
    <div>
      <p>{{ tip.msg }}</p>
    </div>
  </div>
</template>

<script>
export default {
  vuex: {
    getters: {
      tip: ({dialog}) => dialog.tip
    }
  }
}
</script>

<style lang="less">
.tip-wrap {
  z-index: 99999;
  box-sizing: border-box;
  position: fixed;
  left: 50%;
  top: 30%;
  width: 80%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, .7);
  text-align: center;
  color: #fff;
  border-radius: 5/75rem;
  line-height: 2;
  font-size: 28/75rem;
  p {
    display: inline-block;
    line-height: 2;
  }
}
</style>