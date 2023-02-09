import React from 'react';
import {PagesType} from '../../data/dataState';
import {useParams} from 'react-router-dom';
import {Content} from '../Content';

type PageType = {
    pages: PagesType[]
}

export const Page = (props: PageType) => {
    const params = useParams()
    return (
        <div>
            <Content page={props.pages[Number(params.id)]}/>
        </div>
    );
};
