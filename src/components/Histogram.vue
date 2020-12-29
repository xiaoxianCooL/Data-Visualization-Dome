<!--
 * @Description: 用户数量统计组件
 * @type:柱形图
 * @Author: tanhuaxian
 * @Date: 2020-12-26 
 * @LastEditors: tanhuaxian
 * @LastEditTime: 2020-12-27 
-->
<template>
  <div class="Histogram">
    <div ref="histogram" style="height:160px;width:530px"></div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import echarts from "echarts";
import CGI from "../utils/Http.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
    //cityName: [], // 1
      UserNumber: [], // 用户总数量
      planMonth: []
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getUserNumber();
  },
  //方法集合
  methods: {
    getUserNumber() {
      this.$http.get(CGI.numberOfUsersStatistics, null, false).then(res => {
        if (res && res.data) {
          let data = res.data;
          console.log("----------用户数量统计-------------");
          console.log(data);
          data.rows.map(i => {
            // this.countryProjectNumber.push(i.moneth_date);
            this.UserNumber.unshift(i.number_data);
            this.planMonth.unshift(i.moneth_date+'月');
          });

        //   this.countryProjectNumber.reverse();
          this.UserNumber.reverse();
          this.planMonth.reverse();
          this.infoHistogram();
        }
      }).catch(err => {
          console.log(err);
        });
    },
    infoHistogram() {
      const histogram = this.$echarts.init(this.$refs.histogram);
      const patentList = this.UserNumber;
      var option = {
        grid: {
          left: 10.5,
          right: 18,
          top: 18,
          bottom: 10.5,
          containLabel: true
        },
        tooltip: {
          // 触发方式 axis:坐标轴触发 item:数据项图形触发
          trigger: "item"
        },
        // legend: {
        //   data: ["按钮1", "按钮2"],
        //   bottom: 0,
        //   textStyle: {
        //     color: "#b8cdd9"
        //   },
        //   itemWidth: 10,
        //   itemHeight: 10,
        //   itemGap: 30
        // },
        xAxis: [
          {
            type: "category",
            data: this.planMonth,
            axisLabel: {
              color: "#b8cdd9"
            }
          }
        ],
        yAxis: [
          {
            splitLine: {
              show: false
            },
            axisLabel: {
              color: "#b8cdd9"
            }
          }
        ],
        series: [
          {
            name: "用户总数量",
            type: "bar",
            barWidth: "20px",
            stack: "总量",
            data: this.UserNumber,
            itemStyle: {
              color: "#327ae6"
            },
            label: {
              show: true,
              position: "top",
              formatter: function(params) {
                return patentList[params.dataIndex];
              },
              color: "#b8cdd9"
            }
          },
        //   {
        //     name: "叠加柱形",
        //     type: "bar",
        //     barWidth: "20px",
        //     stack: "总量",
        //     data: this.countryProjectNumber,
        //     itemStyle: {
        //       color: "#2affff"
        //     },
        //     label: {
        //       show: true,
        //       position: "top",
        //       formatter: function(params) {
        //         return patentList[params.dataIndex];
        //       },
        //       color: "#b8cdd9"
        //     }
        //   }
        ]
      };
      histogram.setOption(option, true);
    }
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style lang="less" scoped>
.Histogram {
//   background-color: rgba(10, 10, 13, 0.72);
}
</style>
