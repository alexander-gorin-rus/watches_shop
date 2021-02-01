import React from 'react'
import CollectionItem from '../collection-item/CollectionItem'
import './styles.preview-collection.scss'

const PreviewCollection = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h2 className="title">{title}</h2>
            <div className="preview">
                {items
                .filter((item, idx) => idx < 4)
                .map(({ id, ...otherItemProps }) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ) )}
            </div>
        </div>
    )
}

export default PreviewCollection
