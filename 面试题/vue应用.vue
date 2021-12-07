<template>
    <input  v-model="keyword"  /> 
    <button @keyup.enter="Search"></button>
    <div>
        <ul v-if="response.total>0" :isLoading="isLoading">
      </ul>
    </div>
   <div v-else>查无结果</div>
    
</template>

<script>

export default {
  name: 'Search',
  components: {
    BasicContainer,
  },
  data() {
    return {
      response: {},
      list:[]
      isLoading:false //loading
      page:1,
      keyword:''
    };
  },
  mounted() {
    await getList(this.keyword,1);

    this.$nextTick(function () {
      window.addEventListener('scroll', this.onScroll)
    })
  },
  methods: {
    Search(){
       await getList(this.keyword,1);
    },
    // 发送搜索列表请求
    async getList(keyword,page) {
      this.isLoading=true
      const response = await this.$http.get('http://douyin.bytedance.com/api/list', {
        params: {
          // 搜索词
          keyword: keyword,
          // 分页个数
          pageSize: 10,
          // 页码
          page: page,
        },
      }).then((res)=>{
           this.response=res.data;
           this.isLoading=false
           this.list=res.data.list;
      });
    },

  },
   // 获取滚动条当前的位置
    getScrollTop () {
      var scrollTop = 0
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop
      } else if (document.body) {
        scrollTop = document.body.scrollTop
      }
      return scrollTop
    },
     // 获取当前可视范围的高度
    getClientHeight () {
      var clientHeight = 0
      if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight)
      } else {
        clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
      }
      return clientHeight
    },
       // 获取文档完整的高度
    getScrollHeight () {
      return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
    },
      // 滚动事件触发下拉加载
    onScroll () {
      if (this.getScrollHeight() - this.getClientHeight() - this.getScrollTop() <= 0) {
        if (this.status === 1) {
          this.status = 0
          // 页码，分页用，默认第一页
          this.page += 1
          // 调用请求函数
          await getList(this.keyword,this.page);
        }
      }
    },
};
</script>
<style></style>