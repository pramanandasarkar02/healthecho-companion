import React, { useEffect, useState } from 'react'

const PatientdashBoard = () => {

    const [patientList, setPatientList] = useState([])

    useEffect(() => {
        const fetchAllpatientData = async () => {
            try{
                const response = await fetch('http://localhost:8080/api/v1/patient')
                const data = await response.json()
                console.log(data)
                setPatientList(data)

            } catch (err){
                console.log(err)
            }
        }
        // fetchAllpatientData()
    })


  return (
    <div>
        all patients
        {patientList.map((patient) => (
            <>
            <li>{patient.firstName}</li>
            </>
        ))}


    </div>
  )
}

export default PatientdashBoard