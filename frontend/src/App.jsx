import { createContext, useState } from "react"
import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "./rootLayout"
import HomePage from "./pages/homePage"
import CartPage from "./pages/cartPage"
import ProfilePage from "./pages/profilePage"
import NotfoundPage from "./pages/notfoundPage"
import SignupPage from "./pages/signupPage"

export const appContext = createContext()

function App() {
  const [open, setOpen] = useState(false)
  const [signup, setSignup] = useState(true)

  const router = createBrowserRouter([
    {
      path: `/`,
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: `/cart`, element: <CartPage /> },
        { path: `/profile`, element: <ProfilePage /> }
      ]
    },
    {
      path: `/signup`,
      element: <SignupPage />  
    },
    {
      path: `*`,
      element: <NotfoundPage />
    }
  ])

  return (
    <appContext.Provider value={{ open, setOpen, signup, setSignup }} className="Provider">
      <RouterProvider router={router} />
    </appContext.Provider>
  )
}

export default App