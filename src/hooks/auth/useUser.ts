import { UserAtom } from '@/atoms/user'
import { useRecoilValue } from 'recoil'

function useUser() {
  return useRecoilValue(UserAtom)
}

export default useUser
