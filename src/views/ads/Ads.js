import React from 'react'
import { CRow, CButton } from '@coreui/react'
import NewsCard from '../news/NewsCard'

const Ads = () => {
  return (
    <>
      <CRow>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px' }}>
          <h3>Ads</h3>
          <CButton color="primary" href="/ads/add">
            Add
          </CButton>
        </div>
      </CRow>
      <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </CRow>
    </>
  )
}

export default Ads
