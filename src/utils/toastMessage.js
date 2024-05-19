import {toast} from 'react-hot-toast'
export const successToast=(message)=>{
    toast.success(message,{
        position: "top-center",      
        autoClose: 100,              
        hideProgressBar: false,      
        closeOnClick: true,      
        pauseOnHover: true,       
        draggable: true,         
        progress: undefined,        
        theme: "dark", 
        style: { background: "#00ad1d", color: "white" },          
        
      });
}

export const errorToast=(message)=>{
    toast.error(message,{
        position: "top-center",      
        autoClose: 100,              
        hideProgressBar: false,      
        closeOnClick: true,      
        pauseOnHover: true,       
        draggable: true,         
        progress: undefined,        
        theme: "dark", 
        style: { background: "red", color: "white" },          
        
      });
}