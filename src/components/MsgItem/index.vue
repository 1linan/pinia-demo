<template>
  <div :class="{ message: true, active }">
    <span>{{ msgTitle }}</span>
    <span v-if="unreadMsg > 0" class="unreadMsg">{{ unreadMsg }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  msgTitle: String,
  unreadMsg: {
    type: Number, // 参数类型
    default: 0, //默认值
    required: true, //是否必传
  },
  active: Boolean
})

</script>

<style lang="less" scoped>
.message {
  width: 240px;
  height: 40px;
  display: flex;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
  color: #606266;
  background-color: transparent;
  font-size: 16px;
  border-radius: 4px;
}

.active {
  background-color: #ECF2FE;
  color: #0052D9;
  font-weight: 500;
}

.unreadMsg {
  width: 20px;
  height: 20px;
  background-color: #E34D59;
  border-radius: 50%;
  color: white;
  text-align: center;
  line-height: 20px;
}
</style>