import React from 'react'

import './index.scss'
import facebook from '../../images/icons/facebook.svg'
import twitter from '../../images/icons/twitter.svg'
import instagram from '../../images/icons/instagram.svg'

const socialList = [
  {
    title: 'facebook',
    href: '/',
    imageSrc: facebook,
  },
  {
    title: 'twitter',
    href: '/',
    imageSrc: twitter,
  },
  {
    title: 'instagram',
    href: '/',
    imageSrc: instagram,
  },
]

const SocialList = () => {
  return (
    <ul className="social-list">
      {socialList.map((socialListItem, index) => (
        <li className="social-list__item" key={index}>
          <a href={socialListItem.href} className="social-list__link">
            <img
              className="w-100"
              src={socialListItem.imageSrc}
              alt={socialListItem.title}
            />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialList
