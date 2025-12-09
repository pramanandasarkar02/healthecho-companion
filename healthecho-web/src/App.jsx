import PatientdashBoard from "./pages/admin/PatientdashBoard"
import PatientActivityFormPage from "./pages/patient/PatientActivityFormPage"
import PatientActivityPage from "./pages/patient/PatientActivityPage"
import PatientInformationFromPage from "./pages/patient/PatientInfoFormPage"
import PatientProfilePage from "./pages/patient/PatientProfilePage"

function App() {
  return (
    <>
          {/* <PatientdashBoard /> */}
          <PatientProfilePage />
          <PatientInformationFromPage />
          <PatientActivityPage />
          <PatientActivityFormPage />
    
    </>
  )
}

export default App
