import React from 'react'
import WineSummary from './WineSummary'
import { Link } from 'react-router-dom'
import sort from 'fast-sort'

const WineList = ({ wines, filterText, sortText }) => {
    if (filterText) {
        return (
            <div className="wine-list section">
                {wines && wines
                    .filter(wine => {
                        debugger;
                        console.log("wine name", wine)
                        return wine.name.toLowerCase().indexOf(filterText.toString().toLowerCase()) >= 0;
                    })
                    .map(wine => {
                        return (
                            <Link to={'/wine/' + wine.id} key={wine.id}>
                                <WineSummary wine={wine} />
                            </Link>
                        )
                    })}

            </div>
        )
    }
    else if (sortText == true) {
        console.log("sortText", sortText)
        let myData = [].concat(wines);
        myData = sort(myData).asc(u => u.name.toLowerCase());
        return (
            <div className="wine-list section">
                {myData
                    .map(wine => {
                        return (

                            <Link to={'/wine/' + wine.id} key={wine.id}>
                                <WineSummary wine={wine} key={wine.id} />
                            </Link>
                        )
                    })}

            </div>
        )
    }
    else if (sortText == false) {
        console.log("sortText", sortText)
        let myData = [].concat(wines);
        myData = sort(myData).desc(u => u.name.toLowerCase());
        return (
            <div className="wine-list section">
                {myData
                    .map(wine => {
                        return (

                            <Link to={'/wine/' + wine.id} key={wine.id}>
                                <WineSummary wine={wine} key={wine.id} />
                            </Link>
                        )
                    })}

            </div>
        )
    }
    else {
        return (
            <div className="wine-list section">
                {wines && wines
                    .map(wine => {
                        return (

                            <Link to={'/wine/' + wine.id} key={wine.id}>
                                <WineSummary wine={wine} key={wine.id} />
                            </Link>
                        )
                    })}

            </div>
        )
    }

}
export default WineList