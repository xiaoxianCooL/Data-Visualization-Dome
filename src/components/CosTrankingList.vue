<!--
 * @Description: 门店回收费用排行榜
 * @type:横向柱状图
 * @Author: tanhuaxian
 * @Date: 2020-12-29 
 * @LastEditors: tanhuaxian
 * @LastEditTime: 2020-12-29 
-->
<template>
<div class='Tanking'>
    <div ref="tanking" style="height: 300px; width: 530px"></div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import CGI from "../utils/Http.js";
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

    this.getTanking();
},
//方法集合
methods: {
    getTanking(){
      this.$http.get(CGI.rankingList, null, false).then((res) => {
          if (res && res.data) {
            let data = res.data;
            console.log("----------门店回收费用排行榜-------------");
            console.log(data)
            this.infoTanking(data.rows);
          }
        }).catch((err) => {
          console.log(err);
        });

      // this.$http.get(CGI.overviewOfOnlineAndOfflineOrders, {
      //     beginTime: this.getLast3Month(5).last,
      //     endTime: this.getLast3Month(5).now,
      //   }).then((res) => {

      //   });
    },
    infoTanking(dataList) {
      const tanking = this.$echarts.init(this.$refs.tanking);
      let data = dataList;
    //   [
    //     {
    //       name: "上海市",
    //       num: "21.987691",
    //     },
    //     {
    //       name: "广州市",
    //       num: "20.377176",
    //     },
    //     {
    //       name: "北京市",
    //       num: "19.127404",
    //     },
    //     {
    //       name: "深圳市",
    //       num: "18.40882",
    //     },
    //     {
    //       name: "郑州市",
    //       num: "17.980597",
    //     },
    //     {
    //       name: "杭州市",
    //       num: "16.957898",
    //     },
    //     {
    //       name: "南京市",
    //       num: "15.099577",
    //     },
        // {
        //   name: "武汉市",
        //   num: "14.76103"
        // },
        // {
        //   name: "重庆市",
        //   num: "15.002175"
        // },
        // {
        //   name: "成都市",
        //   num: "12.153536"
        // }
    //   ];

      function contains(arr, dst) {
        var i = arr.length;
        while ((i -= 1)) {
          if (arr[i] == dst) {
            return i;
          }
        }
        return false;
      }

      var attackSourcesColor = [
        new this.$echarts.graphic.LinearGradient(0, 1, 1, 1, [
          {
            offset: 0,
            color: "#EB3B5A",
          },
          {
            offset: 1,
            color: "#FE9C5A",
          },
        ]),
        new this.$echarts.graphic.LinearGradient(0, 1, 1, 1, [
          {
            offset: 0,
            color: "#FA8231",
          },
          {
            offset: 1,
            color: "#FFD14C",
          },
        ]),
        new this.$echarts.graphic.LinearGradient(0, 1, 1, 1, [
          {
            offset: 0,
            color: "#F7B731",
          },
          {
            offset: 1,
            color: "#FFEE96",
          },
        ]),
        new this.$echarts.graphic.LinearGradient(0, 1, 1, 1, [
          {
            offset: 0,
            color: "#395CFE",
          },
          {
            offset: 1,
            color: "#2EC7CF",
          },
        ]),
      ];
      var attackSourcesColor1 = [
        "#EB3B5A",
        "#FA8231",
        "#F7B731",
        "#3860FC",
        "#1089E7",
        "#F57474",
        "#56D0E3",
        "#1089E7",
        "#F57474",
        "#1089E7",
        "#F57474",
        "#F57474",
      ];
      var attaData = [];
      var attaName = [];
      var topName = [];
      data.forEach((it, index) => {
        attaData[index] = parseFloat(it.sum_money).toFixed(0);
        //attaData[index] = parseInt(it.num);
        attaName[index] = it.shop_name;
        topName[index] = `${it.shop_name}`;
      });
      var salvProMax = [];
      var max = attaData[0];
      for (let i = 0; i < attaData.length; i++) {
        max = max < attaData[i + 1] ? attaData[i + 1] : max;
      }
      for (let i = 0; i < attaData.length; i++) {
        salvProMax.push(max); //背景按最大值
      }

      function attackSourcesDataFmt(sData) {
        var sss = [];
        sData.forEach(function (item, i) {
          let itemStyle = {
            color: i > 3 ? attackSourcesColor[3] : attackSourcesColor[i],
          };
          sss.push({
            value: item,
            itemStyle: itemStyle,
          });
        });
        return sss;
      }

      var option = {
        backgroundColor: "",
        tooltip: {
          show: false,
          backgroundColor: "rgba(3,169,244, 0.5)", //背景颜色（此时为默认色）
          textStyle: {
            fontSize: 16,
          },
        },
        color: ["#F7B731"],
        legend: {
          show: false,
          pageIconSize: [12, 12],
          itemWidth: 20,
          itemHeight: 10,
          textStyle: {
            //图例文字的样式
            fontSize: 12,
            color: "#fff",
          },
          selectedMode: false,
          data: ["个人所得(亿元)"],
        },
        grid: {
          left: "0%",
          right: "2%",
          width: "90%",
          bottom: "2%",
          top: "8%",
          containLabel: true,
        },
        xAxis: {
          type: "value",

          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
        },
        yAxis: [
          {
            //左侧排行数字
            type: "category",
            inverse: true,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisPointer: {
              label: {
                show: true,
                //margin: 30
              },
            },
            pdaaing: [5, 0, 0, 0],
            postion: "right",
            data: attaName,
            axisLabel: {
              margin: 30,
              fontSize: 12,
              align: "left",
              padding: [2, 0, 0, 0],
              color: "#000",
              rich: {
                nt1: {
                  color: "#fff",
                  backgroundColor: attackSourcesColor1[0],
                  width: 15,
                  height: 15,
                  fontSize: 12,
                  align: "center",
                  borderRadius: 100,
                  lineHeight: "5",
                  padding: [0, 1, 2, 1],
                  // padding:[0,0,2,0],
                },
                nt2: {
                  color: "#fff",
                  backgroundColor: attackSourcesColor1[1],
                  width: 15,
                  height: 15,
                  fontSize: 12,
                  align: "center",
                  borderRadius: 100,
                  padding: [0, 1, 2, 1],
                },
                nt3: {
                  color: "#fff",
                  backgroundColor: attackSourcesColor1[2],
                  width: 15,
                  height: 15,
                  fontSize: 12,
                  align: "center",
                  borderRadius: 100,
                  padding: [0, 1, 2, 1],
                },
                nt: {
                  color: "#fff",
                  backgroundColor: attackSourcesColor1[3],
                  width: 15,
                  height: 15,
                  fontSize: 12,
                  align: "center",
                  lineHeight: 3,
                  borderRadius: 100,
                  padding: [0, 1, 2, 1],
                  lineHeight: 5,
                },
              },
              formatter: function (value, index) {
                index = contains(attaName, value) + 1;
                if (index - 1 < 3) {
                  return ["{nt" + index + "|" + index + "}"].join("\n");
                } else {
                  return ["{nt|" + index + "}"].join("\n");
                }
              },
            },
          },
          {
            //右侧名字
            type: "category",
            inverse: true,
            axisTick: "none",
            axisLine: "none",
            show: true,
            axisLabel: {
              textStyle: {
                color: "#fff",
                fontSize: "12",
              },
            },
            //data: attackSourcesDataFmt(attaName)
            data: attackSourcesDataFmt(attaData), //数字
          },
          {
            //名称
            type: "category",
            offset: -10,
            position: "left",
            axisLabel: {
              color: `#fff`,
              fontSize: 10,
            },
            axisLine: {
              show: false,
            },
            inverse: true,
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              color: ["#fff"],
              align: "left",
              verticalAlign: "bottom",
              lineHeight: 32,
              fontSize: 12,
            },
            data: topName,
          },
        ],
        series: [
          {
            //条形图数值
            zlevel: 1,
            name: "个人所得(亿元)",
            type: "bar",
            barWidth: "15px",
            animationDuration: 1500,
            data: attackSourcesDataFmt(attaData),
            align: "center",
            itemStyle: {
              normal: {
                barBorderRadius: 10,
              },
            },
            label: {
              show: false,
              fontSize: 12,
              color: "#fff",
              textBorderWidth: 2,
              padding: [2, 0, 0, 0],
            },
          },
          {
            //最大值背景条形图
            name: "个人所得(亿元)",
            type: "bar",
            barWidth: 15,
            barGap: "-100%",
            margin: "20",
            data: salvProMax,
            textStyle: {
              //图例文字的样式
              fontSize: 12,
              color: "#fff",
            },
            itemStyle: {
              normal: {
                color: "#05325F",
                //width:"100%",
                fontSize: 12,
                barBorderRadius: 30,
              },
            },
          },
        ],
      };
      tanking.setOption(option, true);
    },
},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style scoped>

</style>