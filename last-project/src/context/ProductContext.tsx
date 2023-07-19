import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

interface propType{
    children:any
}
interface productType{
    id:number,
    title:string,
    photo:string
}

export const ProductContext = createContext<productType[] | any[]>([]);

export const ProductProvider =(props:propType)=>{
    const [productitem , setProductitem] = useState<productType[]>([]);

    useEffect(()=>{
       axios
       .get('https://mocki.io/v1/dae8d762-831f-4c64-bc53-06d7797530e6')
       .then((res:any)=>{setProductitem(res.data)})
       .catch((error: any) => console.log(error));
    },[])

return <ProductContext.Provider value={[productitem, setProductitem]}>
       {props.children}

</ProductContext.Provider>

}