
<template>
  <div class="FlipClock">
    <!-- <Flipper ref="flipperHour1" />
    <Flipper ref="flipperHour2" /> -->
    <!-- <em>,</em> -->
    <Flipper ref="flipperMinute1" />
    <Flipper ref="flipperMinute2" />
    <Flipper ref="flipperMinute3" />
    <!-- <em>:</em> -->
    <!-- <Flipper ref="flipperSecond1" />
    <Flipper ref="flipperSecond2" />-->
  </div>
</template>

<script >
import Flipper from "./flipper";

export default {
  name: "FlipClock",
  props: {
    defaultNum: {//初始化显示的数字，默认为0000
      type: [String],
      default: "00230"
    },
    changeNum:{
      type: [String],
      default: "12345"
    }
  },
  data() {
    return {
      timer: null,
      flipObjs: []
    };
  },
  watch: {
    changeNum(val) {
      this.flipObjs = [
        // this.$refs.flipperHour1,
        // this.$refs.flipperHour2,
        this.$refs.flipperMinute1,
        this.$refs.flipperMinute2,
        this.$refs.flipperMinute3
        // this.$refs.flipperSecond1,
        // this.$refs.flipperSecond2
      ];
      this.init();
      this.run();
    }
  },
  components: {
    Flipper
  },
  methods: {
    // 初始化数字
    init() {
      let nowTimeStr = this.defaultNum;
      console.log(this.defaultNum);
      // debugger
      for (let i = 0; i < this.flipObjs.length; i++) {
        this.flipObjs[i].setFront(nowTimeStr[i]);
      }
    },
    // 开始计时
    run() {
        let nowTimeStr =  this.defaultNum;
        let nextTimeStr = this.changeNum;
        for (let i = 0; i < this.flipObjs.length; i++) {
          if (nowTimeStr[i] === nextTimeStr[i]) {
            continue;
          }
          this.flipObjs[i].flipDown(nowTimeStr[i], nextTimeStr[i]);
        }

    },


  },
  mounted() {
    console.log(this.defaultNum);
  }
};
</script>

<style scoped>
.FlipClock {
  text-align: center;
}
.FlipClock .M-Flipper {
  margin: 0 3px;
}
.FlipClock em {
  display: inline-block;
  line-height: 102px;
  font-size: 66px;
  font-style: normal;
  vertical-align: top;
}
</style>