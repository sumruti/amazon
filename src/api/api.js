import axios from "axios";
import config from "../config.json";



export function get_data(keyword,examiner,status,assignee) {

	  if(examiner== ''  ||  status == '' ||  assignee == ''){

	  		return axios.get(config.ApiUrl+'?q='+keyword);

	  }else{

            return axios.get(config.ApiUrl+'?q='+keyword+'&fqa='+"examiner:"+examiner+""+'&fqa='+"examiner:"+status+""+'&fqc='+"assignee:"+assignee+"");
	  }
	
};


export function get_filter_data() {
	  return axios.get(config.ApiUrl+'?q=*');
};






//https://www.patentbell.com/oa_query_dossier4?q=skill&fqa=%22examiner:dennis,%20michael%20david%22
//https://www.patentbell.com/oa_query_dossier4?q=skill&fqa=examiner:chen,%20tse%20w,chriss,%20jennifer%20a