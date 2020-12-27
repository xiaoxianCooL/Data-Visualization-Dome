/*
 * @Description:
 * @Author: panghf
 * @Date: 2020-05-13 11:03:16
 * @LastEditors: panghf
 * @LastEditTime: 2020-08-06 00:25:55
 */
const Base = 'https://www.lxnhs.com/myapi';
const Base1 = 'http://192.26.135.95:8001';

const MapDataInfo = `${Base}/ring/board/getMapData`;// 地图数据
const statisticalData = `${Base}/ring/board/statisticalData`;// 全国门店各项数据统计
const realTimeOrder = `${Base}/ring/board/realTimeOrder`;// 实时订单
const numberOfUsersStatistics = `${Base}/ring/board/numberOfUsersStatistics`;// 用户数量统计
const trendStatistics = `${Base}/ring/board/trendStatistics`;// 各单位趋势统计
const WeatherDataInfo = `https://restapi.amap.com/v3/weather/weatherInfo?city=440114&key=8d4730fb158ee7adef7c120d2cda7e8a`; // 高德地图天气接口

export default {
    MapDataInfo,
    WeatherDataInfo,
    statisticalData,
    realTimeOrder,
    numberOfUsersStatistics,
    trendStatistics,
}

