import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LandingLayout } from '../components/layouts'
import { BackButton, CustomInput } from '../components/UI'
import { CustomButton } from '../components/UI/CustomButton'
import { AuthHeading } from '../components/common/auth/AuthHeading'

const Create = () => {
    const Navigate = useNavigate()
    const user = true
    return (
        <LandingLayout user={user}>
            <div class="mx-4">
                <div class="bg-gray-50 border border-gray-200 p-10 rounded max-w-lg mx-auto mt-24">
                    <AuthHeading
                        captionTitle=" Create a Gig"
                        captionBody="Post a gig to find a developer"
                    />

                    <form action="">
                        <CustomInput
                            type="text"
                            name="company"
                            label="Company Name"
                        />
                        <CustomInput
                            type="text"
                            name="title"
                            label="Job Title"
                            placeholder="Example: Senior Laravel Developer"
                        />
                        <CustomInput
                            type="text"
                            name="location"
                            label="Job Location"
                            placeholder="Example: Remote, Boston MA, etc"
                        />
                        <CustomInput
                            type="email"
                            name="email"
                            label="Contact Email"
                        />
                        <CustomInput
                            type="text"
                            name="website"
                            label="Website/Application URL"
                        />
                        <CustomInput
                            type="text"
                            name="tags"
                            label="Tags (Comma Separated)"
                            placeholder="Example: Laravel, Backend, Postgres, etc"
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

export default Create
