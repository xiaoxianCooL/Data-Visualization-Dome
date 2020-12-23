<!-- 首页 -->
<template>
  <div class="map">
    <div
      class="map-page-con"
      id="map-page-con"
      :style="{ transform: `scale(${pageScale})` }"
    >
      <div class="header">
        <!-- 中间logo标题 -->
        <div class="header-title-con">
          <img
            class="logo"
            src="../assets/image/sharing-logo.png"
            alt=""
            srcset=""
          />
          <span class="titleText">测试网服务站大数据监控平台</span>
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
          <div class="main-box main-item-left-min"></div>
          <div class="main-box main-item-left-middle"></div>
          <div class="main-box main-item-left-max"></div>
        </div>
        <div class="main-item-center">
          <div class="main-item-center-top">
            <div class="main-item-center-top-total">总门店数量</div>
            <div class="">
              <FlipClock
                :defaultNum="deviceUnlineNum"
                :changeNum="deviceUnlineChangeNum"
              />
            </div>
          </div>
          <div class="main-item-center-map"></div>
          <div class="main-item-center-botton"></div>
        </div>
        <div class="main-item-right">
          <div class="main-box main-item-right-min"></div>
          <div class="main-box main-item-right-middle"></div>
          <div class="main-box main-item-right-max"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import FlipClock from '../components/flipClock'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    // FlipClock
  },
  data() {
    //这里存放数据
    return {
      pageScale: 1, //默认比例1
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleResize: function () {
      const screenDom = document.getElementById("map-page-con");
      if (!screenDom) {
        return;
      }
      const parentDom = screenDom.parentNode;
      const conW = parentDom.offsetWidth;
      const conH = parentDom.offsetHeight;

      const screenW = screenDom.offsetWidth;
      const screenH = screenDom.offsetHeight;

      const scaleW = conW / screenW;
      const scaleH = conH / screenH;
      this.pageScale = Math.min(scaleW, scaleH);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    let _this = this;
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  }, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style scoped lang="less">
.map {
  position: relative;
  width: 100%;
  height: 100%;
  background: url("../assets/image/大背景.jpg") no-repeat;
  background-size: 100% 100%;
}
.map-page-con {
  position: relative;
  width: 1920px;
  height: 1080px;
  transform-origin: left top;
  overflow: auto;
  font-family: "SourceHanSansSc-Regular", "Helvetica Neue", Helvetica,
    "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\5FAE\8F6F\96C5\9ED1",
    Arial, sans-serif;
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
        .header-span-text {
          display: inline-block;
          height: 100%;
          text-align: 28px;
          color: #fff;
          vertical-align: middle;
        }
      }
    }
  }
  .main-box {
    padding: 12px;
    margin-bottom: 10px;
    background-size: 100% 100%;
    color: #b8cdd9;
  }
  //数据区域样式
  .main {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 120px 20px 20px;
    font-size: 0;
    // display: flex;
    .main-item-left {
      display: inline-block;
      width: 556px;
      height: 100%;
      margin-right: 15px;
      background-color: cornflowerblue;
      .main-item-left-min {
        background: url("../assets/image/小框.png") no-repeat;
        height: 200px;
        background-size: 100% 100%;
      }
      .main-item-left-middle {
        background: url("../assets/image/中框.png") no-repeat;
        height: 308px;
        background-size: 100% 100%;
      }
      .main-item-left-max {
        background: url("../assets/image/大框.png") no-repeat;
        height: 412px;
        background-size: 100% 100%;
      }
    }
    .main-item-center {
      position: relative;
      display: inline-block;
      width: 728px;
      height: 100%;
      margin-right: 20px;
      background-color: cornflowerblue;
      .main-item-center-top {
        height: 90px;
        margin-bottom: 25px;
        text-align: center;
        .main-item-center-top-total {
          font-size: 20px;
          line-height: 20px;
          color: #fff;
          margin-bottom: 12px;
        }
      }
      // .main-item-center-map {
        //地图样式

      // }
      .main-item-center-botton {
        background: url("../assets/image/中间框.png") no-repeat;
        height: 150px;
        background-size: 100% 100%;
      }
    }
    .main-item-right {
      display: inline-block;
      width: 556px;
      height: 100%;
      background-color: cornflowerblue;
      .main-item-right-min {
        background: url("../assets/image/小框.png") no-repeat;
        height: 200px;
        background-size: 100% 100%;
      }
      .main-item-right-middle {
        background: url("../assets/image/中框.png") no-repeat;
        height: 308px;
        background-size: 100% 100%;
      }
      .main-item-right-max {
        background: url("../assets/image/大框.png") no-repeat;
        height: 412px;
        background-size: 100% 100%;
      }
    }
  }
}
</style>