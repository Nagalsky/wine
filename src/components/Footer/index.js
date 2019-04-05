import React from 'react'
import Mailto from 'react-protected-mailto'
import { Container, Row, Col } from 'reactstrap'

import './index.scss'
import footerLogo from '../../images/elements/logo-footer.svg'
import SocialList from '../SocialList'

const footerMenu = [
  { title: 'FAQS', href: '/' },
  { title: 'CONTACT US', href: '/' },
  { title: 'Terms & Policies', href: '/' },
]

const footerDescription = `Good Pair Days supports the responsible service of alcohol. It is against the law to sell or supply alcohol to, or obtain alcohol on behalf of, a person under the age of 18 years.
License number LIQP770016794.`

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center mb-4 mb-md-5">
          <Col>
            <a href="/" className="footer__logo">
              <img
                src={footerLogo}
                alt="footer logo"
                className="w-100"
              />
            </a>
          </Col>
          <Col className="text-right">
            <ul className="footer__nav list-unstyled">
              {footerMenu.map((footerMenuItem, index) => (
                <li className="footer__nav__item" key={index}>
                  <a
                    href={footerMenuItem.href}
                    className="footer__nav__link"
                  >
                    {footerMenuItem.title}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
        <p className="mb-4 mb-md-5">{footerDescription}</p>
        <h4>Say hello</h4>
        <p class="mb-4">
          <Mailto
            email="hello@goodpairdays.com"
            headers={
              ({ subject: 'hello@goodpairdays.com' },
              { cc: 'hello@goodpairdays.com' })
            }
          />
        </p>

        <SocialList className="mb-4" />

        <p>© Good Pair Days. All rights reserved.</p>
      </Container>
    </footer>
  )
}

export default Footer
