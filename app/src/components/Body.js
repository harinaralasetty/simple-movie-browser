import React from 'react'
import RecordList from './body/RecordList'

function Body({searchResults}) {
  return (
    <div>
        <RecordList records={searchResults} />
    </div>
  )
}

export default Body