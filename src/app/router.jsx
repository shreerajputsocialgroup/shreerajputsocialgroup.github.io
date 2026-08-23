import { createHashRouter } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import GalleryPage from '../pages/GalleryPage'
import ContactPage from '../pages/ContactPage'
import DonorPage from '../pages/DonorPage'
import MonthlyAccountPage from '../pages/MonthlyAccountPage'
import FamilyDirectoryPage from '../pages/FamilyDirectoryPage'
import FamilyDetails from '../pages/FamilyDetails'

export const router = createHashRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'gallery', element: <GalleryPage /> },
      { path: 'donors', element: <DonorPage />},
      { path: 'monthlyaccount', element: <MonthlyAccountPage /> },
      { path: 'familydirectory', element: <FamilyDirectoryPage /> },
      { path: 'families/:familyId', element: < FamilyDetails/> },
      { path: 'contact', element: <ContactPage />},
    ],
  },
])
