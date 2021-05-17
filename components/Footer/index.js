import React from 'react';
import cls from './footer.module.scss'
import {FacebookIcon, InstagramIcon, LogoBackIcon, TwitterIcon} from "../svg";
import Link from "next/link";

export default function Footer() {
    return (
        <div className={cls.AllContainer}>
            <div className={cls.background}>
                <img src={"../../background1.png"} alt=""/>
            </div>
            <div className="container">
                <div className={cls.container}>
                    <div className={cls.title}>
                        <h1>Pricing Plans</h1>
                        <p className="text center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
                            nisi
                            aliquet
                            volutpat pellentesque volutpat est. Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                            Accusamus consectetur dolorum eos quam quia tenetur! </p>
                    </div>
                    <div className={cls.cards}>
                        <div className={cls.cards_card}>
                            <h2>Starter</h2>
                            <p className="text center">up to 3 users</p>

                            <hr/>
                            <p className={cls.currency}><small>$</small>29</p>
                            <p className="text-m center">per month</p>
                            <button className="btn">
                                Order
                            </button>
                        </div>
                        <div className={cls.cards_card}>
                            <h2>Standard</h2>
                            <p className="text center">up to 20 users</p>
                            <hr/>
                            <p className={cls.currency}><small>$</small>99</p>
                            <p className="text-m center">per month</p>
                            <button className="btn">
                                Order
                            </button>
                        </div>
                        <div className={cls.cards_card}>
                            <h2>Premium</h2>
                            <p className="text center">up to 200 users</p>

                            <hr/>
                            <p className={cls.currency}><small>$</small>29</p>
                            <p className="text-m center">per month</p>
                            <button className="btn">
                                Order
                            </button>
                        </div>
                    </div>
                    <div className={cls.footer}>
                        <div className={cls.logo}>
                            <LogoBackIcon/>
                        </div>

                        <div className={cls.pages}>
                            <ul>
                                <li className="text-m"><Link href="">Products</Link></li>
                                <li className="text-m"><Link href="">Pricing</Link></li>
                                <li className="text-m"><Link href="">FAQ</Link></li>
                                <li className="text-m"><Link href="">Blog</Link></li>
                                <li className="text-m"><Link href="">Blog</Link></li>
                            </ul>
                        </div>

                        <div className={cls.share}>
                            <FacebookIcon/>
                            <TwitterIcon/>
                            <InstagramIcon/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}