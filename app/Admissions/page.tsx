import AboutMissionVIP from '@/Components/Sections/AboutAdmissionVIP'
import AdmissionPortal from '@/Components/Sections/AdmissionPortal'
import AdmissionPremium from '@/Components/Sections/admissionPremium'
import React from 'react'

function page() {
    return (
        <div>
            <AdmissionPremium />
            <AboutMissionVIP />
            <AdmissionPortal />
        </div>
    )
}

export default page
