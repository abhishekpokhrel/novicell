import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createWine } from '../../store/actions/wineActions'
import { Redirect } from 'react-router-dom'

  class CreateWine extends Component {
    state = {
        name: '',
        year: '',
        vineyard: '',
        description: ''
    }

    handleChange = (e) => {
        this.setState({
        [e.target.id]: e.target.value
    })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.createWine(this.state)
        this.props.history.push('/')

    }

    test = (e) => {
        alert("this is working")
    }

    render() {
        const {auth} = this.props;

        if(!auth.uid) return <Redirect to='/signin' />
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">
                    Create Wine
                </h5>
                <div className="input-field">
                    <label htmlFor="name">Name:</label>
                    <input type="text" onChange={this.handleChange} id="name"/>
                </div>
                <div className="input-field">
                    <label htmlFor="year">Year:</label>
                    <input type="number" onChange={this.handleChange} id="year"/>
                </div>

                <div className="input-field">
                    <label htmlFor="vineyard">Vineyard:</label>
                    <input type="text" onChange={this.handleChange} id="vineyard"/>
                </div>

                <div className="input-field">
                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" onChange={this.handleChange} className="materialize-textarea"></textarea>
                </div>

                <div className="input-field">
                    <button className="btn">Add Wine</button>
                </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}


const mapDispatchToProps = (dispatch) => {
    return{
        createWine : (wine) => dispatch(createWine(wine))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateWine)