import React from 'react'
import DocumentsGrid from '../components/DocumentsPage/DocumentsGrid'
import DocumentsTable from '../components/DocumentsPage/DocumentsTable'
import '../styles/Documents.css'
const Documents = () => {
  return (
    <div >
      <DocumentsGrid />
      <DocumentsTable /> 
    </div>
  )
}

export default Documents
