import { FileText } from 'lucide-react'
import { PROFILE } from '../data/profile.js'

// Ouvre le CV dans la visionneuse PDF du navigateur, dans un nouvel onglet.
function CvLink({ children, ...props }) {
  return (
    <a href={PROFILE.cv.url} target="_blank" rel="noopener noreferrer" {...props}>
      <FileText aria-hidden="true" />
      {children}
      <span className="sr-only"> (nouvel onglet)</span>
    </a>
  )
}

export default CvLink
