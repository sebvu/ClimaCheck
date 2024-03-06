    import { useRef } from 'react';
    import { FaMagnifyingGlass } from "react-icons/fa6";

    const Display = ({state, setState, city, setCity, fetchLatLng}) => {
    const inputRef = useRef()

    return (
        <>
            <div className='bg-gray-600 flex h-fit w-[45vw] min-w-[400px] max-w-[650px] flex-col items-center sm:h-screen'>
                <div className='bg-transparent flex justify-center items-center w-full mt-10'>
                    <div className='bg-[#EFEFEF] my-4 px-6 py-3 flex rounded-full w-3/4 h-2/3 items-center'>
                        <input 
                            type="text"
                            placeholder="City, State"
                            className='w-full bg-[#EFEFEF] outline-none'
                            ref={inputRef}
                        />
                        <div onClick={() => inputRef.current.focus()}>
                            <FaMagnifyingGlass size = {25} color = '#748CF1'/>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Display //exports the function Display