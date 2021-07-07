<!--
 * @Description: 
-->
<template>
  <div class="container">
    <div class="container-one">
      <div class="user-box">
        <div class="user-avator">
          <!-- <svg-icon icon-class='Totoro' className="Totoro-icon" /> -->
          <img src="../assets/img/36.png" class="img-avator" alt />
          <div class="user-name">
            <p class="user-name-item">泡泡茶壶</p>
            <p class="use-induce-item">你好,泡泡茶壶,欢迎来VUE3世界</p>
          </div>
        </div>
      </div>
      <div class="tip-box">
        <div class="tip-item item-one">
          <div class="icon-box chaseBox">
            <svg-icon icon-class='chase' className="tip-icon" />
          </div>
          <div class="grid-cont-right">
            <div class="grid-num">339</div>
            <div>追番数</div>
          </div>
        </div>
        <div class="tip-item item-two">
          <div class="icon-box todolistBox">
            <svg-icon icon-class='todolist' className="tip-icon" />
          </div>
          <div class="grid-cont-right">
            <div class="grid-num">39</div>
            <div>待办事项</div>
          </div>
        </div>
        <div class="tip-item item-three">
          <div class="icon-box msgBox">
            <svg-icon icon-class='msg' className="tip-icon" />
          </div>
          <div class="grid-cont-right">
            <div class="grid-num">393</div>
            <div>系统消息</div>
          </div>
        </div>
        <div class="tip-item item-four">
          <div class="icon-box githubBox">
            <svg-icon icon-class='github' className="tip-icon" />
          </div>
          <div class="grid-cont-right">
            <div class="grid-num">3</div>
            <div>项目数量</div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-two">
      <div class="quick-nav">
        <el-card class="box-card" shadow="hover">
          <template #header>
            <div>快捷导航</div>
          </template>
          <table border="1">
            <tr>
              <td>
                <div class="nav-item">
                  <svg-icon icon-class='home' className="Icon home-icon" />
                  <p class="nav-item-name">首页</p>
                </div>
              </td>
              <td>
                <div class="nav-item">
                  <svg-icon icon-class='user' className="Icon user-icon" />
                  <p class="nav-item-name">用户</p>
                </div>
              </td>
              <td>
                <div class="nav-item">
                  <svg-icon icon-class='skill' className="Icon skill-icon" />
                  <p class="nav-item-name">设置</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="nav-item">
                  <svg-icon icon-class='menu' className="Icon menu-icon" />
                  <p class="nav-item-name">菜单</p>
                </div>
              </td>
              <td>
                <div class="nav-item">
                  <svg-icon icon-class='component' className="Icon component-icon" />
                  <p class="nav-item-name">组件</p>
                </div>
              </td>
              <td>
                <div class="nav-item">
                  <svg-icon icon-class='chart' className="Icon chart-icon" />
                  <p class="nav-item-name">图表</p>
                </div>
              </td>
            </tr>
          </table>
        </el-card>
      </div>
      <div class="chart-nav">
        <el-card shadow="hover" class="chart-box">
          <template #header>
            年度追番
          </template>
          <div id="chart-contain" class="chart-contain"></div>
        </el-card>
      </div>
    </div>
    <div class="container-three">
      <div class="dynamic-nav">
        <el-card shadow="hover" class="chart-box">
          <template #header>
            动态信息
          </template>
          <el-scrollbar>
            <ul class="dynamic-timeline">
              <li class="dynamic-timeline-item">
                <div class="timeline-item-line"></div>
                <div class="timeline-item-icon"></div>
                <div class="timeline-item-content"></div>
              </li>
            </ul>
          </el-scrollbar>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import * as echarts from 'echarts';
  import {
    defineComponent,
    ref,
    onMounted,
    nextTick
  } from 'vue'
  export default defineComponent({
    setup() {
      const initChart = () => {
        const dom: any = document.getElementById('chart-contain')
        const myChart = echarts.init(dom);
        const option = {
          title: {
            // text: "年度追番",
            textStyle: {
              fontWeight: 'normal',
              fontSize: '18'
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          toolbox: {
            top: '5px',
            feature: {
              dataView: {
                show: true,
                readOnly: false
              },
              magicType: {
                show: true,
                type: ['line', 'bar']
              },
              restore: {
                show: true
              },
              saveAsImage: {
                show: true
              }
            }
          },
          legend: {
            data: ['新番', '旧番', '总追番量占比'],
            top: '5px',
          },
          xAxis: [{
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
              type: 'shadow'
            }
          }],
          yAxis: [{
              type: 'value',
              // name: '水量',
              min: 0,
              max: 250,
              interval: 50,
              axisLabel: {
                formatter: '{value} '
              }
            },
            {
              type: 'value',
              // name: '温度',
              min: 0,
              max: 25,
              interval: 5,
              axisLabel: {
                formatter: '{value} %'
              }
            }
          ],
          series: [{
              name: '新番',
              type: 'bar',
              data: [112, 43, 17, 123, 25, 76, 135, 162, 32, 120, 16, 8]
            },
            {
              name: '旧番',
              type: 'bar',
              data: [112, 52, 19, 116, 28, 90, 175, 182, 48, 118, 16, 10]
            },
            {
              name: '总追番量占比',
              type: 'line',
              yAxisIndex: 1,
              data: [11.0, 12.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 5]
            }
          ]
        };
        myChart.setOption(option, {
          notMerge: true
        })
      }
      onMounted(() => initChart())

      return {
        initChart
      }
    }
  })
</script>

<style lang="less" scoped>
  .container {
    width: 100%;
    height: 100%;
    // background: #fff;
    // border: 1px solid rgba(0, 0, 0, .1);
    // border-radius: 5px;
    box-sizing: border-box;
  }

  .container-one {
    width: 100%;
    overflow: hidden;
  }

  .user-box {
    float: left;
    padding: 20px;
    width: 33%;
    height: 100%;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, .1);
    border-radius: 5px;
    box-sizing: border-box;
  }

  .img-avator {
    margin-right: 15px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    box-sizing: border-box;
    border: solid 2px rgba(45, 140, 240, .5);
  }

  .user-avator {
    width: 100%;
    align-items: center;
    display: flex;

    .Totoro-icon {
      width: 10rem;
      height: 10rem;
    }

    .user-name {
      font-size: 30px;
      color: #222;
    }

    p {
      margin: 0;
    }

    .use-induce-item {
      margin-top: 10px;
      font-size: 20px;
      background-image: -webkit-linear-gradient(left, blue, #3eede7 10%, #cc00ff 20%, #d3142e 30%, #b8b8eb 40%, #1d7979 50%, #b8b8eb 60%, #CC00CC 70%, #d3142e 80%, #3eede7 90%, blue 100%);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      background-size: 200% 100%;
      animation: masked 4s linear infinite;
    }
  }

  @keyframes masked {
    0% {
      background-position: 0 0;
    }

    100% {
      background-position: -100% 0;
    }
  }

  .tip-box {
    margin-left: 15px;
    float: left;
    width: calc(67% - 15px);
    height: 100%;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, .1);
    border-radius: 5px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    padding: 20px 20px;
  }

  .tip-item {
    width: calc(25% - 20px);
    height: 120px;
    border: 1px solid rgba(0, 0, 0, .1);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    transition: transform .2s ease-in-out;

    .icon-box {
      font-size: 30px;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      text-align: center;
      line-height: 80px;
      color: #fff;

      .tip-icon {
        width: 2em;
        width: 2em;
        vertical-align: middle;
      }
    }

    &:hover {
      transform: scale(1.05, 1.05);
    }
  }

  .chaseBox {
    background: rgb(242, 94, 67);
  }

  .todolistBox {
    background: #3eede7;
  }

  .msgBox {
    background: rgb(100, 213, 114);

  }

  .githubBox {
    background: rgb(45, 140, 240);
  }

  .grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
  }

  .grid-num {
    font-size: 30px;
    font-weight: bold;
  }

  .container-two {
    margin-top: 15px;
    width: 100%;
    position: relative;
    overflow: hidden;

    .quick-nav {
      width: 40%;
      float: left;
    }

    .chart-nav {
      width: calc(60% - 15px);
      margin-left: 15px;
      float: left;
    }

    .chart-contain {
      width: 100%;
      height: 200px;
    }
  }

  table {
    border-collapse: collapse;
    width: 100%;
    border: none;
    height: 200px;
  }

  table tr td {
    text-align: center;
    padding: 20px 0;

    .nav-item {
      cursor: pointer;
      display: inline-block;
    }

    .Icon {
      width: 2em;
      height: 2em;
    }

    .home-icon {
      fill: rgb(31, 218, 202);
    }

    .user-icon {
      fill: rgba(77, 175, 27);
    }

    .skill-icon {
      fill: rgb(191, 12, 44);
    }

    .menu-icon {
      fill: rgb(63, 178, 127);
    }

    .component-icon {
      fill: rgb(225, 133, 37);
    }

    .chart-icon {
      fill: rgb(0, 216, 255);
    }

    p {
      margin: 0;
    }
  }

  .container-three {
    margin-top: 15px;
    width: 100%;
    position: relative;

    .dynamic-nav {
      width: 30%;
    }
  }

  .dynamic-timeline {
    list-style: none;
    padding: 0;
  }

  .dynamic-timeline-item {
    padding-bottom: 20px;
    position: relative;
  }

  .timeline-item-line {
    position: absolute;
    left: 4px;
    height: 100%;
    border-left: 2px solid #e4e7ed;
  }
</style>