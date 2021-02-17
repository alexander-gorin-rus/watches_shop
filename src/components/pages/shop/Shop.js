import React, { useEffect } from 'react';
import CollectionsOverviewContainer from '../../collections-overview/CollectionsOverviewContainer';
import CollectionPageContainer from '../collection/CollectionPageContainer';
import { connect } from 'react-redux'
import { fetchCollectionsStart } from '../../../redux/shop/shop.actions';
import { Route } from 'react-router-dom';

const Shop = ({ fetchCollectionsStart, match}) => {
    
    useEffect(() => {
        fetchCollectionsStart();
    },[fetchCollectionsStart])
    
        return(
                <div className="shop-page">
                    <Route 
                        exact path={`${match.path}`} 
                        component={CollectionsOverviewContainer}
                        />
                    <Route 
                        exact path={`${match.path}/:collectionId`} 
                        component={CollectionPageContainer}
                        />
                </div>
            )
    }

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(Shop);