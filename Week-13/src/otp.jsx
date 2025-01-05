import { useRef } from "react";
export function Otp(){

    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();

    return <div className=" flex justify-center">
        <OtpText reference={ref1} onDone={()=>{
            ref2.current.focus();
        }}/>
        <OtpText reference={ref2}onDone ={()=>{
            ref3.current.focus();
        }} />
        <OtpText reference={ref3} onDone= {()=>{
            ref4.current.focus();
        }} />
        <OtpText reference={ref4}onDone={()=>{
            ref5.current.focus();
        }} />
        <OtpText reference={ref5}onDone={()=>{
            ref6.current.focus();
        }} />
        <OtpText reference={ref6}/>

    </div>
}

function OtpText({
    reference,onDone
}){
return <div>
    <input  ref={reference} onChange={(e)=>{
        onDone();
    }} type="text" className=" m-1 outline-none w-[40px] h-[50px] rounded-2xl bg-blue-500" />
</div>


}