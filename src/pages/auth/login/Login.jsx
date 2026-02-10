import { Box, Typography, TextField, Link, FormControlLabel, Checkbox, Button } from '@mui/material'
import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import registerImg from '../../../assets/img/Pastel-image.webp';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from '../../../validation/LoginSchema';

export default function Register() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver:yupResolver(LoginSchema)
  });
  const LoginForm = (data) => {
    console.log(data)
  }
  return (
    <Box display={'flex'} sx={{ flexDirection: { xs: 'column', sm: 'row' } }} gap={5} >
      <Box sx={{ backgroundColor: '#F3F5F7' }}>
        <Box display={'flex'} sx={{ alignItems: 'center', justifyContent: 'center' }}   >
          <Box component={'img'} src={`${registerImg}`} alt='imge register error'
            sx={{ width: '60%', height: '40%' }} />
        </Box>
      </Box>
      <Box p={3} my={3} mx={2} width='30%' sx={{ alignItems: 'center', justifyContent: 'center' }}>
        <Box display={'flex'} flexDirection={'column'} gap={2} >
          <Typography component={'h1'} variant=''>Sign In</Typography>
          <Typography component={'p'} variant='p' sx={{ color: '#6C7275' }}>Already have an account? <Link component={ReactLink} to='/register' underline='none' sx={{ color: '#38CB89' }}>Sign In</Link></Typography>
        </Box>
        <Box component={'form'} onSubmit={handleSubmit(LoginForm)}
          display={'flex'} flexDirection={"column"} gap={3} >
          <TextField  {...register('identifier')} label="Your usernam or email address" variant="standard"
            error={errors.password} helperText={errors.identifier?.message} />
          <TextField  {...register('password')} label="Password" variant="standard" 
                  error={errors.password} helperText={errors.password?.message} />
          <Box
            display="flex"
            alignItems="center" >
            <Checkbox />

            <Typography
              variant="body2"
              sx={{ color: '#9CA3AF' }}>
              Remember me
            </Typography>
            <Box sx={{ flexGrow: 1 }} />

            <Typography
              variant="body2"
              sx={{ fontWeight: 'bold', cursor: 'pointer' }}>
              Forgot password?
            </Typography>

          </Box>
          <Button variant="contained" type='submit' sx={{ backgroundColor: 'black' }}><Link component={ReactLink} to={'/'} color='white' underline='none' >Sign In</Link></Button>
        </Box>
      </Box>
    </Box>
  )
}
