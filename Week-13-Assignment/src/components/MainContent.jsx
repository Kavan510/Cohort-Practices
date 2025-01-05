

export function MainContent(){
    return  <div className='w-full'>
    <div className='h-72 bg-blue-400 hidden md:block'></div>
    <div className='grid grid-cols-11 gap-8 p-8'>
      <div className='h-96 rounded-2xl  bg-red-200 md:col-span-2 -translate-y-24 -lg  col-span-11 hidden md:block'>

      </div>
      <div className='h-96 rounded-2xl  bg-green-200 md:col-span-6 -lg col-span-11'>

      </div>
      <div className='h-96 rounded-2xl  bg-yellow-200 md:col-span-3 -lg col-span-11'>

      </div>
    </div>
  </div>
}