import Vue from "vue";
// 全局组件的信息刷新就会消失 但是移动端没有刷新功能 所以 用不用storejs都可以
import Vuex from "vuex";
// console.log("OK");
Vue.use(Vuex);

// 定义全局使用的属性,不能改
const state = {
	name: "苹果",
	num: 0,
	price: 16,
	arr: [],
}
//定义同步方法
const mutations = {
	add(state) {
		//state获取state里面的属性值,默认第一个就是 data 获取视图传入的数
		// 购物车
		//1,在这边state里面放一个空数组,进行判断,看里面是否有数据
		//2,如果没有的话直接把data/ push到这个空数组里面
		//3,如果有 {3.1先判断此时传过来的data.name或id 是否存在,存在的话就直接num++,}
		// {如果不存在,就把数据再次push到数组里面(不可以直接用一个if)}
		state.num++;
	}
}
//定义 computed(属性计算)
const getters = {
	count(state) {
		return state.num * state.price;
	}
}

//定义异步方法,可以在这个里面做一些异步操作,比如调用通用数据接口
const actions = {
	syFn(context) {
		// context.state  可以取 state 属性
		// context.commit  可以调用 mutations 同步方法 属性
		// context.dispatch可以调用 actions 异步方法 属性
		// 在组件里面调用 也是一样,同上面的方法一直 
	},
	test(context, data) {
		// console.log(data)
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
