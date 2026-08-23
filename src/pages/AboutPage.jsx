import { Stack, Typography } from '@mui/material'

function AboutPage() {
  return (
    <Stack spacing={2}>
      <Typography variant="h3" fontWeight={700}>
        About This Starter
      </Typography>
      <Typography color="text.secondary">
        This setup gives you a clean base for feature development with a proper app layout, page
        routing, and global theme controls.
      </Typography>
    </Stack>
  )
}

export default AboutPage
