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

const AddBus = () => {
  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader style={{ display: 'flex', justifyContent: 'space-between' }}>
            <strong>Add New Bus Data</strong>
            <CButton color="primary" href="/base/used-bus">
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
                    label="Model"
                    placeholder="eg: C01M001"
                    aria-describedby="exampleFormControlInputHelpInline"
                  />
                </CCol>
                <CCol style={{ marginBottom: 20 }}>
                  <CFormSelect aria-label="Default select example" label="Color">
                    <option>Open this select menu</option>
                    <option value="1">Red</option>
                    <option value="2">Blue</option>
                    <option value="3">White</option>
                  </CFormSelect>
                </CCol>
              </CRow>
              <CRow>
                <CCol style={{ marginBottom: 20 }}>
                  <CFormInput
                    type="input"
                    id="price"
                    label="Price"
                    placeholder="Enter the vehicle price"
                    aria-describedby="exampleFormControlInputHelpInline"
                  />
                </CCol>
                <CCol style={{ marginBottom: 20 }}>
                  <CFormInput
                    type="input"
                    id="remarks"
                    label="Remarks"
                    placeholder="Enter remarks if any"
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
                    href="/base/used-bus"
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

export default AddBus
