import axios from "axios";
import config from "../config.json";



export function get_data(keyword) {
	  return axios.get(config.ApiUrl+keyword);
};




