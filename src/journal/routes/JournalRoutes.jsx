import { Navigate, Route, Routes } from "react-router-dom"
import { JournalPage } from "../pages/JournalPage"
import { DictionaryScreen } from "../pages/JournalScreen"


export const JournalRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <DictionaryScreen /> } />
        <Route path="/dashboard" element={ <JournalPage /> } />

        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
