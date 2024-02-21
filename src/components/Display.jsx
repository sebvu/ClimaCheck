import { FaMagnifyingGlass } from "react-icons/fa6";

const Display = () => {
  return (
    <>
        <div className='bg-red-500 w-[33vw] h-screen min-w-[350px]'>
            <div className='w-full bg-green-500 flex justify-center items-center py-5'>
                <div className='bg-[#EFEFEF] w-3/4 py-2 px-4 rounded-full flex items-center'>
                <input 
                    type="text"
                    placeholder="City, State"
                    className='w-full bg-[#EFEFEF]'
                />
                    <FaMagnifyingGlass size = {25} color = '#748CF1'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Display //exports the function Display