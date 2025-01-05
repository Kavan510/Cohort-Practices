
import { useState } from "react";
import { SidebarToggle } from "./SidebarToggle";
import { SidebarContent } from "./SidebarContent";
export function Sidebar({isOpen,setOpen}){

    if(!isOpen){

        return (
         
            <div className="h-screen bg-yellow-50 w-8">

            <div className=" top-0 left-0">
                <div className="cursor-pointer hover:bg-slate-200" onClick={()=>{
                    setOpen(!isOpen);
                }}>
                    <SidebarToggle/>
                    <SidebarContent isOpen={isOpen}/>
                </div>
                    </div>

            </div>
)

}

return <div className="w-96 h-screen bg-slate-300 top-0 left-0 md:relative fixed ">
    <div>
        <div className="cursor-pointer hover:bg-slate-200 " onClick={()=>{
            setOpen(!isOpen)
        }}>
                    <SidebarToggle/>
                    <SidebarContent isOpen={isOpen}/>

        </div>
    </div>


</div>
}