import { useCallback, useEffect, useState,useRef } from 'react'
import { use } from 'react'
function App() {
  const [password, setPassword] = useState('')
  const [length, SetLength] = useState(8)
  const [numberAllowed, setNumberAllwoed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  // used useRef hook
  const passwordRef = useRef(null) 
  
  // here started passwordGenerator ()
  const passwordGenerator = useCallback( () => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      const number = "0123456789"
      const specalChar = "`~!@#$%^&*_-+=(){}[]"
      if(numberAllowed) str += number
      if(charAllowed) str += specalChar
      for(let i=1; i<=length; i++){
        const rendomIndex = Math.floor(Math.random() *str.length +1)
        pass += str.charAt(rendomIndex)
      }
      setPassword(pass)
      setIsCopied(false)
  }, [length,numberAllowed,charAllowed,setPassword])
  // here ended passwordGeneratoe ()

  // here started copyPasswordToClipboard()
  const copyPasswordToClipboard = useCallback(()=>{
    if(!password) return;
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length);
    window.navigator.clipboard.writeText(password)
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000)
  },[password,length])
      
  // here ended copyPasswordToClipboard()

      // this code use for generate password without manualy called passwordGenerator()
     // useEffect( () => {
     //       passwordGenerator()
     //     }, [length,numberAllowed,charAllowed,passwordGenerator]) 

  return (
    <>
     <div className=' w-[420px] mx-auto md:w-[510px] lg:w-[650px] bg-gray-700 rounded-lg  shadow-md px-4 py-6 mt-14'>
       <h1 className='text-2xl text-center text-blue-400 md:text-3xl'>Password Generator</h1>
       <div className='flex justify-center overflow-hidden'>
        <input 
          type="text"
          placeholder='Password'
          value={password}
          readOnly
          ref={passwordRef}
          className='bg-white text-orange-700 px-4 py-2 md:px-5 md:py-3 rounded-l-2xl w-[280px] md:w-[350px] lg:w-[420px] my-4 outline-none shadow-lg'/>
               <button  className={`rounded-r-2xl px-4 py-2 md:px-5 md:py-3 my-4 shadow-lg border-[1px] border-white ${
                  password ? (isCopied ? 'bg-gray-900 text-[#b3b3b3]' : 'bg-blue-500 hover:bg-blue-700 text-white')
                  : 'bg-blue-500 hover:bg-blue-700 cursor-not-allowed text-white'
                  }`}  
                  onClick={copyPasswordToClipboard}
                  disabled = {!password}>
                  
                  { password ? (isCopied ? 'Copied!' : 'Copy') : 'Copy'}
              </button>
       </div>
       <div className='flex justify-center my-4 text-sm gap-x-2 md:gap-x-3 lg:gap-x-5 md:text-lg lg:text-2xl'>
         <div className='flex items-center text-orange-700 gap-x-1 lg:gap-x-2'>
           <input type="range"
            value={length}
            min={6}
            max={100}
            className='cursor-pointer '
            onChange={(e) => {SetLength(e.target.value)}}
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className='flex items-center text-orange-700 gap-x-1 lg:gap-x-2'>
           <input type="checkbox"
            defaultChecked = {numberAllowed}
            id='numberInput'
            className='cursor-pointer '
            onChange={() => {setNumberAllwoed((previous) => !previous)}}
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div className='flex items-center text-orange-700 gap-x-1 lg:gap-x-2'>
           <input type="checkbox"
            defaultChecked = {charAllowed}
            id='charInput'
            className='cursor-pointer '
            onChange={() => {setCharAllowed((previous) => !previous)}}
            />
            <label htmlFor="">Characters</label>
          </div>
       </div>
     </div>
      <div className='flex items-center justify-center my-6'>
         <button 
           className=' bg-gray-700 rounded-lg p-3 font-bold text-white hover:text-[#b3b3b3] border-[1px] border-white hover:border-blue-600 shadow-lg ' 
           onClick={passwordGenerator}>
           Generate Password
          </button>
      </div>
    </>
  )
}
export default App
