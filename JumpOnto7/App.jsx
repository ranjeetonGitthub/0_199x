import { useState } from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { networkAtom } from './atom'
// RecoilRoot



function App() {
 
  return  <RecoilRoot>
    <mainApp />
    </RecoilRoot>
    
}
 function mainApp() { 
  const networkNotificationCount = useRecoilValue(networkAtom)

  return (
    <>
     <button>Home</button>

     <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
     <button>Jobs</button>
     <button>Messaging</button>
     <button>Notification</button>
     <button>ME</button>
    </>
  )
}


export default App
