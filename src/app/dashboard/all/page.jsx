'use client';

import axios from 'axios';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { getTokenFromLocalStorage } from '../../../context/utils';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import BusinessIcon from '@mui/icons-material/Business';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const AllPage = () => {
  const [data, setData] = useState({ jobs: [] });
  const token = getTokenFromLocalStorage();
  // console.log(token);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:5000/api/v1/jobs/all', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // console.log(res);
        setData(res.data);
      } catch (error) {
        throw new Error('Failed to fetch data');
      }
    };
    getData();
  }, []);

  const { jobs } = data;

  const renderJobs = () =>
    jobs.map((job) => {
      return (
        <Box
          key={job._id}
          sx={{
            width: '1100px',
            height: '50px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '20px',
            backgroundColor: 'rgb(44, 177, 188)',
            borderRadius: '15px',
            color: 'white',
            '@media (max-width: 768px)': {
              width: '100%',
              height: '220px',
              flexDirection: 'column',
              gap: '7px',
            },
          }}
        >
          <Box
            sx={{
              width: '280px',
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              '@media (max-width: 768px)': {
                width: '100%',
                paddingLeft: '30px',
              },
            }}
          >
            <Grid3x3Icon />
            {job._id}
          </Box>
          <Box
            sx={{
              width: '150px',
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              '@media (max-width: 768px)': {
                width: '100%',
                paddingLeft: '30px',
              },
            }}
          >
            <BusinessIcon />
            {job.company}
          </Box>
          <Box
            sx={{
              width: '200px',
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              '@media (max-width: 768px)': {
                width: '100%',
                paddingLeft: '30px',
              },
            }}
          >
            <WorkIcon />
            {job.position}
          </Box>
          <Box
            sx={{
              width: '120px',
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              '@media (max-width: 768px)': {
                width: '100%',
                paddingLeft: '30px',
              },
            }}
          >
            <LocationOnIcon />
            {job.jobLocation}
          </Box>
          <Box
            sx={{
              width: '120px',
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              '@media (max-width: 768px)': {
                width: '100%',
                paddingLeft: '30px',
              },
            }}
          >
            <FormatPaintIcon />
            {job.jobType}
          </Box>
          <Box
            sx={{
              width: '100px',
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              '@media (max-width: 768px)': {
                width: '100%',
                paddingLeft: '30px',
              },
            }}
          >
            <AutorenewIcon />
            {job.status}
          </Box>
        </Box>
      );
    });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '32px 24px',
        alignItems: 'center',
      }}
    >
      <h1 style={{ marginBottom: '60px' }}>All Page</h1>
      {renderJobs()}
    </Box>
  );
};

export default AllPage;
