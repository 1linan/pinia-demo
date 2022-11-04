import { defineStore } from "pinia";
//Store 是使用
//参数1：定义一个仓库的唯一id名，Pinia会将所有的容器挂载到根容器；
//参数2：选项对象

/**
 * Store是使用defineStore() 定义的,并且它需要一个唯一名称,作为第一个参数传递
 *  参数1：定义一个仓库的唯一id名,Pinia会将所有的容器挂载到跟容器上
 * 参数2：选项对象
 *      state:存储全局状态
 *      action:相当于组件的methods
 *      getter:相当于组件的computed
 */
export const useMsgStore = defineStore('MsgStore', {
  //state官方推荐使用箭头函数,为了更好的TS类型推导
  state: () => {
    return {
      msgList: [],
      title: '',
      currentSelectList: {},//当前选中列表
    }
  },
  actions: {
    //action相当于methods,支持异步和同步
    async getMsgList() {
      let res = [];
      try {
        res = await new Promise((resolve) => {
          resolve({
            data: [
              { id: 1, title: 'a消息列表', unreadMsg: 0 },
              { id: 2, title: 'b消息列表', unreadMsg: 0 },
              { id: 3, title: 'd消息列表', unreadMsg: 0 },
              { id: 4, title: 'e消息列表', unreadMsg: 0 },
            ]
          })
        })
      } catch (e) {
        console.log(e, 'error')
      }

      res.data.forEach((v, index) => {
        if (index === 0) {
          v.active = true;
        } else {
          v.active = false;
        }
      })

      //修改store定义的变量
      //方法1：
      this.msgList = res.data;
      //还可通过$patch修改state的数据
      //方法2：
      // this.$patch({})或this.$patch(state=>{})
      // this.$patch({
      //   msgList: res.data
      // })
      //方法3：
      // this.msgList.length = 0;
      // this.$patch((state) => {
      //   state.msgList.push(...res.data);
      // })
      /*$path方法的俩种写法都可以修改state的部分字段。
        如果我们要修改的字段是一个数组，
        使用this.$patch({}),我们只能重新赋值一个新的数组，
        使用this.$patch(state=>{}),可以调用数组的方法，在原有数组的基础上修改
      */
    }
  }
})