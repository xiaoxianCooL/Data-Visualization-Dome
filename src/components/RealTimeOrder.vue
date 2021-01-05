<!--
 * @Description: 实时订单轮播组件
 * @type:轮播图
 * @Author: tanhuaxian
 * @Date: 2020-12-26 
 * @LastEditors: tanhuaxian
 * @LastEditTime: 2020-12-27 
-->
<template>
  <div class="real-time-order">
      <!-- <div v-for="(group, index) in dataGroup" :key="index">
          <div>{{group[0].shop_name}}</div>
      </div> -->
    <div class="real-time-order-roll-group" v-for="(group, index) in dataGroup" :key="`${index}`">
      <swiper
        :options="swiperOptions"
        :auto-update="true"
        :auto-destroy="true"
        :delete-instance-on-destroy="true"
        :cleanup-styles-on-destroy="true"
      >
        <swiper-slide class="swper-slide" v-for="(item, itemIdx) in group" :key="`item${itemIdx}`">
          <div class="real-time-order-roll-item">
            <div>{{item.shop_name || ''}}</div>
            <div :class="{ font_color: `${item.order_type}` === '1' }">{{ {1: '线下订单', 2: '线上订单'}[item.order_type] || ''}}</div>
            <div>{{item.mobile_phone || ''}}</div>
            <div>{{item.create_date || ''}}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import CGI from "../utils/Http.js";
import moment from 'moment';
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
        Swiper,
    SwiperSlide,
updateWeatherTimer:null
},
data() {
//这里存放数据
return {
    dataGroup:[],
    rows:8,
    swiperOptions:{
        autoplay: {
      delay: 2000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
    slidesPerView: 1,    // 一行有几个
	SlidesPerColumn: 3,    // 显示多少行。多行模式下不支持loop
	// slidesPerGroup: 2,    // 多少列为一组
	observer:true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents:true,//修改swiper的父元素时，自动初始化swiper
    loop: true,
    // observer:true,
    direction: 'vertical',
    allowTouchMove: false,
    height: 20,
    speed: 500,

        // spaceBetween: 5,//设置slid swiper间的间距
        // direction: 'vertical',//设置轮播方向
        // slidesPerView: 2, //可视个数
        // loop: true, //设置循环
        // initialSlide:1,//暂时没发现有什么作用
        // loopAdditionalSlides: 3, //必须设置可视slide有3个，loopedSlides可设为5个或以上
        // grabCursor: true,

        // //设置匀速
        // speed: 3000,//轮播动画的时间，值越大，速度越慢
        // freeMode: true,//想要匀速运动的时候最好设置上
        // autoplay: {//自动轮播
        //   delay: 10,//自动切换的时间间隔，10ms切换一次，几乎不停留
        // },
        // observer: true, //修改swiper自己或子元素时，自动初始化swiper
        // observeParents: true, //修改swiper的父元素时，自动初始化swiper
        // observeSlideChildren: true,


    }
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
  this.getGardenList();
  this.updateDataByTimer();
},
//方法集合
methods: {
    updateDataByTimer() {
    if (this.updateWeatherTimer) {
      clearInterval(this.updateWeatherTimer);
    }
    this.updateWeatherTimer = setInterval(() => {
      this.getGardenList();
    }, 180000);
  },
   getGardenList() {
    this.$http.get(CGI.realTimeOrder, {}).then((res) => {
      if (res && res.data && res.status ==200) {
          let data = res.data;
        this.handleGrouping(data.rows);
        console.log('-------------实时订单数据--------------');
        console.log(res);
        


      }
    }).catch(err => {
          console.log(err);
        });
  },
     handleGrouping(dataList) {
    if (Array.isArray(dataList) && dataList.length) {
      const tempGroup = [];
      for (let i = 0; i < dataList.length; i += this.rows) {
        for (let j = 0; j < this.rows; j += 1) {
          if (!tempGroup[j]) {
            tempGroup[j] = [];
          }
          const employee = dataList[i + j] || {};
          // if (employee.date) {
          //   employee.joinDate = moment(employee.date).format('M月D日');
          // }
          tempGroup[j].push(employee);
        }
      }
      this.dataGroup = [...tempGroup];
    } else {
      this.dataGroup = [];
    }
  }
//     handleGrouping(dataList) {
//     if (Array.isArray(dataList) && dataList.length) {
//       const tempGroup = [];
//       let len = dataList.length;
//     //   debugger
//       //执行循环 一次
//       for (let i = 0; i < dataList.length; i += len) {//执行1次
//           //数据改造 把数据每一项的对象放到一个独立的数组中 再放到主数组
//         for (let j = 0; j < len; j += 1) {//执行30次
//             //若创建数组索引无数据 创建数组
//           if (!tempGroup[j]) {
//             tempGroup[j] = [];
//           }

//           const employee = [];//创建循环子项
//           for(let k= 0;k<dataList.length;k += 1){
//            employee.push(dataList[k] || {});
//           }

//         //   debugger
//         //   console.log(employee);
//         //当每一个子项数组插入主数组 代表已经生成一个轮播 立即改造数据 下一次索引递增 至到结束为止
//         let arr = dataList.filter((item, index) => {
//             return index > 0 && index < (dataList.length - 1)
//         });
//         dataList = [dataList[dataList.length-1],...arr,dataList[0]];
//         //   if (employee.date) {
//         //     employee.joinDate = moment(employee.date).format('M月D日');
//         //   }

//         //把每一个轮播放进主列表
//           tempGroup[j].push(employee);
//         }
//       }

// this.$nextTick(() => {
			
//           this.dataGroup = [...tempGroup];//滚动个数
          
//       console.log(this.dataGroup);
//           debugger
// 			})

      
//     } else {
//       this.dataGroup = [];
//     }
//   }
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

<style lang="less" scoped>
.real-time-order{
  display: flex;
  height: 100%;
// height: 267px;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  color: #b8cdd9;
  .real-time-order-roll-group:last-child {
    margin-bottom: 0;
  }
  .real-time-order-roll-group {
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    margin-bottom: 16px;
    .real-time-order-roll-item {
      position: relative;
      width: 100%;
      height: 100%;
      > div {
        display: inline-block;
        width: 20%;
        text-align: center;
        &:first-child {
          text-align: left;
        }
        &:last-child {
          width: 37%;
          text-align: right;
          color: #0087e6;
        }
        .font_color {
          color: #00ffde;
        }
      }
    }
  }
}
</style>