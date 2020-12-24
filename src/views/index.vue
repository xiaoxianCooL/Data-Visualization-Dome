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
          <div class="main-box main-item-left-min">
            <div class="main-item-common-totalClass"><img src="../assets/image/标题前缀-1.png" alt="" srcset=""><span>线上线下订单量概览</span></div>
            <div>
              <BusinessWork />
            </div>
          </div>
          <div class="main-box main-item-left-middle">
            <div class="main-item-common-totalClass"><img src="../assets/image/标题前缀-1.png" alt="" srcset=""><span>回收品类分析</span></div>
          </div>
          <div class="main-box main-item-left-max">
            <div class="main-item-common-totalClass"><img src="../assets/image/标题前缀-1.png" alt="" srcset=""><span>门店回收费用排行榜</span></div>
          </div>
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
          <div ref="chart" class="main-item-center-map" ></div>
          <div class="main-item-center-botton">
            <div class="main-box main-item-common-totalClass"><img src="../assets/image/标题前缀-1.png" alt="" srcset=""><span>全国门店各项数据统计</span></div>
          </div>
        </div>
        <div class="main-item-right">
          <div class="main-box main-item-right-min">
            <div class="main-item-common-totalClass"><img src="../assets/image/标题前缀-1.png" alt="" srcset=""><span>用户数据统计</span></div>
          </div>
          <div class="main-box main-item-right-middle">
            <div class="main-item-common-totalClass"><img src="../assets/image/标题前缀-1.png" alt="" srcset=""><span>总单位趋势统计</span></div>
          </div>
          <div class="main-box main-item-right-max">
            <div class="main-item-common-totalClass"><img src="../assets/image/标题前缀-1.png" alt="" srcset=""><span>实时订单</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import FlipClock from '../components/flipClock'
