import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CFormInput,
  CFormSelect,
  CButton,
} from '@coreui/react'

const AddNews = () => {
  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader style={{ display: 'flex', justifyContent: 'space-between' }}>
            <strong>Add New News Data</strong>
            <CButton color="primary" href="/news">
              Back
            </CButton>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CRow>
                <CCol style={{ marginBottom: 20 }}>
                  <CFormInput
                    type="input"
                    id="model"
                    label="Image"
                    placeholder="Upload Image"
                    aria-describedby="exampleFormControlInputHelpInline"
                  />
                </CCol>
                <CCol style={{ marginBottom: 20 }}>
                  <CFormInput
                    type="input"
                    id="model"
                    label="Title"
                    placeholder="Enter Heading"
                    aria-describedby="exampleFormControlInputHelpInline"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol style={{ marginBottom: 20 }}>
                  <CFormInput
                    type="input"
                    id="price"
                    label="Content"
                    placeholder="Enter content"
                    aria-describedby="exampleFormControlInputHelpInline"
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol style={{ display: 'flex', justifyContent: 'center' }}>
                  <CButton
                    color="primary"
                    style={{
                      maxWidth: 200,
                      marginTop: 20,
                    }}
                    href="/news"
                  >
                    Submit
                  </CButton>
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AddNews
