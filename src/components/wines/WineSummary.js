import React from 'react'
import { defaultCipherList } from 'constants'
import moment from 'moment'
import { connect } from 'react-redux'
import { deleteWine } from '../../store/actions/wineActions'
import { Link } from 'react-router-dom'


const WineSummary = (props) => {
    return(
        <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{props.wine.name}</span>
                    <p>Created By: {props.wine.createdBy}</p>
                    <p className="grey-text">{!!(props.wine.createdAt) ? moment(props.wine.createdAt.toDate().toISOString()).calendar() : ""}</p>
                </div>
                <div>
			</div>
            </div>
            
    )
}



const mapDispatchToProps = dispatch => {
	return {
		deleteWine: id => dispatch(deleteWine(id))
	};
};

export default connect(null, mapDispatchToProps)(WineSummary)