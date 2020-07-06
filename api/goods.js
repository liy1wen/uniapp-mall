// 首页接口api
import request from "../utils/request.js"

const getGoodsList = () => request('api/profiles/goodslist','get') //获取商品列表
const getGoodsDetails = () => request('api/profiles/goods','get') //获取商品详情信息

export default {
	getGoodsList,
	getGoodsDetails
}