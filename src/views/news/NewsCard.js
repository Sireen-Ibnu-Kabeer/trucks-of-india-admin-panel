import React from 'react'
import {
  CCol,
  CCard,
  CCardImage,
  CCardImageOverlay,
  CCardBody,
  CCardTitle,
  CCardFooter,
  CCardText,
  CButton,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import image from 'src/assets/images/truck.jpg'
import { cilArrowCircleRight, cilArrowRight, cilTrash } from '@coreui/icons'

const NewsCard = () => {
  return (
    <CCol xs>
      <CCard>
        <CCardImage orientation="top" src={image} />
        <CCardImageOverlay style={{ display: '-webkit-flex', justifyContent: 'space-between' }}>
          <button size="sm" className="newsButton">
            24 Sep 2022
          </button>
          <CButton color="danger" size="sm" className="deleteButton">
            <CIcon icon={cilTrash} />
          </CButton>
        </CCardImageOverlay>
        <CCardBody>
          <CCardTitle>Title</CCardTitle>
          <CCardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation
          </CCardText>
          {/* <>
            <CButton href="#">
              Read More &nbsp;&nbsp;&nbsp;&nbsp;
              <CIcon icon={cilArrowCircleRight} />
            </CButton>
          </> */}
        </CCardBody>
      </CCard>
    </CCol>
  )
}

export default NewsCard
