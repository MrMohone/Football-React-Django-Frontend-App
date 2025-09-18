import {React, useState, useEffect } from 'react'
import AxiosInstance from './Axios'
import {Box, Typography} from '@mui/material'
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import TextFrom from './forms/TextForm';
import SelectForm from './forms/SelectFrom';
import MultiSelectorForm from './forms/MultiSelectorForm';
import DescriptionFrom from './forms/DescriptionForm';

const Create = () => {
  const [country, setCountry] = useState([])
  const [league, setLeague] = useState([])
  const [characterstic, setCharacterstic] = useState([])

  console.log('contry', country)
  console.log('league', league)
  console.log('chatracterstic', characterstic)


  const GetData = () =>{
    AxiosInstance.get(`country/`)
    .then((res) => {
      setCountry(res.data)
    })

    AxiosInstance.get(`league/`)
    .then((res) => {
      setLeague(res.data)
    })

     AxiosInstance.get(`characterstic/`)
    .then((res) => {
      setCharacterstic(res.data)
    })

  }
 

  useEffect(()=>{
    GetData()
  }, [])
  
  return (
    <div>
      <Box className={"TopBar"}>
        <AddBoxIcon />
        <Typography sx={{marginLeft:'15px', fontWeight:'bold'}} variant='subtitle2'>
          Create a new clube
        </Typography>
      </Box>

      <Box className={"FormBox"}> 
         <Box className={'FormArea'}>

           <TextFrom 
             label =  {'Club name'}
           />

           <Box sx={{marginTop:'30px'}}>
              <TextFrom 
              label =  {'City'}
              />
           </Box>
           
           <Box sx={{marginTop:'30px'}}>
              <SelectForm 
                label={'League'}
                options={league}
              />
           </Box>

          <Box sx={{marginTop:'30px'}}>
             <Button variant="contained" fullWidth>Submit the data</Button>
           </Box>

         </Box>


         <Box className={'FormArea'}>

            <SelectForm 
            label={'Country'}
            options={country}
           />

          <Box sx={{marginTop:'30px'}}>
              <TextFrom 
                label =  {'Attendence'}
              />
          </Box>

          <Box sx={{marginTop:'30px'}}>
           <MultiSelectorForm 
             label =  {'Characterstic'}
             options= {characterstic}
           />
          </Box>

         </Box>

         <Box className={'FormArea'}>
           <DescriptionFrom 
             label =  {'Description'}
             options= {characterstic}
             rows={9}
           />
         </Box>
      </Box>
    </div>
  )
}

export default Create