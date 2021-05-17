import React from 'react';
import cls from './hero.module.scss'

export default function Hero() {
    return (
        <section className={cls.section}>
            <div className={cls.absolute}>
                <img src={"../../background-top.png"} alt=""/>
            </div>
            <div className="container">
                <div className={cls.HeroGrid}>
                    <div className={cls.right}>
                        <h1>Monitor your business <br/> on real-time dashboard</h1>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi
                            aliquet volutpat
                            pellentesque
                            volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.
                        </p>
                        <button className={cls.btn}>
                            Try for free
                        </button>
                    </div>
                    <div className={cls.left}>
                        <img className={cls.mainImage} src={"../../main-screen1.png"} alt=""/>
                        <div className={cls.imgCard}>
                            <img src={"../../main-screenmobilecard.png"} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}