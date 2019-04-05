import React from 'react'

import NavbarProject from '.././Navbar'
import Footer from '.././Footer'

export default props => {
  return (
    <React.Fragment>
      <NavbarProject />
      <main className="main">{props.children}</main>
      <Footer />
    </React.Fragment>
  )
}
