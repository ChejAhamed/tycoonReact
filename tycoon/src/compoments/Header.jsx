import React, { useState } from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  CNavItem, CHeader, CContainer, CNavLink, CHeaderBrand,
  CHeaderToggler, CCollapse, CHeaderNav, CAvatar,
} from '@coreui/react';
import './Header.css';

function Header() {
  const [visible, setVisible] = useState(false);
  return (

    <CHeader>
      <CContainer fluid>
        <CHeaderBrand href="/">
          <CAvatar src="https://media.istockphoto.com/vectors/plan00layouttemplatenumbered60-vector-id1011366624?s=612x612" />
        </CHeaderBrand>
        <CHeaderToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="header-collapse" visible={!visible}>
          <CHeaderNav>
            <CNavItem>
              <CNavLink href="/" active>
                Home
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/game" active>
                Tycoon
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/aboutus" active>
                About Us
              </CNavLink>
            </CNavItem>
          </CHeaderNav>
        </CCollapse>
      </CContainer>
    </CHeader>
  );
}

export default Header;
