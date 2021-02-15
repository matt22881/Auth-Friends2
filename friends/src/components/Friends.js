import { useState, useEffect } from 'react';
import Friend from './Friend'
import fetchFriends from './../utils/fetchFriends'
import { friendsContext } from './../App'

const Friends = () => {

    const [error, setError] = useState('')
    const { friends, setFriends } = friendsContext

    useEffect(() => {
        fetchFriends()
            .then(res => {
                setFriends(res)
                console.log('friends: ', friends)
                debugger
            })
            .catch(err => {
                setError(err)
            })
    })

    // return(
        
            if (friends.length > 0) {
                friends.map(friend => {
                    return <Friend friend={friend} />;
                }) 
            } else return (<div>Error Fetching Data: </div>)
        
        
    // )  
    
}