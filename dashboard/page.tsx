'use client';

import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Divider, IconButton } from '@mui/material';
import Image from 'next/image';

// Sample data for health metrics
const healthMetrics = [
  { 
    title: 'Blood Sugar Level', 
    value: '95 mg/dL', 
    status: 'normal', 
    icon: '/healthicons_sugar2x-outline.png',
    change: '+2.5%'
  },
  { 
    title: 'Blood Pressure', 
    value: '120/80 mmHg', 
    status: 'normal', 
    icon: '/Vector.png',
    change: '-1.2%'
  },
  { 
    title: 'Cholesterol', 
    value: '180 mg/dL', 
    status: 'normal', 
    icon: '/Vector5.png',
    change: '+0.8%'
  },
  { 
    title: 'Kidney Function', 
    value: 'Good', 
    status: 'normal', 
    icon: '/game-icons_kidneys.png',
    change: '0%'
  },
  { 
    title: 'Thyroid', 
    value: 'Normal', 
    status: 'normal', 
    icon: '/healthicons_thyroid-outline.png',
    change: '0%'
  },
  { 
    title: 'Liver Function', 
    value: 'Good', 
    status: 'normal', 
    icon: '/hugeicons_liver.png',
    change: '+1.5%'
  },
];

// Sample data for upcoming appointments
const upcomingAppointments = [
  {
    doctorName: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    date: 'May 10, 2023',
    time: '10:30 AM',
  },
  {
    doctorName: 'Dr. Michael Chen',
    specialty: 'Endocrinologist',
    date: 'May 15, 2023',
    time: '2:00 PM',
  },
];

export default function PatientDashboard() {
  return (
    <Box>
      {/* Welcome section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
          Welcome, John
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Here's your health summary for today
        </Typography>
      </Box>

      {/* Health metrics cards */}
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'medium' }}>
        Health Metrics
      </Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {healthMetrics.map((metric, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ 
              height: '100%',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
              borderRadius: '16px',
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
              }
            }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ 
                      mr: 1.5, 
                      p: 1, 
                      borderRadius: '12px', 
                      backgroundColor: '#f0f7ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Image src={metric.icon} alt={metric.title} width={24} height={24} />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {metric.title}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ 
                      color: metric.change.includes('+') ? 'success.main' : metric.change.includes('-') ? 'error.main' : 'text.secondary',
                      display: 'flex',
                      alignItems: 'center',
                    }}>
                      {metric.change}
                      {metric.change.includes('+') && (
                        <Image src="/ion_arrow-up.png" alt="up" width={12} height={12} style={{ marginLeft: 4 }} />
                      )}
                      {metric.change.includes('-') && (
                        <Image src="/ion_arrow-up.png" alt="down" width={12} height={12} style={{ marginLeft: 4, transform: 'rotate(180deg)' }} />
                      )}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  {metric.value}
                </Typography>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    backgroundColor: metric.status === 'normal' ? '#e6f7e6' : '#ffebee',
                    color: metric.status === 'normal' ? '#2e7d32' : '#d32f2f',
                    px: 1,
                    py: 0.5,
                    borderRadius: '4px',
                    display: 'inline-block',
                    mt: 1,
                  }}
                >
                  {metric.status === 'normal' ? 'Normal' : 'Attention Needed'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Upcoming appointments section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
          Upcoming Appointments
        </Typography>
        <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
          View All
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {upcomingAppointments.map((appointment, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ 
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
              borderRadius: '16px'
            }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ 
                    mr: 1.5, 
                    p: 1.5, 
                    borderRadius: '12px', 
                    backgroundColor: '#f0f7ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 48,
                    height: 48
                  }}>
                    <Image src="/teenyicons_appointments-outline.png" alt="Appointment" width={24} height={24} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      {appointment.doctorName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {appointment.specialty}
                    </Typography>
                  </Box>
                </Box>
                <Divider sx={{ my: 1.5 }} />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Image src="/lets-icons_date-fill.png" alt="Date" width={16} height={16} />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      {appointment.date}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Image src="/weui_arrow-filled.png" alt="Time" width={16} height={16} />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      {appointment.time}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Recent lab results placeholder */}
      <Box sx={{ mt: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
            Recent Lab Results
          </Typography>
          <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
            View All
          </Typography>
        </Box>
        <Card sx={{ 
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
          borderRadius: '16px',
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 200
        }}>
          <Image src="/healthicons_blood-cells-outline-24px.png" alt="Lab Results" width={48} height={48} />
          <Typography variant="h6" sx={{ mt: 2, fontWeight: 'medium' }}>
            No Recent Lab Results
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', mt: 1, maxWidth: 400 }}>
            You don't have any recent lab results. When your doctor uploads your results, they will appear here.
          </Typography>
        </Card>
      </Box>
    </Box>
  );
} 