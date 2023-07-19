import {v4 as uuid} from 'uuid';

export const addblog =({title, desc, img}:any)=>({
 type:"ADD_BLOG",
 blog:{
    id:uuid(),
    title,
    desc, 
    img
 }

})

export const editblog =(id:string, update:string[])=>({
type:"UPDATE_BLOG",
id,
update
})

export const removeblog =({id}:any)=>({
type:"REMOVE_BLOG",
id
})