import React from 'react';
import MenuItem from '../menu-item/MenuItem';
import './style.directory.scss'

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [
                {
                    id: 1,
                    title: 'Analog Watches',
                    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71xk7LGnBlL._AC_UL1500_.jpg',
                    linkUrl: 'analog-watches'
                },
                {
                    id: 2,
                    title: 'Digital Watches',
                    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71U6c6bZUrL._AC_UX522_.jpg',
                    linkUrl: 'digital-watches'
                },
                {
                    id: 3,
                    title: 'Hybrid Watches',
                    imageUrl: 'https://www.shopmyexchange.com/products/images/xlarge/1185316_1007.jpg',
                    linkUrl: 'hybrid-watches'
                },
                {
                    id: 4,
                    title: 'Tactile Watches',
                    imageUrl: 'https://cdn11.bigcommerce.com/s-f06f69/images/stencil/1280x1280/products/4259/16311/Bradley_Fabric_Blue_1__04712.1526838811.jpg?c=2',
                    linkUrl: 'tactile-watches'
                },
                {
                    id: 5,
                    title: 'Touchscreen Watches',
                    imageUrl: 'https://assetscdn1.paytm.com/images/catalog/product/W/WA/WATADLYN-A4S-BLADLY939933A3DEA6DE/1562694871942_0..jpg?imwidth=320&impolicy=hq',
                    linkUrl: 'touchscreen-watches'
                },
                {
                    id: 6,
                    title: 'Luxury Watches',
                    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81aL%2BFLen2L._AC_UX522_.jpg',
                    linkUrl: 'luxury-watches'
                },
            ]
        }
    }

    render(){
        return (
            <div className="directory-menu">
                {this.state.sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>

        )
    }

}

export default Directory;