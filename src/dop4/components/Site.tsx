import React, {useEffect, useState} from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import styles from './Site.module.css'
import {Error404} from './pages/Error404';
import {Page} from './pages/Page';
import {dataState} from '../dataState/dataState';
import {useWindowSize} from '../helpers/useWindowSize';
import { LocalStorage } from './pages/LocalStorage';


export const Site = () => {
    const size = useWindowSize();
    console.log(size)

    /*function useWindowSize() {
        const [windowSize, setWindowSize] = useState(0);
        useEffect(() => {
            function handleResize() {
                setWindowSize(window.innerWidth);
            }

            window.addEventListener('resize', handleResize);
            handleResize();
            // Remove event listener on cleanup
            return () => window.removeEventListener('resize', handleResize);
        }, []);
        return windowSize;
    }*/


    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                {
                    size > 1000
                        ? <div className={styles.nav}>
                            <div><NavLink to={'/page/0'}
                                          className={({isActive}) => isActive ? styles.active : styles.navLink}>
                                PAGE 1
                            </NavLink></div>
                            <div><NavLink to={'/page/1'}
                                          className={({isActive}) => isActive ? styles.active : styles.navLink}>
                                PAGE 2
                            </NavLink></div>
                            <div><NavLink to={'/page/2'}
                                          className={({isActive}) => isActive ? styles.active : styles.navLink}>
                                PAGE 3
                            </NavLink></div>
                            <div><NavLink to={'/page/localStorage'}
                                          className={({isActive}) => isActive ? styles.active : styles.navLink}>
                                Local storage
                            </NavLink></div>
                        </div>
                        : <div></div>
                }

                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/page/0'}/>}/>

                        <Route path={'/page/:id'} element={<Page pages={dataState.pages}/>}/>
                        <Route path={'/page/localStorage'} element={<LocalStorage/>}/>

                        {/*<Route path={'/page2'} element={<PageTwo/>}/>*/}
                        {/*<Route path={'/page3'} element={<PageThree/>}/>*/}

                        <Route path={'/*'} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

