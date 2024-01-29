import { useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from '@shared/Button'
import Flex from './Flex'
import { css } from '@emotion/react'
import { colors } from '@/styles/colorPalette'
import useUser from '@/hooks/auth/useUser'
import { signOut } from 'firebase/auth'
import { auth } from '@/remote/firebase'

type Props = {}

function Navbar({}: Props) {
  const location = useLocation()
  const user = useUser()
  console.log(user)
  const showSignButton =
    ['/signup', '/signin'].includes(location.pathname) === false

  const handleLogout = useCallback(() => {
    console.log('logout clicked')
    signOut(auth)
    console.log(user)
  }, [])

  const renderButton = useCallback(() => {
    if (user != null) {
      return <Button onClick={handleLogout}>로그아웃</Button>
    }
    if (showSignButton) {
      return (
        <Link to="/signin">
          <Button>로그인/회원가입</Button>
        </Link>
      )
    }
    return null
  }, [user, showSignButton, handleLogout])

  return (
    <Flex justify="space-between" align="center" css={navbarContainerStyles}>
      <Link to="/">홈</Link>
      {renderButton()}
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
