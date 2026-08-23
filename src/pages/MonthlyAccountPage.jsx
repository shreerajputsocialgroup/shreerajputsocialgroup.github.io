import { useMemo, useState } from 'react'

import {
    Box,
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Stack,
    Button,
    Chip,
} from '@mui/material'

import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded'

// Import PDFs from src/assets/account folder
import pdf2026May from '../assets/account/may-2026.PDF'
import pdf2026MarchApril from '../assets/account/march-april-2026.PDF'
import Pdf2026JanFeb from '../assets/account/jan-feb-2026.PDF'
import pdf2025JanFeb from '../assets/account/jan-feb-2025.PDF'
import pdf2025NovDec from '../assets/account/nov-dec-2025.PDF'
import pdf2024Dec from '../assets/account/dec-2024.PDF'
import pdf2024OctNov from '../assets/account/oct-nov-2024.PDF'

const pdfData = [
    {
        id: 1,
        title: 'May',
        year: '2026',
        file: pdf2026May,
    },
    {
        id: 2,
        title: 'March - April',
        year: '2026',
        file: pdf2026MarchApril,
    },
    {
        id: 3,
        title: 'January - February',
        year: '2026',
        file: Pdf2026JanFeb,
    },
    {
        id: 4,
        title: 'November - December',
        year: '2025',
        file: pdf2025NovDec,
    },
    {
        id: 5,
        title: 'January - February',
        year: '2025',
        file: pdf2025JanFeb,
    },
    {
        id: 6,
        title: 'December',
        year: '2024',
        file: pdf2024Dec,
    },
    {
        id: 7,
        title: 'October - November',
        year: '2024',
        file: pdf2024OctNov,
    },
]

export default function PdfListPage() {
    const [selectedYear, setSelectedYear] =
        useState('All')

    const years = [
        'All',
        ...new Set(pdfData.map((item) => item.year)),
    ]

    const filteredPdfFiles = useMemo(() => {
        return pdfData.filter((item) => {
            return (
                selectedYear === 'All' ||
                item.year === selectedYear
            )
        })
    }, [selectedYear])

    return (
        <Box
            sx={{
                py: 6,
                minHeight: '100vh',
                backgroundColor: '#f5f5f5',
            }}
        >
            <Container maxWidth="xl">
                {/* Header Section */}
                <Box
                    color='#002c3e'
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: {
                            xs: 'flex-start',
                            md: 'flex-start',
                        },
                        flexDirection: {
                            xs: 'column',
                            md: 'row',
                        },
                        gap: 3,
                        mb: 6,
                    }}
                >
                    {/* Left Side */}
                    <Box>
                        <Typography
                            variant="h4"
                            fontWeight={700}
                        >
                            Account PDF Reports
                        </Typography>

                        <Typography
                            variant="body1"
                            color="text.secondary"
                            mt={1}
                        >
                            Browse and open account PDF reports year wise
                        </Typography>
                    </Box>

                    {/* Right Side */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: {
                                xs: 'flex-start',
                                md: 'flex-end',
                            },
                            width: {
                                xs: '100%',
                                md: 'auto',
                            },
                            ml: 'auto',
                        }}
                    >
                        <FormControl
                            size="small"
                            sx={{
                                minWidth: 190,
                                backgroundColor: '#fff',
                            }}
                        >
                            <InputLabel>
                                Select Year
                            </InputLabel>

                            <Select
                                value={selectedYear}
                                label="Select Year"
                                onChange={(e) =>
                                    setSelectedYear(
                                        e.target.value
                                    )
                                }
                            >
                                {years.map((year) => (
                                    <MenuItem
                                        key={year}
                                        value={year}
                                    >
                                        {year}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <Chip
                            label={`${filteredPdfFiles.length} PDF Files Found`}
                            color="error"
                            sx={{
                                mt: 2,
                                width: 'fit-content',
                            }}
                        />
                    </Box>
                </Box>

                {/* PDF Grid */}
                <Grid
                    container
                    spacing={2}
                >
                    {filteredPdfFiles.map((file) => (
                        <Grid
                            item
                            xs={6}
                            sm={4}
                            md={3}
                            lg={2.4}
                            key={file.id}
                            sx={{
                                display: 'flex',
                            }}
                        >
                            <Card
                                sx={{
                                    width: 190,
                                    height: 200,
                                    borderRadius: 3,
                                    transition: '0.3s',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent:
                                        'space-between',
                                    '&:hover': {
                                        transform:
                                            'translateY(-4px)',
                                        boxShadow: 4,
                                    },
                                }}
                            >
                                <CardContent
                                    sx={{
                                        p: 2,
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection:
                                            'column',
                                        justifyContent:
                                            'space-between',
                                        '&:last-child': {
                                            pb: 2,
                                        },
                                    }}
                                >
                                    <Stack
                                        spacing={1.5}
                                        alignItems="center"
                                        sx={{
                                            height: '100%',
                                            justifyContent:
                                                'space-between',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 55,
                                                height: 55,
                                                borderRadius: 2,
                                                backgroundColor:
                                                    '#ffebee',
                                                display: 'flex',
                                                alignItems:
                                                    'center',
                                                justifyContent:
                                                    'center',
                                            }}
                                        >
                                            <PictureAsPdfRoundedIcon
                                                sx={{
                                                    fontSize: 32,
                                                    color:
                                                        '#d32f2f',
                                                }}
                                            />
                                        </Box>

                                        <Typography
                                            variant="body1"
                                            fontWeight={600}
                                            textAlign="center"
                                            sx={{
                                                height: 48,
                                                display: 'flex',
                                                alignItems:
                                                    'center',
                                                justifyContent:
                                                    'center',
                                                overflow:
                                                    'hidden',
                                                fontSize:'14px'
                                            }}
                                        >
                                            {file.title}
                                        </Typography>

                                        <Chip
                                            label={file.year}
                                            color="error"
                                            size="small"
                                        />

                                        <Button
                                            variant="contained"
                                            color="error"
                                            size="small"
                                            endIcon={
                                                <OpenInNewRoundedIcon />
                                            }
                                            href={file.file}
                                            target="_blank"
                                            fullWidth
                                            sx={{
                                                borderRadius: 2,
                                                textTransform:
                                                    'none',
                                                fontSize:
                                                    '0.8rem',
                                            }}
                                        >
                                            Open PDF
                                        </Button>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Empty State */}
                {filteredPdfFiles.length === 0 && (
                    <Box
                        textAlign="center"
                        py={10}
                    >
                        <Typography
                            variant="h6"
                            color="text.secondary"
                        >
                            No PDF files found
                        </Typography>
                    </Box>
                )}
            </Container>
        </Box>
    )
}