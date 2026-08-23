import React from 'react';

import {
  Box,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function ContactPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
        py: 5,
      }}
    >
      <Stack
        spacing={5}
        alignItems="center"
        sx={{
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        {/* HEADER */}
        <Box textAlign="center">
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: '#002c3e',
              maxWidth: '700px',
              mx: 'auto',
              textAlign: 'center',
              fontSize: {
                xs: '2rem',
                md: '2.8rem',
              },
            }}
          >
            Contact Us
          </Typography>

          <Typography
            sx={{
              color: '#5f7280',
              mt: 1,
              maxWidth: '700px',
              mx: 'auto',
              mb: 2,
            }}
          >
            Get in touch with Shree Bhuj Rajput Social Group
            for any inquiries, social activities, or support.
          </Typography>
        </Box>

        {/* CENTERED BOXES */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
          style={{
            margin: '0 auto'
          }}
          data-testid='center-box'
        >
          {/* MAP BOX */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid #e3eaef',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* TITLE */}
              <Box
                sx={{
                  py: 3,
                  borderBottom: '1px solid #e3eaef',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: '#002c3e',
                    textAlign: 'center',
                  }}
                >
                  Our Location
                </Typography>
              </Box>

              {/* MAP */}
              <Box
                component="iframe"
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d173.03176093813659!2d69.65518661591153!3d23.244345294253915!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39511f3680637f35%3A0xd13872b5e36cc9cb!2sDAVE%20PRACHI%20SHANTILAL!5e1!3m2!1sen!2sin!4v1779962502166!5m2!1sen!2sin"
                width="100%"
                height="500"
                sx={{
                  border: 0,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Paper>
          </Grid>

          {/* CONTACT DETAILS BOX */}
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                p: {
                  xs: 4,
                  md: 5,
                },
                borderRadius: '24px',
                border: '1px solid #e3eaef',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* TITLE */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mb: 5,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: '#002c3e',
                    textAlign: 'center',
                  }}
                >
                  Contact Information
                </Typography>
              </Box>

              {/* DETAILS */}
              <Stack spacing={5}>
                {/* ADDRESS */}
                <Box
                  display="flex"
                  gap={2}
                  alignItems="flex-start"
                >
                  <LocationOnIcon
                    sx={{
                      color: '#002c3e',
                      fontSize: 34,
                      mt: 0.5,
                    }}
                  />

                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 0.5,
                      }}
                    >
                      Address
                    </Typography>

                    <Typography color="#5f7280">
                      Near Bapa Sitaram Madhuli,
                      S.T. Workshops Road
                      <br />
                      Bhuj, Gujarat, India
                    </Typography>
                  </Box>
                </Box>

                {/* PHONE */}
                <Box
                  display="flex"
                  gap={2}
                  alignItems="center"
                >
                  <PhoneIcon
                    sx={{
                      color: '#002c3e',
                      fontSize: 34,
                    }}
                  />

                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 0.5,
                      }}
                    >
                      Contact Number
                    </Typography>

                    <Typography color="#5f7280">
                      Ashok Mer - +91 94272 50955
                    </Typography>
                    <Typography color="#5f7280">
                      Ghanshyamsinh Rathod - +91 98250 58850
                    </Typography>
                  </Box>
                </Box>

                {/* EMAIL */}
                <Box
                  display="flex"
                  gap={2}
                  alignItems="center"
                >
                  <EmailIcon
                    sx={{
                      color: '#002c3e',
                      fontSize: 34,
                    }}
                  />

                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 0.5,
                      }}
                    >
                      Email Address
                    </Typography>

                    <Typography color="#5f7280">
                      rajput.social.group@gmail.com
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

export default ContactPage;