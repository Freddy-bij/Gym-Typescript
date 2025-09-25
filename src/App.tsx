import Navbar from '@/scenes/Navbar/Index' 
import { useState } from 'react'
import { SelectedPage } from '@/shared/types'


const App = () => {
  const [selectedPage , setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  return (
    <div>
    <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} 
    />
    </div>
  )
}

export default App