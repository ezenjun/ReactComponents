//인증처리
import React, { useState } from 'react'
import { auth } from '@/remote/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useSetRecoilState } from 'recoil'
import { UserAtom } from '@/atoms/user'

type Props = {}

function AuthGuard({ children }: { children: React.ReactNode }) {
  const [initialize, setInitialize] = useState(false)
  const setUser = useSetRecoilState(UserAtom)

  onAuthStateChanged(auth, (user) => {
    setInitialize(true)
    if (user != null) {
      setUser({
        uid: user.uid,
        email: user.email ?? '',
        displayName: user.displayName ?? '',
      })
    } else {
      setUser(null)
    }
  })

  if (initialize === false) {
    return null
  }

  return <>{children}</>
}

export default AuthGuard
