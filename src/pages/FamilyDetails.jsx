import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import {
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
  Box,
} from '@mui/material'

import families from '../data/familyDetail.json'

export default function FamilyDetails() {
  const { familyId } = useParams()
  const navigate = useNavigate()

  const family = useMemo(() => {
    return families.find(
      (item) => String(item.id) === String(familyId)
    )
  }, [familyId])

  const members = family?.members || []

  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 4,
      }}
    >
      <Box
        sx={{
          mb: 3,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          gutterBottom
        >
          Family Members
        </Typography>

        {family && (
          <Typography
            variant="body1"
            color="text.secondary"
          >
            Family Head: {family.familyHead}
          </Typography>
        )}

        {family && (
          <Typography
            variant="body1"
            color="text.secondary"
          >
            Address:  {family.address}
          </Typography>
        )}
      </Box>

      <TableContainer
        component={Paper}
        elevation={3}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Name</strong>
              </TableCell>

              <TableCell>
                <strong>Age</strong>
              </TableCell>

              <TableCell>
                <strong>Relationship</strong>
              </TableCell>

              <TableCell>
                <strong>Education</strong>
              </TableCell>

              <TableCell>
                <strong>Occupation</strong>
              </TableCell>

              <TableCell>
                <strong>Marital Status</strong>
              </TableCell>

              <TableCell>
                <strong>Contact Number</strong>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {members.length > 0 ? (
              members.map((member, index) => (
                <TableRow
                  key={index}
                  hover
                >
                  <TableCell>
                    {member.name}
                  </TableCell>

                  <TableCell>
                    {member.age}
                  </TableCell>

                  <TableCell>
                    {member.relationship}
                  </TableCell>

                  <TableCell>
                    {member.education}
                  </TableCell>

                  <TableCell>
                    {member.occupation}
                  </TableCell>

                  <TableCell>
                    {member.maritalStatus}
                  </TableCell>

                  <TableCell>
                    {member.contact}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  align="center"
                  sx={{ py: 4 }}
                >
                  <Typography color="text.secondary">
                    No family members found.
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Button
        variant="outlined"
        sx={{ mt: 3 }}
        onClick={() => navigate('/familydirectory')}
      >
        Back to Family Directory
      </Button>
    </Container>
  )
}