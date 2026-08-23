import { useState } from 'react'

import PersonRounded from '@mui/icons-material/PersonRounded'
import VolunteerActivismRounded from '@mui/icons-material/VolunteerActivismRounded'
import GroupsRounded from '@mui/icons-material/GroupsRounded'
import RocketLaunchRounded from '@mui/icons-material/RocketLaunchRounded'
import CloseRounded from '@mui/icons-material/CloseRounded'

import {
  Avatar,
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Dialog,
  IconButton,
} from '@mui/material'

import AboutUs from '../assets/aboutUs.png'
import heroImage from '../assets/banner.jpeg'

import member1 from '../assets/team/member-1.jpeg'
import member2 from '../assets/team/member-2.jpeg'
import member3 from '../assets/team/member-3.jpeg'

/* ANNOUNCEMENT IMAGES */
import ad1 from '../assets/advertise/ad-1.jpg'
import ad2 from '../assets/advertise/ad-2.jpg'

const highlights = [
  {
    title: 'સમાજ સેવા દ્વારા બદલાવ લાવવાની તક',
    desc: 'શિક્ષણ, આરોગ્ય અને જરૂરિયાતમંદ લોકોની સહાય દ્વારા સમાજમાં સકારાત્મક પરિવર્તન લાવવાની તક મળે છે.',
    icon: <VolunteerActivismRounded />,
  },
  {
    title: 'એકતા અને સહકારનું મજબૂત મંચ',
    desc: 'સમાજના લોકો સાથે જોડાઈને પરસ્પર સહકાર, વિશ્વાસ અને ભાઈચારો વધારવાનો અવસર મળે છે.',
    icon: <GroupsRounded />,
  },
  {
    title: 'આગામી પેઢી માટે ઉત્તમ ભવિષ્ય',
    desc: 'વિદ્યાર્થીઓને શિક્ષણ સહાય, આરોગ્ય સહાય અને સામાજિક માર્ગદર્શન દ્વારા ઉજ્જવળ ભવિષ્ય બનાવવામાં યોગદાન આપી શકાય છે.',
    icon: <RocketLaunchRounded />,
  },
]

/* ANNOUNCEMENT IMAGES ARRAY */
const announcements = [
  {
    image: ad1,
  },
  {
    image: ad2,
  },
]

const teamMembers = [
  {
    name: 'અશોક મેર',
    image: member1,
  },
  {
    name: 'ઘનશ્યામસિંહ રાઠોડ',
    image: member2,
  },
  {
    name: 'જયેશ એન. સિસોદિયા',
    image: member3,
  },
  {
    name: 'Person 2',
    image: '',
  },
  {
    name: 'Person 3',
    image: '',
  },
]

