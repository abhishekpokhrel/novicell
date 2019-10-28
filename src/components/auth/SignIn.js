import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

  class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
        [e.target.id]: e.target.value
    })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("yo state ho", this.state)
        this.props.signIn(this.state)
    }

    test = (e) => {
        alert("this is working")
    }

    render() {

        const { authError, auth } = this.props;
        if(auth.uid) return <Redirect to='/' />

        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">
                    Sign In
                </h5>
                <div className="input-field">
                    <label htmlFor="email">Email:</label>
                    <input type="text" onChange={this.handleChange} id="email"/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password:</label>
                    <input type="password" onChange={this.handleChange} id="password"/>
                </div>

                <div className="input-field">
                    <button className="btn">Login</button>
                    <div className="red-text center"> {  authError ? <p>{authError}</p> : null }</div>
                </div>
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        authError : state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signIn : (credents) => dispatch(signIn(credents))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)