
import { TextField,Stack,Button } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {

  const [interest,setInterst] = useState(0)
  const [priciple,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)

  const validateInputs = (inputTag)=>{
    console.log(typeof inputTag);
    const {name,value} = inputTag
    console.log(name,value);
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    console.log(!!value.match(/^\d*\.?\d+$/));

    
    
  }

  return (
    <>
     <div style={{width:'100%',minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{width:'600px'}} className='bg-light rounded p-5'>
          <h3>Simple Interest Calculator</h3>
          <p>Calculate your simple interest Easily!</p>
          <div className='bg-warning p-3 text-light text-center rounded'>
            <h1>₹ 1500</h1>
            <p className='fa-bolder'>Total Simple Interest</p>
          </div>
          <form className='mt-5'>
            {/* principle */}
            <div className='mb-3'>
            <TextField name='principle' onChange={(e)=>validateInputs(e.target)} className='w-100' id="outlined-priciple" label="priciple amount ₹" variant="outlined" />
            </div>
            {/*Rate  */}
            <div className='mb-3'>
            <TextField className='w-100' id="outlined-rate" label="Rate of interest(%)" variant="outlined" />
            </div>
            {/* Year */}
            <div className='mb-3'>
            <TextField className='w-100' id="outlined-year" label="Time period (yr)" variant="outlined" />
            </div>
            <Stack direction="row" spacing={2}>
            <Button variant="contained" style={{width:'50%',height:'60px'}} className='bg-dark'>Calculate</Button>
            <Button variant="outlined" style={{width:'50%',height:'60px'}} className='border border-dark text-dark'>Reset</Button>
             </Stack>
          </form>
        </div>
     
      </div>
    </>
  )
}

export default App
