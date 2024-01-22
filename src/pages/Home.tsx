import { useEffect } from 'react'

import Top from '@/components/shared/Top'

import { getCards } from '@/remote/card'

function Home() {
  useEffect(() => {
    getCards().then((response) => {
      console.log('response', response)
    })
  }, [])
  return (
    <div>
      <Top
        title="혜택 좋은 카드"
        subtitle="회원님을 위해 혜택 좋은 카드를 모아봤어요"
      ></Top>
    </div>
  )
}

export default Home
