import {CREATE_DIRECTORY} from '../types';

const INITIAL_STATE = {
    sections: [
        {
            id: 1,
            title: 'Analog Watches',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71xk7LGnBlL._AC_UL1500_.jpg',
            linkUrl: 'shop/analog watches'
        },
        {
            id: 2,
            title: 'Digital Watches',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71U6c6bZUrL._AC_UX522_.jpg',
            linkUrl: 'shop/digital watches'
        },
        {
            id: 3,
            title: 'Hybrid Watches',
            imageUrl: 'https://www.shopmyexchange.com/products/images/xlarge/1185316_1007.jpg',
            linkUrl: 'shop/hybrid watches'
        },
        {
            id: 4,
            title: 'Tactile Watches',
            imageUrl: 'https://cdn11.bigcommerce.com/s-f06f69/images/stencil/1280x1280/products/4259/16311/Bradley_Fabric_Blue_1__04712.1526838811.jpg?c=2',
            linkUrl: 'shop/tactile watches'
        },
        {
            id: 5,
            title: 'Touchscreen Watches',
            imageUrl: 'https://assetscdn1.paytm.com/images/catalog/product/W/WA/WATADLYN-A4S-BLADLY939933A3DEA6DE/1562694871942_0..jpg?imwidth=320&impolicy=hq',
            linkUrl: 'shop/touchscreen watches'
        },
        {
            id: 6,
            title: 'Luxury Watches',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81aL%2BFLen2L._AC_UX522_.jpg',
            linkUrl: 'shop/luxury watches'
        },
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    const { type } = action;

    switch(type){
        case CREATE_DIRECTORY: 
            return {
                ...state,

            }
        default: 
        return state
    }
}

export default directoryReducer