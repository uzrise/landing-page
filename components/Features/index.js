import React from 'react';
import cls from './feature.module.scss'
import {ClockIcon, LaptopIcon, RocketIcon} from "../svg";

export default function Feature() {
    return (
        <div className={cls.AllContainer}>
            <div className="container">
                <div>
                    <h1 className={cls.title}>Main Features</h1>
                    <p className="text center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
                        nisi aliquet volutpat pellentesque
                        volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor
                        pulvinar
                        risus pulvinar sit amet. Id vel in nam malesuada.
                    </p>
                </div>
                <div className={cls.cards}>
                    <div className={cls.cards_card}>
                        <ClockIcon/>
                        <div>
                            <h3>
                                Monitoring 24/7
                            </h3>
                            <p className="text-m center">Lorem ipsum dolor sit amet, consectetur adipis
                                cing elit. Elementum nisi aliquet volutpat.</p>
                        </div>

                    </div>
                    <div className={cls.cards_card}>
                        <img src={"../../laptop.svg"} alt=""/>
                        <div>
                            <h3>Widget System</h3>
                            <p className="text-m center">Lorem ipsum dolor sit amet, consectetur adipis
                                cing elit. Elementum nisi aliquet volutpat.</p>
                        </div>
                    </div>
                    <div className={cls.cards_card}>
                        <RocketIcon/>
                        <div>
                            <h3>Best Performance</h3>
                        <p className="text-m center">Lorem ipsum dolor sit amet, consectetur adipis
                            cing elit. Elementum nisi aliquet volutpat.
                        </p>
                    </div>

                </div>
            </div>
            <div className={cls.featuresCard}>
                <div className={cls.left}>
                    <h1>Automated Reports <br/>
                        & Widget Alerts</h1>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Elementum nisi aliquet volutpat pellentesque volutpat est.
                        Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.
                        Vitae et, tortor pulvinar risus pulvinar sit amet.
                    </p>
                </div>
                <div className={cls.right}>
                    <div className={cls.right_card}>
                        <img src="../../chart.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className={cls.featuresCard}>
                <div className={cls.right}>
                    <div className={cls.right_card}>
                        <img src="../../chart1.png" alt=""/>
                    </div>
                </div>
                <div className={cls.left}>
                    <h1>Fully customizable to <br/>
                        address your needs</h1>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Elementum nisi aliquet volutpat pellentesque volutpat est.
                        Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.
                        Vitae et, tortor pulvinar risus pulvinar sit amet.
                    </p>
                </div>
            </div>
            <div className={cls.featuresCard}>
                <div className={cls.left}>
                    <h1>Pre-built Dashboard<br/> Templates</h1>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Elementum nisi aliquet volutpat pellentesque volutpat est.
                        Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.
                        Vitae et, tortor pulvinar risus pulvinar sit amet.
                    </p>
                </div>
                <div className={cls.right}>
                    <div className={cls.right_card}>
                        <img src="../../chart2.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
</div>

)
}