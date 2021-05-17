import React from 'react';
import cls from './navbar.module.scss';
import Link from 'next/link';

export default function Navbar() {
    return (
        <header className={cls.header}>
            <div className="container">
                <nav>
                    <Link href="/">
                        <img src={"../logo.svg"} alt=""/>
                    </Link>
                    <ul>
                        <li className="text-m"><Link href="">Products</Link></li>
                        <li  className="text-m"><Link href="">Pricing</Link></li>
                        <li className="text-m"><Link href="">FAQ</Link></li>
                        <li className="text-m"><Link href="">Blog</Link></li>
                        <li className="text-m"><Link href="">Blog</Link></li>
                    </ul>
                    <button className={cls.btn_in}>Sign in</button>
                    <button className="btn">Sign Up</button>
                </nav>
            </div>
        </header>
    )
}