import BusinessWork from '../components/BusinessWork'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    FlipClock,
    BusinessWork
  },
  data() {
    //这里存放数据
    return {
      pageScale: 1, //默认比例1
      deviceUnlineNum:"1",
      deviceUnlineChangeNum:"2",
            //   infoData:[//地图数据
            //   {
            //     //城市经纬度 索引0为开始城市  索引1为结束城市
            //     coords: [
            //       [113.2531, 23.1516],
            //       [116.4056, 39.9053],
            //     ],
            //     //飞线颜色 16进制格式
            //     lineStyle: { color: "#4ab2e5" },
            //     startProvince: "广东",
            //     endProvince: "北京",
            //     city: [
            //       {
            //         //市名
            //         cityName:'一环',
            //         //数量 (根据数量排序)
            //         num:55
            //       },
            //     ],
            //   },
            // ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //地图配置
        getEchartData() {
      const myChart = this.$echarts.init(this.$refs.chart);
      var points = [
        { value: [118.8062, 31.9208], itemStyle: { color: "#4ab2e5" } },
        { value: [127.9688, 45.368], itemStyle: { color: "#4fb6d2" } },
        { value: [110.3467, 41.4899], itemStyle: { color: "#52b9c7" } },
        { value: [125.8154, 44.2584], itemStyle: { color: "#5abead" } },
        { value: [116.4551, 40.2539], itemStyle: { color: "#f34e2b" } },
        { value: [123.1238, 42.1216], itemStyle: { color: "#f56321" } },
        { value: [114.4995, 38.1006], itemStyle: { color: "#f56f1c" } },
        { value: [117.4219, 39.4189], itemStyle: { color: "#f58414" } },
        { value: [112.3352, 37.9413], itemStyle: { color: "#f58f0e" } },
        { value: [109.1162, 34.2004], itemStyle: { color: "#f5a305" } },
        { value: [103.5901, 36.3043], itemStyle: { color: "#e7ab0b" } },
        { value: [106.3586, 38.1775], itemStyle: { color: "#dfae10" } },
        { value: [101.4038, 36.8207], itemStyle: { color: "#d5b314" } },
        { value: [103.9526, 30.7617], itemStyle: { color: "#c1bb1f" } },
        { value: [108.384366, 30.439702], itemStyle: { color: "#b9be23" } },
        { value: [113.0823, 28.2568], itemStyle: { color: "#a6c62c" } },
        { value: [102.9199, 25.46639], itemStyle: { color: "#96cc34" } },
        { value: [113.2531, 23.1516], itemStyle: { color: "#96cc34" } },
        { value: [119.4543, 25.9222] },
      ];
      var option = {
        // backgroundColor: "#181f4e",
        // backgroundColor: 'rgba(128, 128, 128, 0.1)', //rgba设置透明度0.1,
        backgroundColor: '', //无背景,
        /*   title: {
            top: 20,
            text: '“困难人数” - 杭州市',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#ccc'
            }
        },*/

        tooltip: {
          trigger: "item",
          formatter: function (params) {
            //   console.log(params);
            if (params.componentSubType == "lines" && params.data) {
                //               console.log(params);
                // console.log(params.data.startProvince);
                // console.log(params.data.endProvince);
                // console.log(params.data.city);
                // console.log(params.data.city[0].cityName);
                // console.log(params.data.city[0].num);
                // return params.data.startProvince + " --> " + params.data.endProvince+"<br/>"+"城市:"+params.data.city[0].cityName+"&nbsp;&nbsp;&nbsp;数量:"+params.data.city[0].num;
                return params.name;
            }else if((params.componentSubType == "map"|| params.componentSubType == "effectScatter") && params.data){
                // console.log(params);
                // console.log(params.data.startProvince);
                // console.log(params.data.endProvince);
                // console.log(params.data.city);
                // console.log(params.data.city[0].cityName);
                // console.log(params.data.city[0].num);
                return params.name;
                // debugger
                // return params.data.startProvince + " --> " + params.data.endProvince+"<br/>"+"城市:"+params.data.city[0].cityName+"&nbsp;&nbsp;&nbsp;数量:"+params.data.city[0].num;
            } else{
                return params.name;
            }
            
          },
        },
        /*visualMap: {
          min: 0,
          max: 1000000,
          right: 100,
          seriesIndex: 1,
          type: 'piecewise',
          bottom: 100,
          textStyle: {
            color: '#FFFF'
          },
          splitList: [
            {
              gt: 50000,
              color: '#F5222D',
              label: '困难人数大于5万人'
            }, //大于5万人
            {
              gte: 30000,
              lte: 50000,
              color: '#FA541C ',
              label: '困难人数3-5万人'
            }, //3-5万人
            {
              gte: 10000,
              lte: 30000,
              color: '#FA8C16',
              label: '困难人数1-3万人'
            }, //1-3万人
            {
              lte: 10000,
              color: '#fbe1d6',
              label: '困难人数小于1万人'
            }
          ]
        },*/

        geo: {
          map: "china",
          aspectScale: 0.75, //长宽比
          zoom: 1.1,
          roam: false,
          itemStyle: {
            normal: {
              areaColor: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: "#09132c", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#274d68", // 100% 处的颜色
                  },
                ],
                globalCoord: true, // 缺省为 false
              },
              shadowColor: "rgb(58,115,192)",
              shadowOffsetX: 10,
              shadowOffsetY: 11,
            },
            emphasis: {
              areaColor: "#2AB8FF",
              borderWidth: 0,
              color: "green",
              label: {
                show: false,
              },
            },
          },
          regions: [
            {
              name: "南海诸岛",
              itemStyle: {
                areaColor: "rgba(0, 10, 52, 1)",

                borderColor: "rgba(0, 10, 52, 1)",
                normal: {
                  opacity: 0,
                  label: {
                    show: false,
                    color: "#009cc9",
                  },
                },
              },
            },
          ],
        },
        series: [
            //地图
          {
            type: "map",
            roam: false,
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#1DE9B6",
                },
              },
              emphasis: {
                textStyle: {
                  color: "rgb(183,185,14)",
                },
              },
            },

            itemStyle: {
              normal: {
                borderColor: "rgb(147, 235, 248)",
                borderWidth: 1,
                areaColor: {
                  type: "radial",
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#09132c", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#274d68", // 100% 处的颜色
                    },
                  ],
                  globalCoord: true, // 缺省为 false
                },
              },
              emphasis: {
                areaColor: "rgb(46,229,206)",
                //    shadowColor: 'rgb(12,25,50)',
                borderWidth: 0.1,
              },
            },
            zoom: 1.1,
            //     roam: false,
            map: "china", //使用
            // data: this.difficultData //热力图数据   不同区域 不同的底色
          },
          //散点
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            showEffectOn: "render",
            zlevel: 1,
            rippleEffect: {
              period: 15,
              scale: 4,
              brushType: "fill",
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                offset: [15, 0],
                color: "#1DE9B6",
                show: true,
              },
            },
            itemStyle: {
              normal: {
                color:
                  "#1DE9B6" /* function (value){ //随机颜色
 return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
 }*/,
                shadowBlur: 10,
                shadowColor: "#333",
              },
            },
            symbolSize: 12,
            data: points,
          }, //地图线的动画效果
          {
            type: "lines",
            zlevel: 2,
            effect: {
              show: true,
              period: 4, //箭头指向速度，值越小速度越快
              trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
              symbol: "arrow", //箭头图标
              symbolSize: 7, //图标大小
            },
            lineStyle: {
              normal: {
                color: "#1DE9B6",
                /* function (value){ //随机颜色
                        
                        ['#f21347','#f3243e','#f33736','#f34131','#f34e2b',
                        '#f56321','#f56f1c','#f58414','#f58f0e','#f5a305',
                        '#e7ab0b','#dfae10','#d5b314','#c1bb1f','#b9be23',
                        '#a6c62c','#96cc34','#89d23b','#7ed741','#77d64c',
                        '#71d162','#6bcc75','#65c78b','#5fc2a0','#5abead',
                        '#52b9c7','#4fb6d2','#4ab2e5']
 return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
 }*/
                width: 1, //线条宽度
                opacity: 0.1, //尾迹线条透明度
                curveness: 0.3, //尾迹线条曲直度
              },
            }, // this.infoData
            data: 
            [
              {
                //城市经纬度 索引0为开始城市  索引1为结束城市
                coords: [
                  [119.4543, 25.9222],
                  [118.8062, 31.9208],
                ],
                //飞线颜色 16进制格式
                lineStyle: { color: "#4ab2e5" },
                startProvince: "广东",
                endProvince: "北京",
                city: [
                  {
                    //市名
                    //数量 (根据数量排序)
                  },
                ],
              },
                {
                  coords: [
                    [119.4543, 25.9222],
                    [127.9688, 45.368],
                  ],
                  lineStyle: { color: "#4fb6d2" },
                },
                {
                  coords: [
                    [119.4543, 25.9222],
                    [110.3467, 41.4899],
                  ],
                  lineStyle: { color: "#52b9c7" },
                },
                {
                  coords: [
                    [119.4543, 25.9222],
                    [125.8154, 44.2584],
                  ],
                  lineStyle: { color: "#5abead" },
                },
                {
                  coords: [
                    [119.4543, 25.9222],
                    [116.4551, 40.2539],
                  ],
                  lineStyle: { color: "#f34e2b" },
                },
                {
                  coords: [
                    [119.4543, 25.9222],
                    [123.1238, 42.1216],
                  ],
                  lineStyle: { color: "#f56321" },
                },
                {
                  coords: [
                    [119.4543, 25.9222],
                    [114.4995, 38.1006],
                  ],
                  lineStyle: { color: "#f56f1c" },
                },
                {
                  coords: [
                    [119.4543, 25.9222],
                    [117.4219, 39.4189],
                  ],
                  lineStyle: { color: "#f58414" },
                },
                {
                  coords: [
                    [119.4543, 25.9222],
                    [112.3352, 37.9413],
                  ],
                  lineStyle: { color: "#f58f0e" },
                },
                {
                  coords: [
                    [119.4543, 25.9222],
                    [109.1162, 34.2004],
                  ],
                  lineStyle: { color: "#f5a305" },
                },
                {
                  coords: [
                    [119.4543, 25.9222],
                    [103.5901, 36.3043],
                  ],
                  lineStyle: { color: "#e7ab0b" },
                },
                {
                  coords: [
                    [119.4543, 25.9222],
                    [106.3586, 38.1775],
                  ],
                  lineStyle: { color: "#dfae10" },
                },
                {
                  coords: [
                    [119.4543, 25.9222],
                    [101.4038, 36.8207],
                  ],
                  lineStyle: { color: "#d5b314" },
                },
                {
                  coords: [
                    [119.4543, 25.9222],
                    [103.9526, 30.7617],
                  ],
                  lineStyle: { color: "#c1bb1f" },
                },
                {
                  coords: [
                    [119.4543, 25.9222],
                    [108.384366, 30.439702],
                  ],
                  lineStyle: { color: "#b9be23" },
                },
                {
                  coords: [
                    [119.4543, 25.9222],
                    [113.0823, 28.2568],
                  ],
                  lineStyle: { color: "#a6c62c" },
                },
                {
                  coords: [
                    [119.4543, 25.9222],
                    [102.9199, 25.46639],
                  ],
                  lineStyle: { color: "#96cc34" },
                },
            ],
          },
        ],
      };
      myChart.setOption(option, true);
    },
    //自适应函数
    handleResize () {
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
    //测试函数
    timeout(){
      let _this = this;
      setTimeout(function(){
        _this.deviceUnlineNum = "000";
        _this.deviceUnlineChangeNum = "839";
        // _this.deviceUnlineChangeNum = (Number(_this.deviceUnlineChangeNum)+1).toString();
        console.log(_this.deviceUnlineChangeNum);
      },1000)
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // let _this = this;
    this.$http.get('https://restapi.amap.com/v3/weather/weatherInfo?city=440114&key=8d4730fb158ee7adef7c120d2cda7e8a',{

    }).then(function(res){
      const weatherData = res.data.lives[0];
      // alert(res);
      console.log(weatherData.weather);
        switch (weatherData.weather) {
            case '晴':
              this.weatherIcon = 'icon-qing';
              break;
            case '多云':
              this.weatherIcon = 'icon-duoyun';
              break;
            case '阴':
              this.weatherIcon = 'icon-yin';
              break;
            case '阵雨':
              this.weatherIcon = 'icon-zhenyu';
              break;
            case '雷阵雨':
              this.weatherIcon = 'icon-leizhenyu';
              break;
            case '雷阵雨并伴有冰雹':
              this.weatherIcon = 'icon-leizhenyubingbanyoubingbao';
              break;
            case '雨夹雪':
              this.weatherIcon = 'icon-huaban';
              break;
            case '雨':
              this.weatherIcon = 'icon-xiaoyu';
              break;
            case '小雨':
              this.weatherIcon = 'icon-xiaoyu';
              break;
            case '中雨':
              this.weatherIcon = 'icon-zhongyu';
              break;
            case '大雨':
              this.weatherIcon = 'icon-dayu';
              break;
            case '暴雨':
              this.weatherIcon = 'icon-dayu1';
              break;
            case '大暴雨':
              this.weatherIcon = 'icon-baoyu';
              break;
            case '特大暴雨':
              this.weatherIcon = 'icon-dtedabaoyu';
              break;
            case '阵雪':
              this.weatherIcon = 'icon-zhenxue';
              break;
            case '雪':
              this.weatherIcon = 'icon-xiaoxue';
              break;
            case '小雪':
              this.weatherIcon = 'icon-xiaoxue';
              break;
            case '中雪':
              this.weatherIcon = 'icon-zhongxue';
              break;
            case '大雪':
              this.weatherIcon = 'icon-daxue';
              break;
            case '暴雪':
              this.weatherIcon = 'icon-baoxue';
              break;
            case '雾':
              this.weatherIcon = 'icon-wu';
              break;
            case '冻雨':
              this.weatherIcon = 'icon-dongyu';
              break;
            case '沙尘暴':
              this.weatherIcon = 'icon-w-20a';
              break;
            case '小雨-中雨':
              this.weatherIcon = 'icon-xiaoyu-zhongyu';
              break;
            case '中雨-大雨':
              this.weatherIcon = 'icon-zhongyu-dayu';
              break;
            case '大雨-暴雨':
              this.weatherIcon = 'icon-dayu-baoyu';
              break;
            case '暴雨-大暴雨':
              this.weatherIcon = 'icon-baoyu-dabaoyu';
              break;
            case '大暴雨-特大暴雨':
              this.weatherIcon = 'icon-dabaoyu-tedabaoyu';
              break;
            case '小雪-中雪':
              this.weatherIcon = 'icon-xiaoxue-zhongxue';
              break;
            case '中雪-大雪':
              this.weatherIcon = 'icon-zhongxue-daxue';
              break;
            case '大雪-暴雪':
              this.weatherIcon = 'icon-daxue-baoxue';
              break;
            case '浮尘':
              this.weatherIcon = 'icon-fuchen';
              break;
            case '扬沙':
              this.weatherIcon = 'icon-yangsha';
              break;
            case '强沙尘暴':
              this.weatherIcon = 'icon-qiangshachenbao';
              break;
            case '飑':
              this.weatherIcon = 'icon-biao';
              break;
            case '龙卷风':
              this.weatherIcon = 'icon-huaban1';
              break;
            case '弱高吹雪':
              this.weatherIcon = 'icon-tianqi-';
              break;
            case '轻雾':
              this.weatherIcon = 'icon-qingwu';
              break;
            case '霾':
              this.weatherIcon = 'icon-mai';
              break;
            default: {
              this.weatherIcon = '';
            }
          }
    }) .catch(function(err){
      // alert(err);
      console.log(err);
    })
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getEchartData();//初始化加载地图函数
    this.timeout();


    
    //绑定resize事件 监听浏览器是否缩小 触发自适应函数随着视图缩小计算比例
    window.addEventListener("resize", this.handleResize);
    this.handleResize();//视图自适应函数
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
  // height: 1080px;
  height: 100vh;
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
    display: flex;
    .main-item-left {
      display: inline-block;
      width: 556px;
      height: 100%;
      margin-right: 15px;
      // background-color: cornflowerblue;
      .main-item-left-min {
        background: url("../assets/image/小框.png") no-repeat;
        height: 220px;
        background-size: 100% 100%;
      }
      .main-item-left-middle {
        background: url("../assets/image/中框.png") no-repeat;
        height: 200px;
        background-size: 100% 100%;
      }
      .main-item-left-max {
        background: url("../assets/image/大框.png") no-repeat;
        height: 357px;
        background-size: 100% 100%;
      }
    }
    .main-item-center {
      position: relative;
      display: inline-block;
      width: 728px;
      height: 100%;
      margin-right: 20px;
      // background-color: cornflowerblue;
      .main-item-center-top {
        height: 50px;
        // margin-bottom: 25px;
        text-align: center;
        .main-item-center-top-total {
          font-size: 20px;
          line-height: 20px;
          color: #fff;
          margin-bottom: 12px;
        }
      }
      .main-item-center-map {
        // 地图样式
        width: 728px;
        height: 550px;
      }
      .main-item-center-botton {
        margin-top: 46px;
        background: url("../assets/image/中间框.png") no-repeat;
        height: 150px;
        background-size: 100% 100%;
      }
    }
    .main-item-right {
      display: inline-block;
      width: 556px;
      height: 100%;
      // background-color: cornflowerblue;
      .main-item-right-min {
        background: url("../assets/image/小框.png") no-repeat;
        height: 200px;
        background-size: 100% 100%;
      }
      .main-item-right-middle {
        background: url("../assets/image/中框.png") no-repeat;
        height: 200px;
        background-size: 100% 100%;
      }
      .main-item-right-max {
        background: url("../assets/image/大框.png") no-repeat;
        height: 377px;
        background-size: 100% 100%;
      }
    }
  }
}

.main-item-common-totalClass{
  line-height: 16px;
  img{
    width: 16px;
    height: auto;
    margin-right: 5px;
    vertical-align: middle;
  }
  span{
    font-size: 16px;
    vertical-align: middle;
    color: #fff;
    letter-spacing: 2px;//字间距
  }
}
</style>