import profilePic from '../assets/profilepic.webp'

type ProfileProps = {
    username: string
    channelName: string
    activeUsers: string
    totalUser: string
}

const Profile: React.FC<ProfileProps> = ({
    username,
    channelName,
    activeUsers,
    totalUser,
}) => {
    return (
        <section className="flex flex-col items-center py-5  px-[100px] gap-5 sm:pt-[64px] ">
            <div className="md:w-[150px] md:border-[12px] rounded-full w-[100px] border-[6px]">
                <img
                    src={profilePic}
                    alt="profilepic"
                    className="w-full object-cover rounded-full"
                />
            </div>
            <div>
                <p className="text-sm md:text-base">
                    {username} invited you to join
                </p>
            </div>
            <div>
                <h1 className="font-bold md:text-2xl text-lg">{channelName}</h1>
            </div>
            <div className="flex gap-2 items-center justify-center bg-white50 md:p-4 rounded-lg p-2 text-sm flex-col md:flex-row ">
                <p>{activeUsers} Active users</p>
                <span className="rounded-full w-[3px] h-[3px] bg-darkblue" />
                <p>{totalUser} Total users</p>
            </div>
        </section>
    )
}
export default Profile
