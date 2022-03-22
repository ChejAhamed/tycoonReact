import React from 'react';
import { CFooter, CLink } from '@coreui/react';
import './Footer.css';

function Footer() {
  return (
    <CFooter className="footer">
      <div>
        <CLink href="https://coreui.io">CoreUI</CLink>
        <span>&copy; 2021 creativeLabs.</span>
      </div>
      <div>
        <span>Powered by</span>
        <CLink href="https://coreui.io">CoreUI</CLink>
      </div>
    </CFooter>
  );
}

export default Footer;
