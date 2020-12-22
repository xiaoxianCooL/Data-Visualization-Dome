<!-- 首页 -->
<template>
  <div class="map">
    <div class="map-page-con">
      <div class="header">
          <!-- 中间logo标题 -->
        <div class="header-title-con">
          <img
            class="logo"
            src="../assets/image/sharing-logo.png"
            alt=""
            srcset=""
          />
          <span class="titleText">测试网服务站大数据监控平台test5</span>
        </div>
        <!-- 左侧区域 -->
        <div class="header-data-con"></div>
        <!-- 右侧时间 -->
        <div class="header-time-con">
          <div class="header-item">
            <!-- <span ></span> -->
            <img
              class="header-time-logo"
              src="../assets/image/图标-时间.png"
              alt=""
              srcset=""
            />
            <span class="header-span-text">晴3℃</span>
          </div>
          <div class="header-item">
            <img
              class="header-time-logo"
              src="../assets/image/图标-时间.png"
              alt=""
              srcset=""
            />
            <span class="header-span-text">11:29:48</span>
          </div>
        </div>
      </div>
      <div class="main">
          <div class="main-item-left">
              <div class="main-box main-item-left-top"></div>
              <div class="main-box main-item-left-center"></div>
              <div class="main-box main-item-left-bottom"></div> 
          </div>
          <div class="main-item-center"></div>
          <div class="main-item-right"></div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style scoped lang="less">
.map {
  width: 100%;
  height: 100%;
}
.map-page-con {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("../assets/image/大背景.jpg") no-repeat;
  background-size: 100% 100%;
  //头部区域样式
  .header {
    width: 100%;
    height: 212px;
    background: url("../assets/image/顶部.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    .header-title-con {
      line-height: 116px;
      vertical-align: middle; //把此元素放置在父元素的中部。
      .logo {
        width: auto;
        height: 36px;
        vertical-align: middle;
      }
      .titleText {
        vertical-align: middle;
        margin-left: 20px;
        font-size: 36px;
        color: #fff;
        font-weight: 700;
      }
    }
    //右侧时间
    .header-time-con {
        position: absolute;
        top: 45px;
        right: 0px;
      line-height: 22px;
      .header-item {
        display: inline-block;
        margin: 0 20px;
        text-align: left;
        .header-time-logo {
          height: auto;
          width: 22px;
                  vertical-align: middle;
        }
        .header-span-text{
            display: inline-block;
            height: 100%;
            text-align: 28px;
            color: #fff;
                    vertical-align: middle;
        }
      }
    }
  }
  .main-box{
      padding: 12px;
    margin-bottom: 10px;
    background-size: 100% 100%;
    color: #b8cdd9;
  }
  //数据区域样式
  .main{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 120px 20px 20px;
    font-size: 0;
    // display: flex;
    .main-item-left{
        display: inline-block;
        width: 556px;
        height: 100%;
        margin-right: 20px;
        background-color: cornflowerblue;
        .main-item-left-top{
            background: url("../assets/image/小框.png") no-repeat;
            height: 200px;
        }
    }
    .main-item-center{
        display: inline-block;
        width: 728px;
        height: 100%;
        margin-right: 20px;
        background-color: chartreuse;
    }
    .main-item-right{
        display: inline-block;
        width: 556px;
        height: 100%;
        background-color: gold;
    }
  }
}

</style>