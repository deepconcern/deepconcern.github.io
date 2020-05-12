import React, { FC } from 'react';

import { Screen } from './screen';

export const HomeRoute: FC = () => {
    return (
        <Screen>
            <section className="section has-text-centered">
                    <div className="container">
                        <div className="media">
                            <figure className="media-left image is-128x128">
                                <img src="https://www.gravatar.com/avatar/975ece315c6839130cf7ede11ecd4e9c.jpg?s=128"/>
                            </figure>
                            <div className="media-right content">
                                <h2 className="title">DeepConcern</h2>
                                <p className="subtitle">(a.k.a. Wyatt Barnes)</p>
                                <p>Developer, game enthusiast, third descriptor</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="columns is-centered">
                        <div className="column is-one-quarter">
                            <div className="box content">
                                <h3 className="title">Interests</h3>
                                <ul>
                                    <li>JavaScript + TypeScript</li>
                                    <li>React</li>
                                    <li>GraphQL</li>
                                    <li>Web development</li>
                                    <li>Video Games</li>
                                    <li>Japan</li>
                                </ul>
                            </div>
                        </div>
                        <div className="column is-one-quarter">
                            <div className="box content">
                                <h3 className="title">Favorie foods/drinks</h3>
                                <ul>
                                    <li>Pizza</li>
                                    <li>Ramen</li>
                                    <li>Mugi-cha</li>
                                    <li>Hoji-cha</li>
                                    <li>Flat white</li>
                                    <li>Curry-pan</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
        </Screen>
    );
};
