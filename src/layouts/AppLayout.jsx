import {
  Box,
  Container,
  Link,
  Stack,
  Typography,
  Grid,
} from '@mui/material'

import {
  Link as RouterLink,
  Outlet,
} from 'react-router-dom'

import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

import { useEffect, useState } from 'react'

import Logo from '../assets/Logo.jpeg'

const navItems = [
  { label: 'Home', to: '/#home' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Donors', to: '/donors' },
  { label: 'Monthly Account', to: '/monthlyaccount' },
  { label: 'Family Directory', to: '/familydirectory' },
  { label: 'Contact', to: '/contact' },

]

function AppLayout() {
  const [visitorCount, setVisitorCount] =
    useState(null)

  useEffect(() => {
    fetch('https://api.countapi.xyz/hit/sbrsg/homepage')
      .then((res) => res.json())
      .then((data) => {
        setVisitorCount(data.value)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <Box
      sx={{
        minHeight: '100dvh',
        bgcolor: '#ffffff',
        scrollBehavior: 'smooth',
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          borderBottom: '1px solid',
          borderColor: 'divider',
          bgcolor: '#fff',
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            px: { xs: 2, md: 3 },
          }}
        >
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 1.2, md: 2 }}
            sx={{
              py: { xs: 1, md: 1.2 },
              alignItems: { xs: 'center', md: 'center' },
              justifyContent: {
                xs: 'center',
                md: 'space-between',
              },
            }}
          >
            {/* LOGO */}
            <Link
              component={RouterLink}
              to="/"
              underline="none"
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
              >
                <Box
                  component="img"
                  src={Logo}
                  alt="SBRSG Logo"
                  sx={{
                    width: 110,
                    height: 110,
                    objectFit: 'contain',
                    cursor: 'pointer',
                  }}
                />

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    color: 'darkslateblue',
                    lineHeight: 1.1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: {
                      xs: '20px',
                      md: '26px',
                    },
                    textAlign: 'center',
                  }}
                >
                  Shree Bhuj Rajput Social Group
                </Typography>
              </Stack>
            </Link>

            {/* NAVIGATION */}
            <Stack
              direction="row"
              spacing={{ xs: 1.2, md: 2.2 }}
              alignItems="center"
              justifyContent={{
                xs: 'center',
                md: 'flex-end',
              }}
              flexWrap="wrap"
              sx={{
                rowGap: 1,
                width: { xs: '100%', md: 'auto' },
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  component={RouterLink}
                  to={item.to}
                  underline="none"
                  sx={{
                    color: '#002c3e',
                    fontWeight:
                      item.label === 'Home'
                        ? 700
                        : 600,
                    fontSize: '0.80rem',
                    '&:hover': {
                      color: '#f7444e',
                    },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* PAGE CONTENT */}
      <Box
        sx={{
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 2, md: 3 },
          mt: 0,
        }}
      >
        <Outlet />
      </Box>

      {/* FOOTER */}
      <Box
        id="contact"
        sx={{
          bgcolor: '#212529',
          color: '#d4dde1',
          px: { xs: 3, md: 5 },
          py: { xs: 4, md: 5 },
          scrollMarginTop: {
            xs: 90,
            md: 120,
          },
        }}
      >
        <Grid container spacing={4}>
          {/* MENU */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                mb: 2,
                color: '#fff',
              }}
            >
              MENU
            </Typography>

            <Grid container spacing={1.5}>
              {navItems.map((item) => (
                <Grid
                  key={item.label}
                  size={{ xs: 6 }}
                >
                  <Link
                    component={RouterLink}
                    to={item.to}
                    underline="none"
                    sx={{
                      color: '#d4dde1',
                      fontWeight: 500,
                      display: 'block',
                      '&:hover': {
                        color: '#f7444e',
                      },
                    }}
                  >
                    {item.label}
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* VISITOR COUNTER + SOCIAL */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              textAlign: {
                xs: 'center',
                md: 'right',
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                mb: 1.2,
                color: '#fff',
              }}
            >
              WEBSITE VISITORS
            </Typography>

            <Typography
              sx={{
                fontSize: '2rem',
                fontWeight: 700,
                color: '#f7444e',
                mb: 1,
              }}
            >
              {visitorCount ?? '...'}
            </Typography>

            <Typography sx={{ mb: 3 }}>
              Thank you for visiting our website.
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                mb: 1.5,
                color: '#fff',
              }}
            >
              FOLLOW US
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: {
                  xs: 'center',
                  md: 'flex-end',
                },
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
              >
                <Link
                  href="https://www.instagram.com/shree.bhuj.rajput.social.group?igsh=MXA5Y2Z0bzM4bmg4eA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    color: '#d4dde1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&:hover': {
                      color: '#f7444e',
                    },
                  }}
                >
                  <InstagramIcon
                    sx={{
                      fontSize: 34,
                    }}
                  />
                </Link>

                <Link
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    color: '#d4dde1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&:hover': {
                      color: '#25D366',
                    },
                  }}
                >
                  <WhatsAppIcon
                    sx={{
                      fontSize: 34,
                    }}
                  />
                </Link>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        {/* COPYRIGHT */}
        <Typography
          sx={{
            mt: 4,
            pt: 2,
            borderTop: '1px solid #343b40',
            textAlign: 'center',
            fontSize: '0.9rem',
          }}
        >
          © 2026 All Rights Reserved By Kraze Techies
        </Typography>
      </Box>
    </Box>
  )
}

export default AppLayout