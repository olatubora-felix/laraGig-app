import React from 'react'
import { AuthFooter, AuthHeading } from '../components/common/auth'
import { LandingLayout } from '../components/layouts'
import { CustomInput } from '../components/UI'
import { CustomButton } from '../components/UI/CustomButton'

const Login = () => {
    const user = false
    return (
        <LandingLayout user={user}>
            <div className="mx-4">
                <div className="bg-gray-50 border border-gray-200 p-10 rounded max-w-lg mx-auto mt-24">
                    <AuthHeading
                        captionTitle="Log In"
                        captionBody="Log in to post gigs"
                    />

                    <form action="">
                        <CustomInput
                            label="Email"
                            type="email"
                            name="email"
                            value=""
                            onChange={() => {}}
                            error=" Please enter a valid email"
                        />
                        <CustomInput
                            label="Password"
                            type="password"
                            name="password"
                            value=""
                            onChange={() => {}}
                            error=""
                        />

                        <div className="mb-6">
                            <CustomButton
                                className="bg-primary text-white rounded py-2 px-4 hover:bg-black w-full"
                                type="submit"
                                text="Sign In"
                            />
                        </div>

                        <div className="mt-8">
                            <AuthFooter
                                text="Don't have an account?"
                                link="/register"
                                linkText="Register"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </LandingLayout>
    )
}

export default Login
