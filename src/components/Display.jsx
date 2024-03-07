    import { useRef, useState } from 'react';
    import { FaMagnifyingGlass } from "react-icons/fa6";
    import WeatherDisplay from './WeatherDisplay';

    const Display = ({state, setState, city, setCity, fetchLatLng, weather}) => {
    const inputRef = useRef()
    const [input, setInput] = useState('')

    const handleEnter = (event) => {
        if (event.key !== "Enter") return;
      
        const parts = input.split(',');
      
        // Update state immediately if all conditions pass
        if (parts.length === 2 && parts[0].trim() && parts[1].trim()) {
          setCity(parts[0].trim());
          setState(parts[1].trim());
          fetchLatLng();
          setInput("");
          return;
        }
      
        alert("Please enter a valid city and state.");
        setInput("");
      }

    const handleChange = (event) => { //sets input everytime there is a keystroke
        setInput(event.target.value)
    }

    return (
        <>
            <div className='bg-gray-600 flex h-fit w-[50vw] min-w-[400px] max-w-[650px] flex-col items-center sm:h-screen'>
                <div className='bg-transparent flex justify-center items-center w-full mt-10'>
                    <div className='bg-[#EFEFEF] my-4 px-6 py-3 flex rounded-full w-3/4 h-2/3 items-center'>
                        <input 
                            type="text"
                            placeholder="City, State"
                            className='w-full bg-[#EFEFEF] outline-none'
                            ref={inputRef}
                            onChange={handleChange}
                            onKeyDown={handleEnter}
                        />
                        <div onClick={() => inputRef.current.focus()}>
                            <FaMagnifyingGlass size = {25} color = '#748CF1'/>
                        </div>
                    </div>
                </div>
                <div className='bg-[#D9F3FF] flex w-5/6 h-3/5 mt-20 flex-col rounded-3xl'>
                    <WeatherDisplay
                        city={city}
                        state={state}
                        weather={weather}
                    />
                </div>
            </div>
            
        </>
    )
}

export default Display //exports the function Display