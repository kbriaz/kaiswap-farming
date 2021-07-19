import { useContext } from 'react'
import { Context } from '../contexts/KaiProvider'

const useKai = () => {
  const { kai } = useContext(Context)
  return kai
}

export default useKai
