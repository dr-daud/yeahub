import { Outlet } from 'react-router-dom'

import Breadcrumbs from '@widgets/breadcrumbs/ui/breadcrumbs/Breadcrumbs'
import Footer from '@widgets/footer/ui/footer/Footer'
import Header from '@widgets/header/ui/header/Header'

const BaseLayout = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Breadcrumbs />
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}

export default BaseLayout
