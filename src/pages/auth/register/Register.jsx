import { Box, Typography, TextField, Link, FormControlLabel, Checkbox, Button } from '@mui/material';
import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import registerImg from '../../../assets/img/Pastel-image.webp';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterSchema } from '../../../validation/RegisterSchema';

export default function Register() {
const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: yupResolver(RegisterSchema)
});
const RegisterForm = (data) => {
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
    <Box p={3} my={3} mx={2} sx={{ alignItems: 'center', justifyContent: 'center' }}>
      <Box display={'flex'} flexDirection={'column'} gap={2} >
        <Typography component={'h1'} variant=''>Sign up</Typography>
        <Typography component={'p'} variant='p' sx={{ color: '#6C7275' }}>Already have an account? <Link component={ReactLink} to='/login' underline='none' sx={{ color: '#38CB89' }}>log in</Link></Typography>
      </Box>
      <Box component={'form'} onSubmit={handleSubmit(RegisterForm)}
        display={'flex'} flexDirection={"column"} gap={3} >
        <TextField {...register('yourName')} label="Your name" variant="standard"
        error={errors.yourName} helperText={errors.yourName?.message} />
        <TextField {...register('userName')} label="User name" variant="standard" 
        error={errors.userName} helperText={errors.userName?.message} />
        <TextField {...register('emailAddress')} label="Email address" variant="standard" 
        error={errors.emailAddress} helperText={errors.emailAddress?.message} />
        <TextField {...register('password')} label="Password" variant="standard"
        error={errors.password} helperText={errors.password?.message} />

        <FormControlLabel control={<Checkbox />} label={
          <Typography variant="body2" sx={{ color: '#9CA3AF' }}>
            I agree with{' '}
            <Typography
              component="span"
              sx={{ color: 'black', fontWeight: 'bold' }}>
              Privacy Policy
            </Typography>
            {' '}and{' '}
            <Typography component="span" sx={{ color: 'black', fontWeight: 'bold' }}>
              Terms of Use
            </Typography>
          </Typography>
        } />
        <Button variant="contained" type='submit' sx={{ backgroundColor: 'black' }}>Sign Up</Button>
      </Box>
    </Box>
  </Box>
)
}
