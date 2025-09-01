import { Outlet } from 'react-router-dom'

import { Breadcrumbs, Footer, Header } from '@widgets/index'

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
