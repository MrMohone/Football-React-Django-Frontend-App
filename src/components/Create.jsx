import {React, useState, useEffect } from 'react'
import AxiosInstance from './Axios'
import {Box, Typography} from '@mui/material'
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import TextFrom from './forms/TextForm';
import SelectForm from './forms/SelectFrom';
import MultiSelectorForm from './forms/MultiSelectorForm';
import DescriptionFrom from './forms/DescriptionForm';
import {useFormik} from 'formik'

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

  const formik = useFormik({
    initialValues: {
      name : 'Mu',
      description : '',
      country : '',
      league : '',
      attendence : '',
      city : '',
      characteristics : [], //because it's multi value
    },
    onSubmit: (values) => {
      AxiosInstance.post('footballclub/',values)
      .then(() => {
        console.log("Successfull data submition")
      })
    }
  })
   
  console.log("form values: ", formik.values)
   
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
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
             name = 'name'
             value={formik.values.name}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             
           />

           <Box sx={{marginTop:'30px'}}> {/* for styling only  */}
              <TextFrom 
                label =  {'City'}
                name = 'city'
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
           </Box>
           
           <Box sx={{marginTop:'30px'}}>
              <SelectForm 
                label={'League'}
                options={league}
                name = 'league'
                value={formik.values.league}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
           </Box>

            <Box sx={{marginTop:'30px'}}>
              <Button type='submit' variant="contained" fullWidth >Submit the data</Button>
            </Box>

          </Box>


         <Box className={'FormArea'}>

            <SelectForm 
              label={'Country'}
              options={country}
              name = 'country'
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <Box sx={{marginTop:'30px'}}>
              <TextFrom 
                label =  {'Attendence'}
                name = 'attendence'
                value={formik.values.attendence}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Box>

            <Box sx={{marginTop:'30px'}}>
            <MultiSelectorForm 
              label =  {'Characterstic'}
              options= {characterstic}
              name = 'characteristics'
              value={formik.values.characteristics}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            </Box>

          </Box>

          <Box className={'FormArea'}>
            <DescriptionFrom 
              label =  {'Description'}
              rows={9}
              name = 'description'
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Box>
      </Box>
      </form>
    </div>
  )
}

export default Create