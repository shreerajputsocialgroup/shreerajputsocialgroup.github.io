import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Box,
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
  Stack,
  Chip,
} from '@mui/material'

import families from '../data/familyList.json'

export default function FamilyList() {
  const navigate = useNavigate()

  const [searchText, setSearchText] = useState('')

  const filteredFamilies = useMemo(() => {
    return families.filter((family) =>
      family.familyHead
        ?.toLowerCase()
        .includes(searchText.toLowerCase())
    )
  }, [searchText])

  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 4,
      }}
    >
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
          mb: 3,
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
            variant="h4"
            color='#002c3e'
            fontWeight={700}
          >
            Family Directory
          </Typography>
        </Stack>

        <Stack
          spacing={1}
          alignItems="flex-end"
          width={{
            xs: '100%',
            md: 'auto',
          }}
        >
          <TextField
            size="small"
            label="Search Family Head"
            placeholder="Enter family head name..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            sx={{
              width: {
                xs: '100%',
                sm: 320,
              },
              backgroundColor: '#fff',
              borderRadius: '14px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '14px',
              },
            }}
          />

          <Typography
            variant="body2"
            color='#002c3e'
            sx={{
              fontWeight: 600,
              textAlign: 'right',
            }}
          >
            Total Families: {filteredFamilies.length}
          </Typography>
        </Stack>
      </Box>

      <TableContainer
        component={Paper}
        elevation={3}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Family Head Name</strong>
              </TableCell>

              <TableCell>
                <strong>City</strong>
              </TableCell>

              <TableCell>
                <strong>Contact Number</strong>
              </TableCell>

              <TableCell align="center">
                <strong>Action</strong>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredFamilies.length > 0 ? (
              filteredFamilies.map((family) => (
                <TableRow
                  key={family.id}
                  hover
                >
                  <TableCell>
                    {family.familyHead}
                  </TableCell>

                  <TableCell>
                    {family.city}
                  </TableCell>

                  <TableCell>
                    {family.contact}
                  </TableCell>

                  <TableCell align="center">
                    <Button
                      variant="contained"
                      onClick={() =>
                        navigate(`/families/${family.id}`)
                      }
                    >
                      View Family
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  color='#002c3e'
                  colSpan={5}
                  align="center"
                  sx={{ py: 4 }}
                >
                  <Typography color="text.secondary">
                    No families found.
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}