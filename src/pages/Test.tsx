import AdBannerListAddButton from '@/components/test/AdBannerListAddButton'
import CardListAddButton from '@/components/test/CardListAddButton'

type Props = {}

function TestPage({}: Props) {
  return (
    <div>
      <CardListAddButton></CardListAddButton>
      <AdBannerListAddButton></AdBannerListAddButton>
    </div>
  )
}

export default TestPage
