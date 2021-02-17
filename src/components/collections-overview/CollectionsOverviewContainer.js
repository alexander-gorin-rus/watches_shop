import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import Spinner from '../with-spinner/Spinner';
import CollectionsOverview from './CollectionsOverview';

 

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    Spinner
)(CollectionsOverview);

export default CollectionsOverviewContainer
