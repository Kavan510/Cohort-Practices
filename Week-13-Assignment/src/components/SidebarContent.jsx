import { Home } from "../assets/home"
export function SidebarContent({isOpen}){

    if(!isOpen){
        return(
            <div className="pt-2">

             <Home/> 
            </div>
        ) 
    }
    return (
        <div className="flex pt-2">
            <div>
                <Home/>
            </div>
            <div>
                Home
            </div>
        </div>
    )


}