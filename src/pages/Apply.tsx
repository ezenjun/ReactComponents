import BasicInfo from '@apply/BasicInfo'
import CardInfo from '@apply/CardInfo'
import Terms from '@apply/Terms'
import React, { useState } from 'react'

function ApplyPage() {
  const [step, setStep] = useState(0)

  const handleTermsChange = (terms: string[]) => {}
  return (
    <div>
      {step === 0 ? <Terms onNext={handleTermsChange} /> : null}
      {step === 1 ? <BasicInfo /> : null}
      {step === 2 ? <CardInfo /> : null}
    </div>
  )
}

export default ApplyPage
