import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLInks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth } = props;
    console.log(auth);
    const links = auth.uid ? <SignedInLinks/> : <SignedOutLinks/>;
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="left-align brand-logo">Home</Link>
               {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log("navbar", state)
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)