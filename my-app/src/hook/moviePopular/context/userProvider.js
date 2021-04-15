import MovieContext from './index'


const UserProfileProvider = (props) => {
    const infoUser = {
        id: 1,
        name: 'admin',
        email: 'admin@gmail.com',
        avatar: "https://scontent.fhan5-7.fna.fbcdn.net/v/t1.6435-9/147382541_1911053545720613_7661337357137647425_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=wO6reRoIKkEAX8GP_gR&_nc_ht=scontent.fhan5-7.fna&oh=9ca772605c420c66e7acb1562dfb52a3&oe=609953FA"
    }
    return(
        <MovieContext.Provider value={infoUser}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default UserProfileProvider;