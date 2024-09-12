import axios from 'axios'

interface CreateGoalRequest {
  title: string
  desiredWeeklyFrequency: number
}

export default async function createGoal({
  title,
  desiredWeeklyFrequency,
}: CreateGoalRequest) {
  await axios.post(
    'http://localhost:3333/goals',
    { title, desiredWeeklyFrequency },
    {
      headers: {
        'Content-type': 'application/json',
      },
    }
  )
}
