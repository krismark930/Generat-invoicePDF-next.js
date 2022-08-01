import React, { FC } from 'react'
import { Document as PdfDocument } from '@react-pdf/renderer'

interface Props {
  pdfMode?: boolean
  children?: React.ReactNode
}

const Document: FC<Props> = ({ pdfMode, children }) => {
  return <>{pdfMode ? <PdfDocument>{children}</PdfDocument> : <>{children}</>}</>
}

export default Document
