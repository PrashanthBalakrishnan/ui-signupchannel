import { useForm, SubmitHandler } from 'react-hook-form'
import { CheckIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

type FormValues = {
    username: string
    privacy: boolean
}

type UserFormProps = {
    channelName: string
}

const UserForm: React.FC<UserFormProps> = ({ channelName }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: {
            username: '',
            privacy: false,
        },
    })

    const [submitted, setSubmitted] = useState(false)
    const [name, setName] = useState('')
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data)
        setName(data.username.charAt(0).toUpperCase() + data.username.slice(1))
        setSubmitted((prev) => !prev)
    }
    return (
        <section className="md:px-24 px-5 ">
            {submitted ? (
                <div className="p-10 text-center  transition-all duration-1000 ">
                    <h1 className="font-semibold text-sm md:text-base">
                        Welcome to {channelName} {name}
                    </h1>
                </div>
            ) : (
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="flex flex-col md:mb-7 mb-3">
                                <span>Username</span>
                                <p className="text-rose-500 text-sm md:text-base">
                                    {errors.username?.message}
                                </p>
                                <input
                                    className="border-[1px] border-[#FDEFF0] p-4 rounded-lg placeholder-darkblue focus:outline-pink-200"
                                    placeholder="How do you like people to call you?"
                                    type="text"
                                    {...register('username', {
                                        required: 'Username is required',
                                    })}
                                />
                            </label>
                        </div>

                        <div>
                            <p className="text-rose-500 text-sm md:text-base">
                                {errors.privacy?.message}
                            </p>
                            <label className="flex gap-3 items-start cursor-pointer relative">
                                <input
                                    type="checkbox"
                                    id="checkbox1"
                                    className="appearance-none sm:h-7 sm:w-10 border-2 border-[#FDEFF0] rounded-md focus:outline-pink-200 h-6 w-9"
                                    {...register('privacy', {
                                        required:
                                            'Please agree to Terms of Service & Privacy Policy',
                                    })}
                                />
                                <CheckIcon className="text-2xl sm:h-7 sm:w-10 text-pink-400 absolute -left-1 top-0 text-opacity-0 check-1 transition duration-500 h-6 w-8" />
                                <p className="text-sm md:text-base">
                                    I have read and agree to the{' '}
                                    <span className="text-darkpink underline">
                                        Terms of service
                                    </span>{' '}
                                    and{' '}
                                    <span className="text-darkpink underline">
                                        Privacy policy
                                    </span>
                                    .
                                </p>
                            </label>
                        </div>
                        <div className="md:my-10 my-5">
                            <button
                                className="w-full bg-darkpink py-6 text-white rounded-lg"
                                type="submit"
                            >
                                Continue
                            </button>
                        </div>
                    </form>
                    <div className="mb-10 text-center text-darkpink underline ">
                        <a href="">Already have an account</a>
                    </div>
                </div>
            )}
        </section>
    )
}
export default UserForm
