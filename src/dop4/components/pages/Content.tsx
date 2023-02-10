import React from 'react';
import {Navigate} from 'react-router-dom';

type ContentTypeProps = {
    heading: string,
    pages: string
    currentPageNumber: number
    arrayLength: number
}

export const Content = (props: ContentTypeProps) => {
    const {heading, pages, currentPageNumber, arrayLength} = props
    return (
        currentPageNumber <= arrayLength
            ? <div>
                <div>{heading}</div>
                <div>{pages}</div>
            </div>
            : <Navigate to={'/XXX'}/>
    );
};

