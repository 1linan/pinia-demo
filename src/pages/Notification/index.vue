<template>
  <div class="msg">
    <div class="left">
      <div v-for="(v, index) in msgList" :key="index">
        <MsgItem
          :msgTitle="v.title"
          :unreadMsg="v.unreadMsg"
          :active="v.active"
          @click="setBackground(v.id)"
          />
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script setup>
import MsgItem from '@/components/MsgItem/index.vue';
//引入storeToRefs
import { storeToRefs } from 'pinia';
//引入store模块
import { useMsgStore } from '@/store/module/msg.js';

//实例化store
const msgStore = useMsgStore();
/**
 * 一旦store被实例化后，就可以直接在store上访问state,getters,actions中定义的任何属性
 * store是一个用reactive包裹的对象,这意味着不需要在getter之后写.value
 * 但是,就像setup中的props一样,我们不能对其进行解构
 * 为了从store中提取属性的同时,保持其响应式,
 *   需要使用storeToRefs()函数将state里面的数据解构出来,
 *   它将为任何响应式属性创建refs。
 */
const { msgList } = storeToRefs(msgStore);

//storeToRefs解构以后数据变为ref类型,访问的时候需要.value
console.log(msgList.value,'---')
// 但跳过任何 action 或 非响应式（不是 ref/reactive）的属性

//调用getMsgList请求msgList
//使用store实例直接读取action属性
msgStore.getMsgList();


function setBackground(id) {
  const dataList = JSON.parse(JSON.stringify(msgList.value));
  dataList.forEach((v) => {
    if (v.id===id) {
      v.active = true;
    } else {
      v.active = false;
    }
  })
  //修改store里的msgList属性值
  /*$path方法的俩种写法都可以修改state的部分字段。
      如果我们要修改的字段是一个数组，
      使用this.$patch({}),我们只能重新赋值一个新的数组，
      使用this.$patch(state=>{}),可以调用数组的方法，在原有数组的基础上修改
  */
  msgStore.$patch({
    msgList: dataList
  });
}

</script>

<style lang="less" scoped>
.msg {
  width: 100%;
  display: flex;

  .left {
    width: 300px;
  }

  .right {
    flex: 1;
  }
}
</style>
