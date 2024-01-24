import Top from '@/components/shared/Top'
import AdBanners from '@/components/home/AdBanners'
import ListRow from '@/components/shared/ListRow'
import CardList from '@/components/home/CardList'

function Home() {
  return (
    <div>
      <Top
        title="혜택 좋은 카드"
        subtitle="회원님을 위해 혜택 좋은 카드를 모아봤어요"
      />
      <AdBanners></AdBanners>
      <CardList></CardList>
    </div>
  )
}

export default Home
