import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{justifyItems: 'center', marginTop: 4}}>
        <Typography variant='h6' color='textPrimary' align='center' gutterBottom>
            Dame's Album
        </Typography>
        <Typography variant='subtitle1' color='textSecondary' align='center' gutterBottom>
            Thanks i hope you enjoyed watching those beautifull photos
        </Typography>
    </Box>
  )
}

export default Footer