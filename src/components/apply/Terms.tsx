import { useState, useCallback, MouseEvent } from 'react'
import Agreement from '../shared/Agreement'
import { 약관목록 } from '@/constants/apply'
import FixedBottomButton from '../shared/FixedBottomButton'
function Terms({ onNext }: { onNext: (terms: string[]) => void }) {
  const [termsAgreements, setTermsAgreements] = useState(() => {
    return 약관목록.reduce<Record<string, boolean>>(
      (prev, term) => ({
        ...prev,
        [term.id]: false,
      }),
      {},
    )
  })

  const handleAllAgreement = useCallback(
    (_: MouseEvent<HTMLElement>, checked: boolean) => {
      setTermsAgreements((prevTerms) => {
        return Object.keys(prevTerms).reduce(
          (prev, key) => ({
            ...prev,
            [key]: checked,
          }),
          {},
        )
      })
    },
    [],
  )

  const 모든약관이_동의되었는가 = Object.values(termsAgreements).every(
    (동의여부) => 동의여부,
  )

  return (
    <div>
      <Agreement>
        <Agreement.Title
          checked={모든약관이_동의되었는가}
          onChange={handleAllAgreement}
        >
          약관에 모두 동의
        </Agreement.Title>
        {약관목록.map(({ id, title, link }) => {
          return (
            <Agreement.Description
              key={id}
              link={link}
              checked={termsAgreements[id]}
              onChange={(e, checked) => {
                setTermsAgreements((prevTerms) => ({
                  ...prevTerms,
                  [id]: checked,
                }))
              }}
            >
              {title}
            </Agreement.Description>
          )
        })}
      </Agreement>
      <FixedBottomButton
        label="약관 동의"
        onClick={() => {
          onNext(Object.keys(termsAgreements))
        }}
      ></FixedBottomButton>
    </div>
  )
}

export default Terms
