import React from 'react'
import { CRow, CButton } from '@coreui/react'

import NewsCard from './NewsCard'

const News = () => {
  return (
    <>
      <CRow>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px' }}>
          <h3>News</h3>
          <CButton color="primary" href="/news/add">
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

export default News
