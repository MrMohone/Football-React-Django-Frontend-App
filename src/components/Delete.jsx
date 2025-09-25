import {React, useState, useEffect} from 'react'
import AxiosInstance from './Axios'
import {Box, Typography, Button} from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import {useNavigate, useParams} from 'react-router'
import MyMessage from './forms/Message';


const Delete = () => {

   const MyParameter = useParams()
   const MyId = MyParameter.id
   const navigate = useNavigate()
   const [message, setMessage] = useState([])
   const [displaymsg, setDisplayMsg] = useState(true)
   


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
  const GetData = () =>{
     AxiosInstance.get(`footballclub/${MyId}/`)
      .then((res) => {
        setMyData(res.data)
      })
  }
 

  useEffect(()=>{
    GetData()
  }, [])


  const handelDelete = (event) => {
    event.preventDefault()
    AxiosInstance.delete(`footballclub/${MyId}/`)
    .then((event) => {
      setDisplayMsg(false)
      console.log("deleted your data")
      setMessage(
        <MyMessage
          message = {'You successfully deleted data'}
          messageColor= {'green'}
        />
        )
      setTimeout(()=>{
            navigate('/')
          }, 2000)//2 sec
        })
    .catch((err) => {console.log(err)})
  }

  return (
    <div>
      <form onSubmit={handelDelete}>
        {message}

        {displaymsg ? 
        <Box className={"TopBar"}>
          <AddBoxIcon />
          <Typography sx={{marginLeft:'15px', fontWeight:'bold'}} variant='subtitle2'>
            Are you sure you want to delete this?
          </Typography>
        </Box>
        : ''}

        {displaymsg ? 
        <Box className={"TextBox"}> 
          <Typography>
            You will be deleting the club <strong>{myData.name}</strong> from <strong>{myData.city}</strong>
          </Typography>
        </Box> 
         : ''} 
        

        <Box sx={{marginTop:'30px'}}>
          <Button type='submit' variant="contained" sx={{backgroundColor:'red', fontWeight:'bold' }}   fullWidth >Delete</Button>
        </Box>
      </form>
    </div>
  )
}

export default Delete
