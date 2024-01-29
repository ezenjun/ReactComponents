export interface Term {
  id: string
  link?: string
  title: string
}

interface ApplyValues {
  userId: number
  terms: Array<Term['id']>
  appliedAt: Date
  cardId: string
}
