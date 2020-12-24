<!--  -->
<template>
  <!-- <div class='app' id="map">起步</div> -->
  <div ref="chart" style="width: 500px; height: 500px"></div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import "../node_modules/echarts/map/js/china.js"; // 引入中国地图数据
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
        infoData:[
              {
                //城市经纬度 索引0为开始城市  索引1为结束城市
                coords: [
                  [113.2531, 23.1516],
                  [116.4056, 39.9053],
                ],
                //飞线颜色 16进制格式
                lineStyle: { color: "#4ab2e5" },
                startProvince: "广东",
                endProvince: "北京",
                city: [
                  {
                    //市名
                    cityName:'一环',
                    //数量 (根据数量排序)
                    num:55
                  },
                ],
              },
            ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
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
        backgroundColor: "#013954",
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
                              console.log(params);
                console.log(params.data.startProvince);
                console.log(params.data.endProvince);
                console.log(params.data.city);
                console.log(params.data.city[0].cityName);
                console.log(params.data.city[0].num);
                return params.data.startProvince + " --> " + params.data.endProvince+"<br/>"+"城市:"+params.data.city[0].cityName+"&nbsp;&nbsp;&nbsp;数量:"+params.data.city[0].num;
            }else if((params.componentSubType == "map"|| params.componentSubType == "effectScatter") && params.data){
                console.log(params);
                console.log(params.data.startProvince);
                console.log(params.data.endProvince);
                console.log(params.data.city);
                console.log(params.data.city[0].cityName);
                console.log(params.data.city[0].num);
                debugger
                return params.data.startProvince + " --> " + params.data.endProvince+"<br/>"+"城市:"+params.data.city[0].cityName+"&nbsp;&nbsp;&nbsp;数量:"+params.data.city[0].num;
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
            },
            data: this.infoData
            // [
            //   {
            //     //城市经纬度 索引0为开始城市  索引1为结束城市
            //     coords: [
            //       [119.4543, 25.9222],
            //       [118.8062, 31.9208],
            //     ],
            //     //飞线颜色 16进制格式
            //     lineStyle: { color: "#4ab2e5" },
            //     startProvince: "广东",
            //     endProvince: "北京",
            //     city: [
            //       {
            //         //市名
            //         //数量 (根据数量排序)
            //       },
            //     ],
            //   },
              //   {
              //     coords: [
              //       [119.4543, 25.9222],
              //       [127.9688, 45.368],
              //     ],
              //     lineStyle: { color: "#4fb6d2" },
              //   },
              //   {
              //     coords: [
              //       [119.4543, 25.9222],
              //       [110.3467, 41.4899],
              //     ],
              //     lineStyle: { color: "#52b9c7" },
              //   },
              //   {
              //     coords: [
              //       [119.4543, 25.9222],
              //       [125.8154, 44.2584],
              //     ],
              //     lineStyle: { color: "#5abead" },
              //   },
              //   {
              //     coords: [
              //       [119.4543, 25.9222],
              //       [116.4551, 40.2539],
              //     ],
              //     lineStyle: { color: "#f34e2b" },
              //   },
              //   {
              //     coords: [
              //       [119.4543, 25.9222],
              //       [123.1238, 42.1216],
              //     ],
              //     lineStyle: { color: "#f56321" },
              //   },
              //   {
              //     coords: [
              //       [119.4543, 25.9222],
              //       [114.4995, 38.1006],
              //     ],
              //     lineStyle: { color: "#f56f1c" },
              //   },
              //   {
              //     coords: [
              //       [119.4543, 25.9222],
              //       [117.4219, 39.4189],
              //     ],
              //     lineStyle: { color: "#f58414" },
              //   },
              //   {
              //     coords: [
              //       [119.4543, 25.9222],
              //       [112.3352, 37.9413],
              //     ],
              //     lineStyle: { color: "#f58f0e" },
              //   },
              //   {
              //     coords: [
              //       [119.4543, 25.9222],
              //       [109.1162, 34.2004],
              //     ],
              //     lineStyle: { color: "#f5a305" },
              //   },
              //   {
              //     coords: [
              //       [119.4543, 25.9222],
              //       [103.5901, 36.3043],
              //     ],
              //     lineStyle: { color: "#e7ab0b" },
              //   },
              //   {
              //     coords: [
              //       [119.4543, 25.9222],
              //       [106.3586, 38.1775],
              //     ],
              //     lineStyle: { color: "#dfae10" },
              //   },
              //   {
              //     coords: [
              //       [119.4543, 25.9222],
              //       [101.4038, 36.8207],
              //     ],
              //     lineStyle: { color: "#d5b314" },
              //   },
              //   {
              //     coords: [
              //       [119.4543, 25.9222],
              //       [103.9526, 30.7617],
              //     ],
              //     lineStyle: { color: "#c1bb1f" },
              //   },
              //   {
              //     coords: [
              //       [119.4543, 25.9222],
              //       [108.384366, 30.439702],
              //     ],
              //     lineStyle: { color: "#b9be23" },
              //   },
              //   {
              //     coords: [
              //       [119.4543, 25.9222],
              //       [113.0823, 28.2568],
              //     ],
              //     lineStyle: { color: "#a6c62c" },
              //   },
              //   {
              //     coords: [
              //       [119.4543, 25.9222],
              //       [102.9199, 25.46639],
              //     ],
              //     lineStyle: { color: "#96cc34" },
              //   },
            // ],
          },
        ],
      };
      myChart.setOption(option, true);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getEchartData();
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style>
body {
  height: 100%;
}
html {
  height: 100%;
}
</style>