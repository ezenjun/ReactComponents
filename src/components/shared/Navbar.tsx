import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from '@shared/Button'
import Flex from './Flex'
import { css } from '@emotion/react'
import { colors } from '@/styles/colorPalette'

type Props = {}

function Navbar({}: Props) {
  const location = useLocation()
  const showSignButton =
    ['/signup', '/signin'].includes(location.pathname) === false

  return (
    <Flex justify="space-between" align="center" css={navbarContainerStyles}>
      <Link to="/">홈</Link>
      {showSignButton && (
        <Link to="/signup">
          <Button>로그인/회원가입</Button>
        </Link>
      )}
    </Flex>
  )
}

const navbarContainerStyles = css`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${colors.white};
  padding: 10px 24px;
  border-bottom: 1px solid ${colors.grey};
`

export default Navbar
