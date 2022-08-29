import React, { useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  // CFormInput,
  CButton,
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
import * as eva from 'eva-icons'
// import { cilCommentBubble, cilEyedropper, cilPen, cilTrash } from '@coreui/icons'

const UsedTrucks = () => {
  useEffect(() => {
    // add this line
    eva.replace()
  }, [])
  return (
    // <div>Used Trucks</div>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader style={{ display: 'flex', justifyContent: 'space-between' }}>
            <strong>Used Trucks Data</strong>
            <CButton color="primary">Add</CButton>
          </CCardHeader>
          <CCardBody>
            <CTable bordered>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Model</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Color</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Price</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Some data</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell>C01MO2</CTableDataCell>
                  <CTableDataCell>Red</CTableDataCell>
                  <CTableDataCell>700000</CTableDataCell>
                  <CTableDataCell>nil</CTableDataCell>
                  <CTableDataCell>
                    <CButton color="primary" href="/view" className="w-0">
                      <i data-eva="eye" fill="white" width="16px" height="16px" />
                    </CButton>
                    &nbsp;&nbsp;
                    <CButton color="warning" href="/edit" className="w-0">
                      <i data-eva="edit-2" fill="white" width="16px" height="16px" />
                    </CButton>
                    &nbsp;&nbsp;
                    <CButton color="danger" href="#" className="w-0">
                      <i data-eva="trash-2" fill="white" width="16px" height="16px" />
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">2</CTableHeaderCell>
                  <CTableDataCell>C01MO3</CTableDataCell>
                  <CTableDataCell>Blue</CTableDataCell>
                  <CTableDataCell>750000</CTableDataCell>
                  <CTableDataCell>nil</CTableDataCell>
                  <CTableDataCell>
                    <CButton color="primary" href="/view" className="w-0">
                      <i data-eva="eye" fill="white" width="16px" height="16px" />
                    </CButton>{' '}
                    &nbsp;&nbsp;
                    <CButton color="warning" href="/edit" className="w-0">
                      <i data-eva="edit-2" fill="white" width="16px" height="16px" />
                    </CButton>
                    &nbsp;&nbsp;
                    <CButton color="danger" href="#" className="w-0">
                      <i data-eva="trash-2" fill="white" width="16px" height="16px" />
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default UsedTrucks
