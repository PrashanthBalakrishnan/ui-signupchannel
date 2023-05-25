import Profile from './components/Profile'
import UserForm from './components/UserForm'
const data = {
    username: 'James V.',
    channelName: 'Web Development',
    activeUsers: '41k',
    totalUser: '78k',
}

function App() {
    return (
        <div className="pink_gradient min-h-screen flex justify-center items-center font-mulish text-darkblue font-medium ">
            <div className="bg-white md:w-[600px] rounded-xl flex items-center flex-col justify-center m-2 shadow-xl">
                <Profile
                    username={data.username}
                    channelName={data.channelName}
                    activeUsers={data.activeUsers}
                    totalUser={data.totalUser}
                />
                <UserForm channelName={data.channelName} />
            </div>
        </div>
    )
}

export default App
