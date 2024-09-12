import axios from 'axios'

type PendingGoalsResponse = {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionCount: number
}[]

export async function getPendingGoals(): Promise<PendingGoalsResponse> {
  const response = await axios.get('http://localhost:3333/pending-goals')
  return response.data.pendingGoals
}
