// import axios from 'axios';
import axios from './axiosConfig.ts'

axios.defaults.baseURL = process.env.NODE_ENV;

// const apiUrl = "https://localhost:5256"

export default {
  getTasks: async () => {
    const result = await axios.get(`items`)
    
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    const result = await axios.post(`/`,null,{params: {name}})    
    return result.data;
  },

  setCompleted: async(id, isComplete)=>{
   
    // console.log('setCompleted', {id, isComplete})
    const result = await axios.patch(`/${id}`,null,{params:{IsComplete:isComplete}})     
    return result.data;
  },

  deleteTask:async(id)=>{
    const result = await axios.delete(`/${id}`)     
    return result.data;
  }
};
