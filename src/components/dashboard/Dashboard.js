import React, { useState, useEffect } from 'react'
import WineList from '../wines/WineList'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { createWine } from '../../store/actions/wineActions'
import moment from 'moment'

import firebase from "../../config/fbConfig";

//connect to redux store
import { connect } from 'react-redux'

const Dashboard = props => {

    const { wines, auth } = props;

    const [wineItems, setwineItems] = useState([]);

    const [filterText, setfilterText] = useState("");

    const [sortText, setSortText] = useState(true);


    const [apiwineItems, setapiwineItems] = useState([]);


    //get all the wines from database
    useEffect(() => {

        const db = firebase.firestore().collection('wines')

        db.onSnapshot(snapshot => {
            const retrievedTodos = []

            snapshot.forEach(doc => {
                retrievedTodos.push({ ...doc.data(), id: doc.id })
            })
            setwineItems(retrievedTodos)
        })
    }, [])

    //fetch data from API
    useEffect(() =>{
        debugger;
        const getWines = async() => {
            const response = await fetch('https://api.openbrewerydb.org/breweries');
            const jsonResponse = await response.json();
            console.log("new way", jsonResponse)
            setapiwineItems(jsonResponse)
        }
        getWines();
    }, []);


    //filter text
    const onChange = e => {
        setfilterText({
            [e.target.id]: e.target.value
        })
    };

    //sorting check to true and false
    const onSortingListChange = e => {
        debugger;
        setSortText(e.currentTarget.checked)
    };

    //get list of wines from api button click
    const apiClick = e => {
        apiwineItems.map((wine) =>{
            debugger;
            props.createWine({name: wine.name, year: moment(wine.update_at).year(), vineyard: wine.country, description: wine.website_url})
        })
        console.log(props)
    }

    if (!auth.uid) return <Redirect to='/signin' />
    return (
        <div className="dashboard container">
            <div className="row">
                <input type="text" id='filterText' onChange={onChange}  placeholder='Please enter the text to filter!'/>
            </div>
            <p>
                <label>
                    <input type="checkbox" className="filled-in" id='sortText' onChange={onSortingListChange} checked={sortText} />
                    <span>Sort</span>
                </label>
            </p>
            <a className="waves-effect waves-light btn" onClick={apiClick}>Get Data from API</a>
            <div className="row">
                <div className="col s12 m6">
                    <WineList wines={wineItems} filterText={filterText.filterText} sortText={sortText}/>
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        wines: state.wine.wines,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createWine : (wine) => dispatch(createWine(wine))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
