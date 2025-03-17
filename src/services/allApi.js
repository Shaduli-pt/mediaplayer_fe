import { serverurl } from "./serverUrl";
import { commonApi } from "./commonApi";

//api call for upload video

export const uploadVideo = async(reqBody)=>{
    return await commonApi('POST',`${serverurl}/videos`,reqBody)
}

// get all videos api call

export const getAllVideos = async ()=>{
    return await commonApi('GET', `${serverurl}/videos`,"")
}

//delete video
export const deleteVideo = async(id)=>{
    return await commonApi('DELETE',`${serverurl}/videos/${id}`,{})   //here DELETE is a default method    
}

// add to history
export const addToHistory  = async(data)=>{
    return await commonApi('POST',`${serverurl}/history`, data)
}

// get all watch history

export const getHistory = async()=>{
    return await commonApi('GET', `${serverurl}/history`,"")
}

// Delete History
export const deleteWatchHistory = async(id)=>{
    return await commonApi('DELETE',`${serverurl}/history/${id}`,{})
}

// Add category
export const addCategory = async(data)=>{
    return await commonApi('POST',`${serverurl}/categories`,data)
}

//get all categories
export const getAllCategories = async ()=>{
    return await commonApi('GET',`${serverurl}/categories`,"")
}

//Delete category

export const deleteVideoCategory = async(data)=>{     //ivide id or data vilikkam
    return await commonApi('DELETE',`${serverurl}/categories/${data}`,{})  // ath thanne ivideyum vilikkuka
}
