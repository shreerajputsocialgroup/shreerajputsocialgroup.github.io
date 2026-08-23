import { Card, CardContent, Stack, Typography } from '@mui/material'

function FeatureCard({ title, description }) {
  return (
    <Card
      variant="outlined"
      sx={{
        height: '100%',
        borderRadius: 3,
      }}
    >
      <CardContent sx={{ p: { xs: 2.25, md: 2.75 } }}>
        <Stack spacing={1}>
          <Typography fontWeight={700}>{title}</Typography>
          {description ? (
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          ) : null}
        </Stack>
      </CardContent>
    </Card>
  )
}

export default FeatureCard
