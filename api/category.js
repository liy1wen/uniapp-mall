
// 分类接口api
import request from "../utils/request.js"

const getCategoryData = () => request('api/profiles/category','get') //获取分类数据

export default {
	getCategoryData
}