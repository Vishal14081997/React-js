import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'

const Header = () => {
    let cart = useSelector((myStore) => myStore.cartStore.cart);
    return (
        <>
            <div>
                <header className=" w-full z-20 top-0 start-0">
                    <nav className="bg-neutral-secondary-soft border-y border-default border-default">
                        <div className="max-w-screen-xl px-4 py-3 mx-auto">
                            <div className="flex justify-end">
                                <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                                    <li>
                                        <Link
                                            to={"/"}
                                            className="text-heading hover:underline"
                                            aria-current="page"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/cart"} className="text-heading hover:underline">
                                            Cart({cart.length})
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </>

    )
}

export default Header