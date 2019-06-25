import request from "./http"
import params from "./params"
import mock from "@/mock/mock"
// console.log(params);
class Apls{
	joke(data){
		return request({
			method:"get",
			url:"/json1811.ashx/joke",
			params:data
		})
	}
	mockLogin(){
		return mock.get("/login", {
			params: {
			  name: 12345
			}
		  })
	}
	mockTest(){
		return mock.post("/test", {
			params: {
				name: 12345
			}
		  })
	}
}


export default new Apls();