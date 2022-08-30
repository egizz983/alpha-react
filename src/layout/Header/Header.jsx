import React, { useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import LogoImg from '../../assets/images/logo.png'
import Classes from '../scss/Header.module.scss'
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'

const navLinks = [
  {
    pageName: 'Home',
    to: '/',
  },
  {
    pageName: 'Store',
    to: '/store',
  },
  {
    pageName: 'Blog',
    to: '/home/blog',
  },
  {
    pageName: 'News',
    to: '/home/news',
  },
  {

    pageName: 'WhitePaper',
    to: 'https://alphaplay.games/about',
  },
  {
    pageName: 'Careers',
    to: '/careers',
  },
  {
    pageName: 'Contact Us',
    to: '/contactus',
  },
]

const Header = () => {
  const [showNavItems, setShowShowNavItems] = useState(false)
  const toggleNavbar = () => {
    setShowShowNavItems(!showNavItems)
  }
  return (
    <header className={`${Classes.header} position-fixed top-0 w-100 `}>
      <nav className={Classes.navbar}>
        <Container className={Classes.headerContainer}>
          <div className='d-flex align-items-center justify-content-between flex-wrap gap-2 position-relative'>
            <div>
              <Link to='/'>
                <img src={LogoImg} alt='logo' className={Classes.logoImg} />
              </Link>
            </div>
            <Button className='d-xl-none' onClick={toggleNavbar}>
              Toggle
            </Button>
            {/* desktop navbar start */}
            <div className='d-none d-xl-flex justify-content-between flex-wrap gap-2'>
              <ul className='list-unstyled  d-flex flex-wrap align-items-center gap-2 gap-lg-4 mb-0 me-3'>
                {navLinks.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        isActive
                          ? `${Classes.activeLink} ${Classes.navLinks} text-decoration-none`
                          : `${Classes.navLinks} text-white text-decoration-none`
                      }
                    >
                      {item.pageName}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className='d-flex flex-wrap gap-2'>
                <div
                  style={{marginTop: '1px'}} className={`${Classes.searchWrapper} py-2 px-3 d-flex align-items-center gap-2`}
                >
                  <SearchIcon />
                  <input
                    placeholder='Search'
                    type='search'
                    className={`bg-transparent ${Classes.searchInput}`}
                  />
                </div>{/*}

                <div
                  className={`${Classes.selectWrapper} py-2 px-3 d-flex align-items-center me-0 me-lg-2`}
                >
                  <select name='' id='' className={Classes.navSelect}>
                    <option>Games</option>
                  </select>
                    </div>*/}

                <div className=' d-flex align-items-center gap-2 gap-md-3 flex-wrap'>
                  <Link to='/login' className=' text-white text-decoration-none'>
                    Login
                  </Link>
                  <Link
                    to='/signup'
                    className={`${Classes.signupBtn} text-white text-decoration-none d-flex justify-content-center align-items-center`}
                  >
                    <span>Sign up</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* desktop navbar end */}
            {showNavItems && (
              <div className={`${Classes.mobileNavBlock} p-5`}>
                <Row>
                  <Col>
                    <ul className='list-unstyled'>
                      {navLinks.map((item, index) => (
                        <li key={index}>
                          <Link
                            to={item.to}
                            className={`${Classes.navLinks} text-white text-decoration-none`}
                          >
                            {item.pageName}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Col>
                  <Col>
                    <div>
                      <div
                        className={`${Classes.searchWrapper} py-2 px-3 d-flex align-items-center gap-2 mb-3`}
                      >
                        <SearchIcon />
                        <input
                          placeholder='Search'
                          type='search'
                          className={`bg-transparent ${Classes.searchInput}`}
                        />
                      </div>

                      {/*
                      <div
                        className={`${Classes.selectWrapper} py-2 px-3 d-flex align-items-center me-0 me-lg-2 mb-3`}
                      >
                        <select name='' id='' className={Classes.navSelect}>
                          <option>Games</option>
                        </select>
                      </div>*/}

                      <div className='d-flex align-items-center gap-2 gap-md-3 flex-wrap'>
                        <Link
                          to='/login'
                          className='text-white text-decoration-none'
                        >
                          Login
                        </Link>
                        <Link
                          to='/signup'
                          className={`${Classes.signupBtn} text-white text-decoration-none py-3 px-4`}
                        >
                          Sign up
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            )}
          </div>
        </Container>
      </nav>
    </header>
  )
}

export default Header
