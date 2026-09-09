import React from 'react'
import Footer from './footer'
import Header from './Header'
import { Outlet } from 'react-router'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'

const MainLayout = () => {
    return (
        <Provider store={store}>
            <Header />
            <div>
                <Outlet />
            </div>

            <Footer />
        </Provider>
    )
}

export default MainLayout