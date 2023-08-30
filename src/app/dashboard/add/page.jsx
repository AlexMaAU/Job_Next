'use client';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getTokenFromLocalStorage } from '../../../context/utils';
import axios from 'axios';

const token = getTokenFromLocalStorage();

const AddPage = () => {
  const [formValues, setFormValues] = useState({
    position: '',
    company: '',
    jobLocation: '',
    status: 'interview',
    jobType: 'full-time',
  });

  const router = useRouter();

  const handleOnChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const { position, company, jobLocation } = formValues;
    if (!position || !company || !jobLocation) {
      alert('Please fill all fields');
      return;
    }
    axios
      .post('http://127.0.0.1:5000/api/v1/jobs/', formValues, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => router.push('/dashboard/all'))
      .catch((err) => console.log(err));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '32px 24px',
        alignItems: 'center',
      }}
    >
      <h1>Add Page</h1>
      <form onSubmit={handleOnSubmit}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '60px',
            marginLeft: '20%',
            marginRight: '20%',
            '@media (max-width: 768px)': {
              flexDirection: 'column',
              marginLeft: '0',
              marginRight: '0',
            },
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <label>Position</label>
            <TextField
              id='outlined-basic'
              variant='outlined'
              type='text'
              name='position'
              sx={{ width: '320px', marginTop: '5px' }}
              onChange={handleOnChange}
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <label>Company</label>
            <TextField
              d='outlined-basic'
              variant='outlined'
              type='text'
              name='company'
              sx={{ width: '320px', marginTop: '5px' }}
              onChange={handleOnChange}
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <label>Job Location</label>
            <TextField
              d='outlined-basic'
              variant='outlined'
              type='text'
              name='jobLocation'
              sx={{ width: '320px', marginTop: '5px' }}
              onChange={handleOnChange}
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <label>Job Status</label>
            <Select
              d='outlined-basic'
              variant='outlined'
              type='text'
              name='status'
              value={formValues.status}
              sx={{ width: '320px', marginTop: '5px' }}
              onChange={handleOnChange}
            >
              <MenuItem value={'interview'}>Interview</MenuItem>
              <MenuItem value={'declined'}>Declined</MenuItem>
              <MenuItem value={'pending'}>Pending</MenuItem>
            </Select>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <label>Job Type</label>
            <Select
              d='outlined-basic'
              variant='outlined'
              type='text'
              name='jobType'
              value={formValues.jobType}
              sx={{ width: '320px', marginTop: '5px' }}
              onChange={handleOnChange}
            >
              <MenuItem value={'full-time'}>Full Time</MenuItem>
              <MenuItem value={'part-time'}>Part Time</MenuItem>
              <MenuItem value={'remote'}>Remote</MenuItem>
            </Select>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'end',
              marginTop: '20px',
              marginBottom: '20px',
            }}
          >
            <Button
              variant='contained'
              type='submit'
              sx={{
                width: '320px',
                height: '56px',
                background: 'rgb(44, 177, 188)',
                '&:hover': {
                  background: 'black',
                },
              }}
            >
              Add Job
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default AddPage;
