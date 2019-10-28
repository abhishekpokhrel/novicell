export const createWine = (wine) => {
    return (dispatch, getstate, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        console.log("what is this state", getstate());
        const useremail = getstate().firebase.auth.email;
        firestore.collection('wines').add({
            ...wine,
            createdBy: useremail,
            createdAt: new Date()
        }).then(() => {

        dispatch({ type: 'CREATE_WINE', wine })

        }).catch((e) => {
            dispatch({ type: 'CREATE_WINE_ERROR', e })
        })
    }
}


export const addComments = (comment) => {
    return (dispatch, getstate, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        console.log("what is this state", getstate());
        debugger;
        const useremail = getstate().firebase.auth.email;
        const uidL = getstate().firebase.auth.uid;
        firestore.collection('comments').add({
            ...comment,
            createdBy: useremail,
            createdAt: new Date(),
            userid: uidL
        }).then(() => {

        dispatch({ type: 'ADD_COMMENT', comment })

        }).catch((e) => {
            dispatch({ type: 'ADD_COMMENT_ERROR', e })
        })
    }
}


export const deleteWine = id => {
    return (dispatch, getstate, {getFirebase, getFirestore}) => {
        debugger;
        const firestore = getFirestore();
        
		console.log("t'was deleted", id);
        firestore.collection('wines').doc(id).delete();
    }
}