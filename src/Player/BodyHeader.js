import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import {Avatar} from '@material-ui/core'
import './BodyHeader.css'
import {useStateVal} from '../Hooks/StateProvider'

function BodyHeader(props) {
    const [{user}] = useStateVal()


    console.log('user in bodyheader',user)
    // console.log(user?.images[0])
    console.log(user?.display_name)
    // console.log(user?.images[0]?.url)


    return (
        <div className="bodyheader">
            <div className="bodyheader__left">
                <SearchIcon />
                <input type="text" placeholder="Search for Artists, Songs or Albums" />
            </div>

            <div className="bodyheader__right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>

            </div>

        </div>
    )
}

export default BodyHeader
