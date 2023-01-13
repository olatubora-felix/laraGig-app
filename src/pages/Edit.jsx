import React from 'react'
import { AuthHeading } from '../components/common/auth'
import { LandingLayout } from '../components/layouts'
import { useNavigate, useParams } from 'react-router-dom'
import { lists } from '../constant/jobsLists'
import { CustomInput } from '../components/UI'
import { CustomButton } from '../components/UI/CustomButton'
import { BackButton } from '../components/UI/BackButton'

const Edit = () => {
    const Navigate = useNavigate()
    const { id } = useParams()
    const job = lists.find((list) => list.id === Number(2))
    const user = true
    console.log(job, Number(id))
    return (
        <LandingLayout user={user}>
            <div className="mx-4">
                <div className="bg-gray-50 border border-gray-200 p-10 rounded max-w-lg mx-auto mt-24">
                    <AuthHeading
                        captionTitle=" Edit Gig"
                        captionBody={`Edit: ${job.title} `}
                    />

                    <form action="">
                        <CustomInput
                            type="text"
                            name="company"
                            label="Company Name"
                            value={job.name}
                        />
                        <CustomInput
                            type="text"
                            name="title"
                            label="Job Title"
                            placeholder="Example: Senior Laravel Developer"
                            value={job.title}
                        />
                        <CustomInput
                            type="text"
                            name="location"
                            label="Job Location"
                            placeholder="Example: Remote, Boston MA, etc"
                            value={job.location}
                        />
                        <CustomInput
                            type="email"
                            name="email"
                            label="Contact Email"
                            value={job.email}
                        />
                        <CustomInput
                            type="text"
                            name="website"
                            label="Website/Application URL"
                            value={job.website}
                        />
                        <CustomInput
                            type="text"
                            name="tags"
                            label="Tags (Comma Separated)"
                            placeholder="Example: Laravel, Backend, Postgres, etc"
                            value={job.tags}
                        />
                        <CustomInput
                            type="file"
                            name="logo"
                            label="Company Logo"
                            placeholder="Example: Laravel, Backend, Postgres, etc"
                        />
                        <CustomInput
                            type="textarea"
                            name="description"
                            label="Job Description"
                            placeholder="Include tasks, requirements, salary, etc"
                            value={job.description}
                        />

                        <div class="mb-6">
                            <CustomButton
                                className="bg-primary text-white rounded py-2 px-4 hover:bg-black"
                                type="submit"
                                text="Create Gig"
                            />

                            <BackButton onClick={() => Navigate('/')}>
                                Back
                            </BackButton>
                        </div>
                    </form>
                </div>
            </div>
        </LandingLayout>
    )
}

export default Edit
