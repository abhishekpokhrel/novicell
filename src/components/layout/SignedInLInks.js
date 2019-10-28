import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    const uemail = props.auth.email.length > 4 ? props.auth.email.slice(0, 3) : props.auth.email;
    return(
        <ul className="right">
            <li><NavLink to ='/createwine'>New Wine</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to ='/' className='btn btn-floating pink lighten-1'>{uemail}</NavLink></li>
        </ul>
    )
}


const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

export default  connect(mapStateToProps, mapDispatchToProps) (SignedInLinks)