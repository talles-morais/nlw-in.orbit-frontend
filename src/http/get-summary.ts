import axios from 'axios'

type SummaryResponse = {
  completed: number
  total: number
  goalsPerDay: Record<
    string,
    {
      id: string
      title: string
      completedAt: string
    }[]
  >
}

export async function getSummary() : Promise<SummaryResponse> {
  const response = await axios.get('http://localhost:3333/summary')
  return response.data.summary
}
