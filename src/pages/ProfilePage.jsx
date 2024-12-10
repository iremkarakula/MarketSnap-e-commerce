import React from 'react'
import Profile from './Profile'
import Siparislerim from './Siparislerim'
import MyAccount from './MyAccount'
import Adreslerim from './Adreslerim'
import { Route, Switch } from 'react-router-dom'



function ProfilePage() {


    return <div className='flex' >
        <Profile />
        <div className='m-8'>
            <Switch  >
                <Route path="/profile/profilim">
                    <MyAccount />
                </Route>
                <Route path="/profile/siparişlerim">
                    <Siparislerim />
                </Route>
                <Route path="/profile/adreslerim">
                    <Adreslerim />
                </Route>
            </Switch>



        </div>


    </div>
}

export default ProfilePage