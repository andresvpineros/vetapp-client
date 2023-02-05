import { People } from '@/data/people'
import React from 'react'
import styles from './DashboardPage.module.css'
import { Sidebar } from '@/ui/components/Sidebar'
import Grid from '@mui/material/Grid';
export interface HomeInterface {}
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const DashboardPage: React.FC<HomeInterface> = () => {
  const pageSize = 5

  return (
    <div className={styles.dashboard}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={6}>
          <Item>xs</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
      </Grid>
    </div>
  )
}

export default DashboardPage
