import { Link } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import React from "react"

const Content = styled.div`
  max-width: 860px;
  padding: 1rem 1.0875rem;
  font-size: 1.2rem;
`

const NavLink = styled(Link)`
  color: black;
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;
  }
`

const ExternalLink = styled.a`
  color: black;
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;
`

const HomeLink = styled(NavLink)`
  margin-left: 0;
`

const SiteHeader = styled.header`
  background: transparent;
  display: flex;
  align-content: right;
  justify-content: right;
`

const Header = ({ siteTitle }) => (
  <SiteHeader>
    <Content>
      <p>
        <HomeLink to="/">
        <img align="left" alt="rleungx's Home" width="25px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/maas.svg" />
        </HomeLink>
        <NavLink to="/blog">
        <img align="left" alt="rleungx's Blog" width="25px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/blogger.svg" />
        </NavLink>
        <ExternalLink href="https://github.com/rleungx">
          <img align="left" alt="rleungx's GitHub" width="25px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg" />
        </ExternalLink>
        <ExternalLink href="https://linkedin.com/in/rleungx">
          <img align="left" alt="rleungx's LinkedIn" width="25px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />
        </ExternalLink>
      </p>
    </Content>
  </SiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
