import FixedBottomButton from '@/components/shared/FixedBottomButton'
import Flex from '@/components/shared/Flex'
import { css } from '@emotion/react'
import { motion } from 'framer-motion'
import ListRow from '@/components/shared/ListRow'
import Text from '@/components/shared/Text'
import Top from '@/components/shared/Top'
import { getCard } from '@/remote/card'
import { colors } from '@/styles/colorPalette'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

function CardPage() {
  const { id = '' } = useParams()
  const { data } = useQuery(['card', id], () => getCard(id), {
    enabled: id !== '',
  })

  if (data == null) {
    return null
  }

  const { name, corpName, promotion, tags, benefit } = data
  const subTitle =
    promotion != null ? removeHTMLTags(promotion.title) : tags.join(', ')
  return (
    <div>
      <Top title={`${corpName} ${name}`} subtitle={subTitle}></Top>
      <ul>
        {benefit.map((text, index) => {
          return (
            <motion.li
              initial={{ opacity: 0, translateX: -90 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{
                duration: 0.7,
                ease: 'easeInOut',
                delay: index * 0.1,
              }}
            >
              <ListRow
                as="div"
                left={<IconCheck></IconCheck>}
                contents={
                  <ListRow.Texts title={`혜택 ${index + 1}`} subTitle={text} />
                }
              />
            </motion.li>
          )
        })}
      </ul>

      {promotion != null ? (
        <Flex direction="column" css={termsContainerStyles}>
          <Text bold={true}>유의사항</Text>
          <Text typography="t7">{removeHTMLTags(promotion.terms)}</Text>
        </Flex>
      ) : null}
      <FixedBottomButton
        label="신청하기"
        onClick={() => alert('clicked')}
      ></FixedBottomButton>
    </div>
  )
}

function IconCheck() {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      height={20}
      width={20}
    >
      <path
        d="M14.72,8.79l-4.29,4.3L8.78,11.44a1,1,0,1,0-1.41,1.41l2.35,2.36a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29l5-5a1,1,0,0,0,0-1.42A1,1,0,0,0,14.72,8.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        fill={colors.blue}
      />
    </svg>
  )
}

function removeHTMLTags(text: string) {
  let output = ''
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === '<') {
      for (let j = i + 1; j < text.length; j += 1) {
        if (text[j] === '>') {
          i = j
          break
        }
      }
    } else {
      output += text[i]
    }
  }
  return output
}

const termsContainerStyles = css`
  margin-top: 80px;
  padding: 0 24px 88px 24px;
`

export default CardPage
