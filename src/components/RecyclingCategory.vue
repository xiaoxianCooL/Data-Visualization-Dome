<!--
 * @Description: 回收品类组件
 * @type:环形图
 * @Author: tanhuaxian
 * @Date: 2020-12-29
 * @LastEditors: tanhuaxian
 * @LastEditTime: 2020-12-29 
-->
<template>
<div class='RecyclingCategory'>
    <div class="recyclingCategory" ref="recyclingCategory" style="height:230px;width:530px"></div>
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
updateWeatherTimer:null
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
    this.getRecyclingCategory();
    this.updateDataByTimer();
},
//方法集合
methods: {
    updateDataByTimer() {
    if (this.updateWeatherTimer) {
      clearInterval(this.updateWeatherTimer);
    }
    this.updateWeatherTimer = setInterval(() => {
      this.getRecyclingCategory();
    }, 180000);
  },
    getRecyclingCategory() {
      this.$http.get(CGI.categoryAnalysis, null, false).then(res => {
        if (res && res.data) {
          let data = res.data;
          console.log("----------回收类统计-------------");
          console.log(data);
        //   data.rows.map(i => {
            // this.countryProjectNumber.push(i.moneth_date);
            // this.UserNumber.push(i.number_data);
            // this.planMonth.push(i.moneth_date);
        //   });

        //   this.countryProjectNumber.reverse();
        //   this.UserNumber.reverse();
        //   this.planMonth.reverse();

          this.infoRecyclingCategory(data.rows);
        }
      }).catch(err => {
          console.log(err);
        });
    },
    infoRecyclingCategory(dataList) {
      const recyclingCategory = this.$echarts.init(this.$refs.recyclingCategory);
var rich = {
    white: {
        color: '#ddd',
        align: 'center',
        padding: [0, 0]//上下行间距
    }
};
var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
    }
};
var data = [];
var color=['#ffa800','#ff5b00','#ff3000','#0dbc79','#9933CC','#FF33FF','#FFFF00','#FF9900','#00ffff','#00cfff','#006ced','#ffe000','#0000FF','#CC99FF','#006600','#2ee5ce','#00ff00','#9933CC','#FF33FF','#FFFF00','#FF9900','#00ffff']//环的颜色
for (var i = 0; i < dataList.length; i++) {
    data.push({
        value: dataList[i].sum_numerical_value,
        name: dataList[i].detail_name,
        itemStyle: {
            normal: {
                borderWidth: 20,
                shadowBlur: 20,
                borderColor:color[i],
                shadowColor: color[i]
            }
        }
    }, {
        value: 2,
        name: '',
        itemStyle: placeHolderStyle
    });
}
var seriesObj = [{
    name: '',
    type: 'pie',
    clockWise: false,
    radius: [50, 50],
    // center:[50,50],
    // minAngle: 5,  // 设置每块扇形的最小占比
    minAngle: 5,//最小角度
    startAngle:240, //起始角度
    hoverAnimation: false,
    itemStyle: {
        normal: {
            label: {
                show: true,
                position: 'outside',
                color: '#ddd',
                formatter: function(params) {
                    var percent = 0;
                    var total = 0;
                    for (var i = 0; i < dataList.length; i++) {
                        total += dataList[i].sum_numerical_value;
                    }
                    percent = ((params.value / total) * 100).toFixed(0);
                    if(params.name !== '') {
                        return params.name + '{white|' + '占比' + percent + '%}';
                    }else {
                        return '';
                    }
                },
                rich: rich
            },
            labelLine: {
                length:30,//左标线
                length2:50,//右标线
                show: true,
                color:'#00ffff'
            }
        }
    },
    data: data
}];
var option = {
    backgroundColor: '',
    tooltip: {
        show: false
    },
    legend: {
        show: false
    },
    toolbox: {
        show: false
    },
    series: seriesObj
}
      recyclingCategory.setOption(option, true);
    }
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
.RecyclingCategory{
    /* margin-top: 15px; */
    /* background-color: rgba(10, 10, 13, 0.72); */
}
</style>