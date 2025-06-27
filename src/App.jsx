import { useState } from "react";
import { MdOutlineClear } from "react-icons/md";

function App() {

  const [input,setInput] =useState("");

  const handleClick=(value)=>{
    setInput(input+value)
  }

  const handleEqual=()=>{
    try{
      setInput(eval(input));
    }
    catch{
      setInput("Error")
    }
  }

  const handleClear=()=>{
    setInput("");
  }

  const handle1Clear=()=>{
    setInput(input.slice(0,-1))
  }
  

  return (
    <>
      <div className='w-full min-h-screen bg-zinc-700 flex justify-center items-center'>
       
        
        <div className='p-2 w-2/6  border-2 border-blue-200 rounded-4xl '>

          <div className="p-4 text-3xl font-bold flex justify-center items-center"><input className="text-right border-2 border-purple-950 inset-2 inset-shadow-blue-500 rounded-2xl h-14 " type="text" value={input}/></div>

          <div className="grid grid-cols-4 gap-2 text-2xl font-bold">
            <div className="bg-stone-800 p-8 rounded-2xl inset-shadow-sm inset-shadow-purple-950"><button onClick={handleClear}>C</button></div>
            <div className="bg-stone-800 p-8 rounded-2xl inset-shadow-sm inset-shadow-purple-950"><button onClick={()=>handleClick('/')}>/</button></div>
            <div className="bg-stone-800 p-8 rounded-2xl inset-shadow-sm inset-shadow-purple-950"><button onClick={()=>handleClick('-')}>-</button></div>
            <div className="bg-stone-800 p-8 rounded-2xl inset-shadow-sm inset-shadow-purple-950"><button onClick={handle1Clear}><MdOutlineClear /></button></div>
            

            <div className="bg-stone-800 p-8 rounded-2xl inset-shadow-sm inset-shadow-purple-950"><button onClick={()=>handleClick('7')}>7</button></div>
            <div className="bg-stone-800 p-8 rounded-2xl inset-shadow-sm inset-shadow-purple-950"><button onClick={()=>handleClick('8')}>8</button></div>
            <div className="bg-stone-800 p-8 rounded-2xl inset-shadow-sm inset-shadow-purple-950"><button onClick={()=>handleClick('9')}>9</button></div>
            <div className="bg-stone-800 p-8 rounded-2xl inset-shadow-sm inset-shadow-purple-950"><button onClick={()=>handleClick('*')}>*</button></div>

            <div className="bg-stone-800 p-8 rounded-2xl inset-shadow-sm inset-shadow-purple-950"><button onClick={()=>handleClick('4')}>4</button></div>
            <div className="bg-stone-800 p-8 rounded-2xl inset-shadow-sm inset-shadow-purple-950"><button onClick={()=>handleClick('5')}>5</button></div>
            <div className="bg-stone-800 p-8 rounded-2xl inset-shadow-sm inset-shadow-purple-950"><button onClick={()=>handleClick('6')}>6</button></div>
            <div className="bg-stone-800 p-8 rounded-2xl inset-shadow-sm inset-shadow-purple-950"><button onClick={()=>handleClick('+')}>+</button></div>

            <div className="bg-stone-800 p-8 rounded-2xl inset-shadow-sm inset-shadow-purple-950"><button onClick={()=>handleClick('1')}>1</button></div>
            <div className="bg-stone-800 p-8 rounded-2xl inset-shadow-sm inset-shadow-purple-950"><button onClick={()=>handleClick('2')}>2</button></div>
            <div className="bg-stone-800 p-8 rounded-2xl inset-shadow-sm inset-shadow-purple-950"><button onClick={()=>handleClick('3')}>3</button></div>
            <div className="bg-stone-800 p-8 row-span-2 rounded-2xl inset-shadow-sm inset-shadow-purple-950 flex justify-center items-center"><button onClick={handleEqual}>=</button></div>

            <div className="bg-stone-800 p-8 col-span-2 rounded-2xl inset-shadow-sm inset-shadow-purple-950 flex justify-center items-center"><button onClick={()=>handleClick('')}>0</button></div>
            <div className="bg-stone-800 p-8 rounded-2xl inset-shadow-sm inset-shadow-purple-950"><button onClick={()=>handleClick('.')}>.</button></div>
            
            
          </div>
          

        </div>
      </div>
    </>
  )
}

export default App
