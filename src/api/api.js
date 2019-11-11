import axios from "axios";
import config from "../config.json";



export function get_data(keyword,examiner,status,assignee) {

	 /* if(examiner== ''  ||  status == '' ||  assignee == ''){

	  		return axios.get(config.ApiUrl+'?q='+keyword);

	  }else{*/

            return axios.get(config.ApiUrl+'?q='+keyword+'&fqa='+"examiner:"+examiner+""+'&fqa='+"examiner:"+status+""+'&fqc='+"assignee:"+assignee+"");
	  //}
	
};


export function get_filter_data() {
	  return axios.get(config.ApiUrl+'?q=*');
};





