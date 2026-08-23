import { useMemo, useState } from 'react'

import {
  Avatar,
  Box,
  Container,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material'

import CloseRounded from '@mui/icons-material/CloseRounded'
import PersonRounded from '@mui/icons-material/PersonRounded'
import SearchRounded from '@mui/icons-material/SearchRounded'

import donorsData from '../data/donors.json'

import Photo1 from '../assets/team/member-1.jpeg'
import Photo2 from '../assets/team/member-2.jpeg'
import Photo3 from '../assets/Donor/donor-3.jpeg'
import Photo4 from '../assets/team/member-3.jpeg'

const imageMap = {
  'member-1': Photo1,
  'member-2': Photo2,
  'member-3': Photo4,
  'donor-3': Photo3,
}

function DonorPage() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [searchText, setSearchText] = useState('')

  const donors = useMemo(() => {
    return donorsData
      .map((donor) => ({
        ...donor,
        image: donor.image ? imageMap[donor.image] : '',
      }))
      .sort((a, b) =>
        a.name.localeCompare(b.name, undefined, {
          sensitivity: 'base',
        })
      )
  }, [])

  const filteredPhotos = useMemo(() => {
    return donors.filter((photo) =>
      photo.name.toLowerCase().includes(searchText.toLowerCase())
    )
  }, [donors, searchText])

  const handleOpen = (photo) => {
    if (photo.image) {
      setSelectedPhoto(photo)
    }
  }

  const handleClose = () => {
    setSelectedPhoto(null)
  }

  return (
    <Box
      sx={{
        py: { xs: 5, md: 8 },
        backgroundColor: '#f8fafc',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth='xl'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            alignItems: {
              xs: 'center',
              md: 'flex-start',
            },
            justifyContent: 'space-between',
            gap: 3,
          }}
        >
          <Stack
            spacing={1.5}
            alignItems={{
              xs: 'center',
              md: 'flex-start',
            }}
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
          >
            <Typography
              variant='h3'
              color='#002c3e'
              fontWeight={800}
              sx={{
                fontSize: {
                  xs: '1.8rem',
                  sm: '2.3rem',
                  md: '2.8rem',
                },
              }}
            >
              Donors' List
            </Typography>

            <Typography
              variant='body1'
              color='#002c3e'
              maxWidth='700px'
              sx={{
                fontSize: {
                  xs: '0.9rem',
                  md: '1rem',
                },
              }}
            >
              Meet our respected donors and supporters.
            </Typography>
          </Stack>

          <Stack
            spacing={1}
            alignItems={{
              xs: 'center',
              md: 'flex-end',
            }}
            width={{
              xs: '100%',
              md: 'auto',
            }}
          >
            <TextField
              placeholder='Search donor...'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              size='small'
              sx={{
                width: {
                  xs: '100%',
                  sm: '320px',
                },
                backgroundColor: '#fff',
                borderRadius: '14px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '14px',
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchRounded />
                  </InputAdornment>
                ),
              }}
            />

            {searchText.trim() !== '' && (
              <Typography
                variant='body2'
                color='#002c3e'
                sx={{
                  fontWeight: 600,
                  fontSize: '0.85rem',
                }}
              >
                Total Results: {filteredPhotos.length}
              </Typography>
            )}
          </Stack>
        </Box>

        <Box
          sx={{
            mt: {
              xs: 5,
              md: 6,
            },
          }}
        >
          <Grid
            container
            spacing={{ xs: 2.5, md: 2 }}
            justifyContent='center'
          >
            {filteredPhotos.map((photo) => (
              <Grid
                key={photo.id}
                size={{
                  xs: 6,
                  sm: 4,
                  md: 12 / 7,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    cursor: photo.image ? 'pointer' : 'default',
                  }}
                  onClick={() => handleOpen(photo)}
                >
                  {photo.image ? (
                    <Avatar
                      src={photo.image}
                      alt={photo.name}
                      sx={{
                        width: {
                          xs: 72,
                          sm: 78,
                          md: 85,
                        },
                        height: {
                          xs: 72,
                          sm: 78,
                          md: 85,
                        },
                        border: '3px solid white',
                        boxShadow: '0 4px 14px rgba(0,0,0,0.10)',
                        transition: '0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                  ) : (
                    <Avatar
                      sx={{
                        width: {
                          xs: 72,
                          sm: 78,
                          md: 85,
                        },
                        height: {
                          xs: 72,
                          sm: 78,
                          md: 85,
                        },
                        backgroundColor: '#e2e8f0',
                        color: '#64748b',
                        border: '3px solid white',
                        boxShadow: '0 4px 14px rgba(0,0,0,0.10)',
                      }}
                    >
                      <PersonRounded
                        sx={{
                          fontSize: {
                            xs: 34,
                            md: 42,
                          },
                        }}
                      />
                    </Avatar>
                  )}

                  <Typography
                    variant='body2'
                    color='#002c3e'
                    fontWeight={700}
                    sx={{
                      mt: 1.5,
                      fontSize: {
                        xs: '0.78rem',
                        md: '0.82rem',
                      },
                      lineHeight: 1.35,
                      maxWidth: '120px',
                      minHeight: '40px',
                      display: '-webkit-box',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {photo.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {filteredPhotos.length === 0 && searchText.trim() !== '' && (
            <Typography
              textAlign='center'
              color='#002c3e'
              mt={6}
            >
              No donors found.
            </Typography>
          )}
        </Box>
      </Container>

      <Dialog
        open={Boolean(selectedPhoto)}
        onClose={handleClose}
        maxWidth='md'
        fullWidth
      >
        <DialogContent
          sx={{
            p: 0,
            position: 'relative',
            backgroundColor: '#000',
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              zIndex: 10,
              backgroundColor: 'rgba(255,255,255,0.2)',
              color: '#fff',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.3)',
              },
            }}
          >
            <CloseRounded />
          </IconButton>

          {selectedPhoto && (
            <Box>
              <Box
                component='img'
                src={selectedPhoto.image}
                alt={selectedPhoto.name}
                sx={{
                  width: '100%',
                  maxHeight: '85vh',
                  objectFit: 'contain',
                  display: 'block',
                  backgroundColor: '#000',
                }}
              />

              <Typography
                variant='h6'
                textAlign='center'
                sx={{
                  py: 2,
                  color: '#fff',
                  fontWeight: 700,
                }}
              >
                {selectedPhoto.name}
              </Typography>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  )
}

export default DonorPage