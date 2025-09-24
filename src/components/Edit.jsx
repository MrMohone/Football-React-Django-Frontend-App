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
import * as yup from 'yup'  //for form validation
import MyMessage from './forms/Message';
import {useNavigate, useParams} from 'react-router'

const Edit = () => {

  const myParameters = useParams()
  const MyId = myParameters.id
  console.log('my id: ' , MyId)

  
  const [country, setCountry] = useState([])
  const [league, setLeague] = useState([])
  const [characterstic, setCharacterstic] = useState([])
  const [message, setMessage] = useState([])
  const [myData, setMyData] = useState({//to retrive data
        name : '',
        description : '',
        country : '',
        league : '',
        attendence : 0,
        city : '',
        characteristics : []
       })  
  console.log('my data: ' , myData)


  const navigate = useNavigate()



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

     AxiosInstance.get(`footballclub/${MyId}/`)
      .then((res) => {
        setMyData(res.data)
      })

  }
 

  useEffect(()=>{
    GetData()
  }, [])

  const vaildationSchema = yup.object({
    name: yup
         .string("The name must be text")
         .required("Name is required"),
    description: yup
         .string("The description must be text")
         .required("Description is required"),
    attendence: yup
         .number("Attendence must be number")
         .required("Attendence is required"),
    characteristics: yup
         .array()
         .min(1, "Select at least one option")
  })

  const formik = useFormik({
    initialValues: {
      name : myData.name,
      description : myData.description,
      country : myData.country,
      league : myData.league,
      attendence : myData.attendence,
      city : myData.city,
      characteristics : myData.characteristics, //because it's multi value
    },
    enableReinitialize: true,//to reinitialize the form, very important
    validationSchema: vaildationSchema, //connect form to validationSchema function

    onSubmit: (values) => {
      AxiosInstance.put(`footballclub/${MyId}/`,values)//update
      .then(() => {
        console.log("Successfull data submition")
        setMessage(
          <MyMessage
            message = {'You successfully updated data'}
            messageColor= {'green'}
          />
        )
        setTimeout(()=>{
          navigate('/')
        }, 1500)//1.5 sec
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
          Edit a football clube
        </Typography>
      </Box>
      
      {/* success message */}
      {message}

      <Box className={"FormBox"}> 

         <Box className={'FormArea'}>
           <TextFrom 
             label =  {'Club name'}
             name = 'name'
             value={formik.values.name}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             error={formik.touched.name && Boolean(formik.errors.name)}
             helperText={formik.touched.name && formik.errors.name}
           />

           <Box sx={{marginTop:'30px'}}> {/* for styling only  */}
              <TextFrom 
                label =  {'City'}
                name = 'city'
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
              />
           </Box>
           
           <Box sx={{marginTop:'30px'}}>
              <SelectForm 
                label={'League'}
                options={league}
                name = 'league'
                value={formik.values.league}//formik is just function located on top
                onChange={formik.handleChange}//formik is imported library
                onBlur={formik.handleBlur}
                error={formik.touched.league && Boolean(formik.errors.league)}
                helperText={formik.touched.league && formik.errors.league}
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
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={formik.touched.country && formik.errors.country}
            />

            <Box sx={{marginTop:'30px'}}>
              <TextFrom 
                label =  {'Attendence'}
                name = 'attendence'
                value={formik.values.attendence}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.attendence && Boolean(formik.errors.attendence)}
                helperText={formik.touched.attendence && formik.errors.attendence}
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
              error={formik.touched.characteristics && Boolean(formik.errors.characteristics)}
              helperText={formik.touched.characteristics && formik.errors.characteristics}
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
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
            />
          </Box>
      </Box>
      </form>
    </div>
  )
}

export default Edit