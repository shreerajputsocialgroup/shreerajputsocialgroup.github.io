import React, { useState } from 'react';

import {
  Box,
  Stack,
  Typography,
  Button,
  Dialog,
  IconButton,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

import sliderImage1 from '../assets/slider/slide-1.jpeg'
import sliderImage2 from '../assets/slider/slide-2.jpeg'
import sliderImage3 from '../assets/slider/slide-3.jpeg'
import sliderImage4 from '../assets/slider/slide-4.jpeg'

const albums = [
  {
    id: 1,
    title: 'Group Tour',
    cover: {
      src: sliderImage1,
      alt: 'Community celebration event',
    },
    images: [
      {
        src: sliderImage1,
        alt: 'Community celebration event',
      },
      {
        src: sliderImage3,
        alt: 'People attending social group program',
      },
    ],
  },

  {
    id: 2,
    title: 'New Office Opening',
    cover: {
      src: sliderImage2,
      alt: 'Traditional cultural gathering',
    },
    images: [
      {
        src: sliderImage2,
        alt: 'Traditional cultural gathering',
      },
    ],
  },

  {
    id: 3,
    title: 'Other Social Work',
    cover: {
      src: sliderImage4,
      alt: 'SBRSG event moment',
    },
    images: [
      {
        src: sliderImage4,
        alt: 'SBRSG event moment',
      },
    ],
  },
];

const styles = {
  albumContainer: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  albumCard: {
    width: '280px',
    borderRadius: '16px',
    overflow: 'hidden',
    cursor: 'pointer',
    position: 'relative',
    boxShadow: '0 6px 18px rgba(0,0,0,0.12)',
    transition: '0.3s',
  },

  coverImage: {
    width: '100%',
    aspectRatio: '1 / 1',
    objectFit: 'cover',
    display: 'block',
  },

  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: '15px',
    color: '#fff',
    background: 'linear-gradient(transparent, rgba(0,0,0,0.85))',
  },

  viewerContainer: {
    padding: '10px',
  },

  gallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
    gap: '10px',
  },

  galleryImage: {
    width: '100%',
    aspectRatio: '1 / 1',
    objectFit: 'cover',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: '0.3s',
  },
};

function GalleryPage() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleNext = () => {
    const currentIndex = selectedAlbum.images.findIndex(
      (img) => img.src === previewImage.src
    );

    const nextIndex =
      currentIndex === selectedAlbum.images.length - 1
        ? 0
        : currentIndex + 1;

    setPreviewImage(selectedAlbum.images[nextIndex]);
  };

  const handlePrevious = () => {
    const currentIndex = selectedAlbum.images.findIndex(
      (img) => img.src === previewImage.src
    );

    const prevIndex =
      currentIndex === 0
        ? selectedAlbum.images.length - 1
        : currentIndex - 1;

    setPreviewImage(selectedAlbum.images[prevIndex]);
  };

  return (
    <Stack spacing={4}>
      {/* HEADER */}
      <Box textAlign="center">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            color: '#002c3e',
            fontSize: {
              xs: '2rem',
              md: '2.8rem',
            },
          }}
        >
          Gallery
        </Typography>

        <Typography
          sx={{
            color: '#5f7280',
            mt: 1,
          }}
        >
          Memories from Shree Bhuj Rajput Social Group activities and events.
        </Typography>
      </Box>

      {/* SINGLE ALBUM VIEW */}
      {selectedAlbum ? (
        <Box sx={styles.viewerContainer}>
          <Button
            variant="contained"
            onClick={() => setSelectedAlbum(null)}
            sx={{
              mb: 3,
              backgroundColor: '#002c3e',

              '&:hover': {
                backgroundColor: '#01425c',
              },
            }}
          >
            ← Back to Albums
          </Button>

          <Typography
            variant="h4"
            sx={{
              mb: 3,
              fontWeight: 700,
              color: '#002c3e',
            }}
          >
            {selectedAlbum.title}
          </Typography>

          {/* IMAGES GRID */}
          <Box sx={styles.gallery}>
            {selectedAlbum.images.map((img, index) => (
              <Box
                key={index}
                component="img"
                src={img.src}
                alt={img.alt}
                onClick={() => setPreviewImage(img)}
                sx={{
                  ...styles.galleryImage,

                  '&:hover': {
                    transform: 'scale(1.04)',
                  },
                }}
              />
            ))}
          </Box>

          {/* IMAGE PREVIEW */}
          <Dialog
            open={Boolean(previewImage)}
            onClose={() => setPreviewImage(null)}
            fullScreen
            sx={{
              '& .MuiDialog-paper': {
                background: '#000',
                overflow: 'hidden',
              },
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                background: '#000',
              }}
            >
              {/* CLOSE BUTTON */}
              <IconButton
                onClick={() => setPreviewImage(null)}
                sx={{
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  color: '#fff',
                  zIndex: 10,
                  background: 'rgba(255,255,255,0.12)',

                  '&:hover': {
                    background: 'rgba(255,255,255,0.2)',
                  },
                }}
              >
                <CloseIcon />
              </IconButton>

              {/* PREVIOUS BUTTON */}
              <Button
                variant="contained"
                onClick={handlePrevious}
                sx={{
                  position: 'absolute',
                  left: 20,
                  zIndex: 10,
                  minWidth: '50px',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.15)',

                  '&:hover': {
                    background: 'rgba(255,255,255,0.25)',
                  },
                }}
              >
                ←
              </Button>

              {/* IMAGE */}
              {previewImage && (
                <Box
                  component="img"
                  src={previewImage.src}
                  alt={previewImage.alt}
                  sx={{
                    maxWidth: '95%',
                    maxHeight: '95%',
                    objectFit: 'contain',
                    userSelect: 'none',
                  }}
                />
              )}

              {/* NEXT BUTTON */}
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{
                  position: 'absolute',
                  right: 20,
                  zIndex: 10,
                  minWidth: '50px',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.15)',

                  '&:hover': {
                    background: 'rgba(255,255,255,0.25)',
                  },
                }}
              >
                →
              </Button>
            </Box>
          </Dialog>
        </Box>
      ) : (
        /* ALBUM LIST */
        <Box sx={styles.albumContainer}>
          {albums.map((album) => (
            <Box
              key={album.id}
              onClick={() => setSelectedAlbum(album)}
              sx={{
                ...styles.albumCard,

                '&:hover': {
                  transform: 'translateY(-5px)',
                },
              }}
            >
              <Box
                component="img"
                src={album.cover.src}
                alt={album.cover.alt}
                sx={styles.coverImage}
              />

              <Box sx={styles.overlay}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  {album.title}
                </Typography>

                <Typography variant="body2">
                  {album.images.length} Photos
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Stack>
  );
}

export default GalleryPage;