function HomePage() {
  const [openImage, setOpenImage] = useState(null)

  const handleOpenImage = (image) => {
    setOpenImage(image)
  }

  const handleCloseImage = () => {
    setOpenImage(null)
  }

  return (
    <>
      {/* ANNOUNCEMENT ANIMATION */}
      <style>
        {`
          @keyframes scrollAnnouncementsDesktop {
            0% {
              transform: translateY(0%);
            }

            100% {
              transform: translateY(-50%);
            }
          }

          @keyframes scrollAnnouncementsMobile {
            0% {
              transform: translateX(0%);
            }

            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>

      <Stack spacing={{ xs: 7, md: 9 }}>
        {/* MAIN HERO SECTION */}
        <Box
          id="home"
          sx={{
            overflow: 'hidden',
            background: '#f3f4f6',
            scrollMarginTop: { xs: 90, md: 120 },
          }}
        >
          {/* HERO BANNER SECTION */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              overflow: 'hidden',
              backgroundColor: '#000',
            }}
          >
            {/* BANNER IMAGE */}
            <Box
              component="img"
              src={heroImage}
              alt="Community Banner"
              sx={{
                width: '100%',

                /* LITTLE BIT LARGER BANNER */
                height: {
                  xs: 150,
                  sm: 210,
                  md: 300,
                  lg: 380,
                  xl: 450,
                },

                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
              }}
            />

            {/* DARK OVERLAY */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.15))',
              }}
            />

            {/* BANNER CONTENT */}
            <Container
              maxWidth="xl"
              sx={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                zIndex: 2,
              }}
            >
              <Box
                sx={{
                  maxWidth: {
                    xs: '100%',
                    md: 650,
                  },
                  px: {
                    xs: 2,
                    sm: 3,
                    md: 5,
                  },
                }}
              >
              </Box>
            </Container>
          </Box>

          {/* ANNOUNCEMENTS + ABOUT */}
          <Grid container spacing={0}>
            {/* ANNOUNCEMENT SECTION */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Box
                sx={{
                  bgcolor: '#0b172a',
                  color: '#fff',
                  position: 'relative',

                  height: {
                    xs: 280,
                    sm: 340,
                    md: 520,
                    lg: 620,
                    xl: 720,
                  },

                  overflow: 'hidden',
                }}
              >
                {/* TITLE */}
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: 'center',
                    py: 2,
                    fontWeight: 800,
                    bgcolor: '#08111f',
                    borderBottom:
                      '0.5px solid rgba(255,255,255,0.1)',
                    fontSize: {
                      xs: '1.2rem',
                      md: '1.5rem',
                    },
                  }}
                >
                  Advertisements
                </Typography>

                <Typography
                  sx={{
                    textAlign: 'center',
                    py: 2,
                    fontWeight: 100,
                    bgcolor: '#08111f',
                    borderBottom:
                      '1px solid rgba(255,255,255,0.1)',
                    fontSize: {
                      xs: '1.0rem',
                      md: '0.8rem',
                    },
                  }}
                >
                  તમારી જાહેરાત બતાવવા માટે, એડમિનનો સંપર્ક કરો
                </Typography>

                {/* MOBILE + TABLET VIEW */}
                <Box
                  sx={{
                    display: {
                      xs: 'block',
                      md: 'none',
                    },
                    width: '100%',
                    overflow: 'hidden',
                    height: 'calc(100% - 72px)',
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                      width: 'max-content',
                      p: 2,
                      animation:
                        'scrollAnnouncementsMobile 20s linear infinite',
                      '&:hover': {
                        animationPlayState: 'paused',
                      },
                    }}
                  >
                    {[...announcements, ...announcements].map(
                      (item, index) => (
                        <Box
                          key={index}
                          onClick={() =>
                            handleOpenImage(item.image)
                          }
                          sx={{
                            minWidth: {
                              xs: 220,
                              sm: 280,
                            },
                            borderRadius: 3,
                            overflow: 'hidden',
                            cursor: 'pointer',
                            flexShrink: 0,
                            boxShadow:
                              '0 6px 20px rgba(0,0,0,0.3)',
                            transition: '0.3s ease',
                            '&:hover': {
                              transform: 'scale(1.03)',
                            },
                          }}
                        >
                          <Box
                            component="img"
                            src={item.image}
                            alt={`Announcement ${index + 1}`}
                            sx={{
                              width: '100%',
                              height: {
                                xs: 180,
                                sm: 240,
                              },
                              objectFit: 'cover',
                              display: 'block',
                            }}
                          />
                        </Box>
                      )
                    )}
                  </Stack>
                </Box>

                {/* DESKTOP + TV VIEW */}
                <Box
                  sx={{
                    display: {
                      xs: 'none',
                      md: 'block',
                    },
                    height: 'calc(100% - 72px)',
                    overflow: 'hidden',
                  }}
                >
                  <Stack
                    spacing={2}
                    sx={{
                      p: 2,
                      animation:
                        'scrollAnnouncementsDesktop 18s linear infinite',
                      '&:hover': {
                        animationPlayState: 'paused',
                      },
                    }}
                  >
                    {[...announcements, ...announcements].map(
                      (item, index) => (
                        <Box
                          key={index}
                          onClick={() =>
                            handleOpenImage(item.image)
                          }
                          sx={{
                            borderRadius: 3,
                            overflow: 'hidden',
                            cursor: 'pointer',
                            boxShadow:
                              '0 6px 20px rgba(0,0,0,0.25)',
                            transition: '0.3s ease',
                            '&:hover': {
                              transform: 'scale(1.02)',
                            },
                          }}
                        >
                          <Box
                            component="img"
                            src={item.image}
                            alt={`Announcement ${index + 1}`}
                            sx={{
                              width: '100%',

                              height: {
                                md: 320,
                                lg: 420,
                                xl: 520,
                              },

                              objectFit: 'cover',
                              display: 'block',
                            }}
                          />
                        </Box>
                      )
                    )}
                  </Stack>
                </Box>
              </Box>
            </Grid>

            {/* ABOUT SECTION */}
            <Grid size={{ xs: 12, md: 9 }}>
              <Grid container spacing={0}>
                {/* ABOUT TEXT */}
                <Grid size={{ xs: 12, md: 7 }}>
                  <Box
                    sx={{
                      p: {
                        xs: 3,
                        sm: 4,
                        md: 7,
                      },
                      pt: {
                        xs: 4,
                        md: 9,
                      },
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        fontWeight: 800,
                        color: '#002c3e',
                        fontSize: {
                          xs: '2rem',
                          sm: '2.5rem',
                          md: '4rem',
                          lg: '5rem',
                        },
                        lineHeight: 1.05,
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          color: '#f7444e',
                          display: 'block',
                        }}
                      >
                        About Us
                      </Box>
                    </Typography>

                    <Typography
                      sx={{
                        color: '#4f6572',
                        fontSize: {
                          xs: '1rem',
                          sm: '1.05rem',
                          md: '1.04rem',
                          lg: '1.15rem',
                        },
                        maxWidth: 700,
                        mt: 2.5,
                        lineHeight: 1.9,
                      }}
                    >
                      શ્રી ભૂજ રાજપૂત સોશ્યલ ગ્રુપ સમાજના
                      આર્થીક નબળા પરિવારો ને શૈક્ષણિક,
                      આરોગ્ય કે અન્ય બાબતોને લગતી
                      જરૂરિયાતો માટે મદદરૂપ થવા બનાવવામાં
                      આવેલ છે. આ ગ્રૂપ દ્વારા યથાશક્તિ
                      મુજબ મદદરૂપ થવાનું પ્રયાસ કરવાં
                      આવશે....
                    </Typography>
                  </Box>
                </Grid>

                {/* ABOUT IMAGE */}
                <Grid size={{ xs: 12, md: 5 }}>
                  <Box
                    component="img"
                    src={AboutUs}
                    alt="Community Hero"
                    sx={{
                      width: '100%',
                      height: '100%',
                      minHeight: {
                        xs: 260,
                        sm: 340,
                        md: 520,
                        lg: 620,
                      },
                      objectFit: 'cover',
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* OUR TEAM SECTION */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              py: { xs: 5, md: 8 },
              px: 2,
              bgcolor: '#f3f4f6',
            }}
          >
            <Box
              sx={{
                width: '100%',
                maxWidth: '1200px',
                bgcolor: '#ffffff',
                borderRadius: 4,
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                p: { xs: 3, md: 6 },
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h4"
                textAlign="center"
                sx={{
                  fontWeight: 800,
                  color: '#002c3e',
                  mb: 5,
                  fontSize: {
                    xs: '1.8rem',
                    md: '2.5rem',
                  },
                }}
              >
                OUR{' '}
                <Box
                  component="span"
                  sx={{ color: '#f7444e' }}
                >
                  TEAM
                </Box>
              </Typography>

              <Grid
                container
                spacing={4}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {teamMembers.map((member) => (
                  <Grid
                    key={member.name}
                    size={{ xs: 6, sm: 4, md: 3 }}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                      }}
                    >
                      <Avatar
                        src={member.image || undefined}
                        alt={member.name}
                        sx={{
                          width: {
                            xs: 110,
                            md: 140,
                          },
                          height: {
                            xs: 110,
                            md: 140,
                          },
                          mb: 2,
                          border: '4px solid #f7444e',
                          boxShadow:
                            '0 8px 20px rgba(0,0,0,0.12)',
                          bgcolor: '#f1f5f9',
                          color: '#64748b',
                        }}
                      >
                        {!member.image && (
                          <PersonRounded
                            sx={{
                              fontSize: '4rem',
                            }}
                          />
                        )}
                      </Avatar>

                      <Typography
                        variant="h6"
                        textAlign="center"
                        sx={{
                          fontWeight: 700,
                          color: '#002c3e',
                        }}
                      >
                        {member.name}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>

        {/* HIGHLIGHTS SECTION */}
        <Box
          id="about"
          sx={{
            scrollMarginTop: { xs: 90, md: 120 },
          }}
        >
          <Typography
            variant="h4"
            textAlign="center"
            sx={{
              fontWeight: 800,
              color: '#002c3e',
              fontSize: {
                xs: '1.6rem',
                md: '2.2rem',
              },
              mb: 3.5,
            }}
          >
            શા માટે જોડાશો{' '}
            <Box
              component="span"
              sx={{ color: '#f7444e' }}
            >
              શ્રી ભુજ રાજપૂત સોશ્યલ ગ્રુપ માં?
            </Box>
          </Typography>

          <Grid container spacing={2.5}>
            {highlights.map((item) => (
              <Grid
                key={item.title}
                size={{ xs: 12, md: 4 }}
              >
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: '1px solid #e4e9ee',
                    textAlign: 'center',
                    height: '100%',
                    bgcolor: '#fff',
                  }}
                >
                  <Avatar
                    sx={{
                      mx: 'auto',
                      mb: 1.5,
                      bgcolor: '#f7444e',
                      width: 54,
                      height: 54,
                    }}
                  >
                    {item.icon}
                  </Avatar>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      color: '#002c3e',
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: '#5f7280',
                      mt: 0.8,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>

      {/* FULL SCREEN IMAGE VIEW */}
      <Dialog
        open={Boolean(openImage)}
        onClose={handleCloseImage}
        fullScreen
        sx={{
          '& .MuiDialog-paper': {
            bgcolor: '#000',
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100vh',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: '#000',
          }}
        >
          {/* CLOSE BUTTON */}
          <IconButton
            onClick={handleCloseImage}
            sx={{
              position: 'absolute',
              top: {
                xs: 10,
                md: 20,
              },
              right: {
                xs: 10,
                md: 20,
              },
              zIndex: 10,
              bgcolor: 'rgba(255,255,255,0.15)',
              color: '#fff',
              width: {
                xs: 42,
                md: 50,
              },
              height: {
                xs: 42,
                md: 50,
              },
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.25)',
              },
            }}
          >
            <CloseRounded
              sx={{
                fontSize: {
                  xs: 24,
                  md: 30,
                },
              }}
            />
          </IconButton>

          {/* FULL IMAGE */}
          <Box
            component="img"
            src={openImage}
            alt="Announcement Full View"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              p: {
                xs: 1,
                sm: 2,
                md: 4,
              },
            }}
          />
        </Box>
      </Dialog>
    </>
  )
}

export default HomePage