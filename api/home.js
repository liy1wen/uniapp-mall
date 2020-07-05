// 首页接口api
import request from "../utils/request.js"

const getMallData = () => request('api/profiles/mall_list','get') //获取首页数据

export default {
	getMallData
}