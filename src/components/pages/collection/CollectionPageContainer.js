import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../../redux/shop/shop.selectors';
import CollectionPage from './CollectionPage';
import Spinner from '../../with-spinner/Spinner';


const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    Spinner
)(CollectionPage);

export default CollectionPageContainer;
