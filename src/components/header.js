import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: pink;
  display: flex;
  height: 10rem;
  width: 100%;
`;

const HeaderTitle = styled.div`
  margin: auto 2rem 2rem auto;
`;

const HeaderTitleText = styled.div`
  font-family: 'Ubuntu', sans-serif;
`;

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderTitle>
      <HeaderTitleText>
        <Link to="/">{siteTitle}</Link>
      </HeaderTitleText>
    </HeaderTitle>
  </HeaderContainer>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
