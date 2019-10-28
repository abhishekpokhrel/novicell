import React, { useState, useEffect } from 'react'
import firebase from "../../config/fbConfig";
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import { addComments } from '../../store/actions/wineActions'




const WineDetails = (props) => {

    const initialState = {
        comment: ""
    };
    const id = props.match.params.id;

    const [{ comment }, setComment] = useState(initialState);

    const [thiswineComment, setListComments] = useState([]);
    useEffect(() => {

        const db = firebase.firestore().collection('comments').where('wineId', '==', id)
        debugger;
        db.onSnapshot(snapshot => {
            const retrievedTodos = []

            snapshot.forEach(doc => {
                retrievedTodos.push({ ...doc.data(), id: doc.id })
            })

            setListComments(retrievedTodos)
        })
    }, [])

    console.log("specific wine comments", thiswineComment)
    const [wineItem, setwineItem] = useState([]);

    useEffect(() => {

        const db = firebase.firestore().collection('wines').doc(id)

        db.onSnapshot(snapshot => {
            setwineItem(snapshot.data())
        })
    }, [id])
    console.log("specific wines", wineItem)

    const onChange = e => {
        setComment({
            [e.target.id]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        debugger;
        console.log(props)
        const wineId = id;
        props.addComments({ comment, wineId })
        e.currentTarget[0].value = "";
    };



    const winelistcomments = thiswineComment.map(comments => {
        debugger;
        return (
            <li class="collection-item"><div>{comments.comment}
            <a href="#!" class="secondary-content"><i class="material-icons">Commented By: {comments.createdBy}   </i>  
            {!!(wineItem.createdAt) ? moment(comments.createdAt.toDate().toISOString()).calendar() : ""}</a></div></li>

        )
    })



    if (wineItem) {
        const { auth } = props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="row">
                <div className="col s12 m12">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{wineItem.name}</span>
                            <p>{wineItem.description}</p>
                        </div>
                        <div className="card-action">
                            <div>Created By: {wineItem.createdBy}</div>
                            <div>{!!(wineItem.createdAt) ? moment(wineItem.createdAt.toDate().toISOString()).calendar() : ""}</div>
                        </div>
                    </div>
                </div>

                <div className="col s12 m12">
                    <form onSubmit={handleSubmit} className="white">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <label htmlFor="comment">Comment:</label>
                                <textarea name="comment" id="comment" className="materialize-textarea" onChange={onChange}></textarea>
                            </div>
                            <div className="input-field">
                                <button className="btn">Add Comment</button>
                            </div>
                        </div>
                    </form>
                </div>


                <ul className="collection with-header grey">
                <li class="collection-header"><h4>Comments: </h4></li>
                    {winelistcomments}
                </ul>

            </div>



        )
    }
    else {
        return (
            <div className="container"><p>Loading Wine............</p></div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComments: (comment) => dispatch(addComments(comment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WineDetails)