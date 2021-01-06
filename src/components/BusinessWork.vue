<!--
 * @Description: 线上线下订单概览组件
 * @type:折线图
 * @Author: tanhuaxian
 * @Date: 2020-12-26 
 * @LastEditors: tanhuaxian
 * @LastEditTime: 2020-12-27 
-->
<template>
  <div class="business_work">
    <div class="trend">
      <!-- <div class="trend_title"><i class="content-icon"></i>业务趋势</div> -->
      <div class="trend_content">
        <div
          class="trend_line"
          ref="trendLine"
          style="width: 100%; height: 171px"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import echartsLiquidfill from "echarts-liquidfill";
import CGI from "../utils/Http.js";

export default {
  data() {
    return {
      ClueOrderList: {},
      ClueConditionList: {}, // 饼状图数据
      clueNumberList: [],
      orderNumberList: [],
      monthList: [],
      intentionRatio: {}, // 意向百分比
      updateWeatherTimer:null
    };
  },

  mounted() {
    // this.getClueOrder();
    // this.getClueCondition();
    this.getClueTrend();
    this.updateDataByTimer();
  },
  methods: {
    updateDataByTimer() {
    if (this.updateWeatherTimer) {
      clearInterval(this.updateWeatherTimer);
    }
    this.updateWeatherTimer = setInterval(() => {
      this.getClueTrend();
      console.log('定时器触发');
    }, 180000);
  },
        getClueTrend() {
      this.$http.get(CGI.overviewOfOnlineAndOfflineOrders, null, false).then((res1) => {
          if (res1 && res1.data) {
            let data = res1.data;
            console.log("----------线上线下数据统计-------------");
            console.log(data);
            let res = new Object();
            res.model = data.rows;//数据
            this.clueNumberList = res.model.map((i) => {
              return i.online;
            });
            this.orderNumberList = res.model.map((i) => {
              return i.offline;
            });
            this.monthList = res.model.map((i) => {
              return i.moneth_date + '月';
            });
            this.initTrendLine();
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
    getLast6Month() {
      //创建现在的时间
      var data = new Date();
      //获取年
      var year = data.getFullYear();
      //获取月
      var mon = data.getMonth() + 1;
      var arry = new Array();
      for (var i = 0; i < 5; i++) {
        mon = mon - 1;
        if (mon <= 0) {
          year = year - 1;
          mon = mon + 12;
        }
        if (mon < 10) {
          mon = "0" + mon;
        }

        arry[i] = year + "/" + mon;
      }
      return arry;
    },
    // 返回最近months个月的日期
    getLast3Month(months) {
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth() + 1; //0-11表示1-12月
      var day = now.getDate();
      var dateObj = {};
      dateObj.now = year + "-" + month + "-" + day;
      var nowMonthDay = new Date(year, month, 0).getDate(); //当前月的总天数
      if (month - months <= 0) {
        //如果是1、2、3月，年数往前推一年
        var last3MonthDay = new Date(
          year - 1,
          12 - (months - parseInt(month)),
          0
        ).getDate(); //3个月前所在月的总天数
        if (last3MonthDay < day) {
          //3个月前所在月的总天数小于现在的天日期
          dateObj.last =
            year - 1 + "-" + (12 - (months - month)) + "-" + last3MonthDay;
        } else {
          dateObj.last = year - 1 + "-" + (12 - (months - month)) + "-" + day;
        }
      } else {
        var last3MonthDay = new Date(
          year,
          parseInt(month) - months,
          0
        ).getDate(); //3个月前所在月的总天数
        if (last3MonthDay < day) {
          //3个月前所在月的总天数小于现在的天日期
          if (day < nowMonthDay) {
            //当前天日期小于当前月总天数,2月份比较特殊的月份
            dateObj.last =
              year +
              "-" +
              (month - months) +
              "-" +
              (last3MonthDay - (nowMonthDay - day));
          } else {
            dateObj.last = year + "-" + (month - months) + "-" + last3MonthDay;
          }
        } else {
          dateObj.last = year + "-" + (month - months) + "-" + day;
        }
      }
      return dateObj;
    },
    initTrendLine() {
      const myChart = echarts.init(this.$refs.trendLine);
      myChart.setOption({
        grid: {
          left: "15px",
          right: "12px",
          top: "20px",
          bottom: "4px",
          containLabel: true,
        },
        tooltip : {
          trigger: 'axis',
          // trigger: 'item',
          // axisPointer: {
          //   type: 'cross',
          //   label: {
          //   backgroundColor: '#6a7985'
          //   }
          // },
          // formatter: function(params){
          //   return params.seriesName+" <br/>"+params.name+ ":" +params.value;
          // }
        }, 
        xAxis: {
          type: "category",
          data: this.monthList,
          axisLine: {
            //  改变x轴颜色
            lineStyle: {
              color: "#464754",
            },
          },
          boundaryGap: true,

          axisLabel: {
            //  改变x轴字体颜色和大小
            textStyle: {
              color: "#BBCDD7",
              fontSize: 12,
            },
          },

          splitLine: {
            show: false,
            lineStyle: {
              color: ["#315070"],
              width: 1,
              type: "solid",
            },
          },
        },
        yAxis: {
          type: "value",
          axisLine: {
            //  改变y轴颜色
            show: false,
            lineStyle: {
              color: "#26D9FF",
            },
          },

          axisLabel: {
            margin: 15,
            textStyle: {
              color: "#BBCDD7",
              fontSize: 12,
            },
          },
          minInterval: 5,
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: ["#315070"],
              width: 1,
              type: "solid",
            },
          },
        },
        series: [
          {
            name: "线上订单",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 8,

            itemStyle: {
              normal: {
                color: "#327ae6",
                lineStyle: {
                  color: "#327ae6",
                  width: 2,
                },
                areaStyle: {
                  // 颜色自上而下渐变
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      // 1代表上面
                      offset: 0,
                      color: "#327ae6",
                    },
                    {
                      offset: 1,
                      color: "rgba(6,14,33,1)",
                    },
                  ]),
                  opacity: 0.2, // 填充区域透明度
                },
                borderWidth: 1,
                borderColor: "#327ae6",
              },
            },
            data: this.clueNumberList,
          },
          {
            name: "线下订单",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 8,

            itemStyle: {
              normal: {
                color: "#29f7f7",
                lineStyle: {
                  color: "#01cbdd",
                  width: 2,
                },
                areaStyle: {
                  // 颜色自上而下渐变
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      // 1代表上面
                      offset: 0,
                      color: "#29f7f7",
                    },
                    {
                      offset: 1,
                      color: "rgba(6,14,33,1)",
                    },
                  ]),
                  opacity: 0.2, // 填充区域透明度
                },
              },
            },
            data: this.orderNumberList,
          },
        ],
      });
    },


  },
};
</script>

<style scoped lang="less">
.business_work {
  // .content-icon {
  //   width: 0.6em;
  //   height: 0.5em;
  //   background: url("~@/assets/city/title-mini.png") no-repeat;
  //   background-size: 100% 100%;
  //   margin-right: 0.5em;
  //   display: inline-block;
  //   vertical-align: middle;
  // }
  .trend {
    margin-top: 16px;
    .trend_title {
      font-size: 16px;
      line-height: 16px;
      color: #b8cdd9;
    }
    .trend_content {
      margin-top: 15px;
      // background-color: rgba($color: #0a0a0d, $alpha: 0.72);
      // background-color: rgba(10, 10, 13, 0.72);
    }
  }
}
</style>