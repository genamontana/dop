import React from 'react';
import {PagesType} from '../data/dataState';

type ContentType = {
    page: PagesType
}

export const Content = (props:ContentType) => {
    return (
        <div>
            <h3>{props.page.heading}</h3>
            <div>{props.page.about}</div>
        </div>
    );
};
