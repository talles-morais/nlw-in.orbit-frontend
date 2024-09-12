import axios from 'axios'

export default async function createGoalCompletion(goalId: string) {
  await axios.post(
    'http://localhost:3333/completions',
    { goalId },
    {
      headers: {
        'Content-type': 'application/json',
      },
    }
  )
}
