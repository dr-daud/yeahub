import { TransparentFrame } from '@shared/index'

import frame from '../assets/frame.svg'
import './details-icon.css'

export const DetailsIcon = ({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <TransparentFrame className="details" {...props}>
      <img src={frame} alt="frame" />
    </TransparentFrame>
  )
}
