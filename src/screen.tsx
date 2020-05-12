import React, { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';

export const Screen: FC = ({ children }) => {
    const currentDate = new Date();

    return (
        <Fragment>
            <header>
                <nav className="navbar">
                    <div className="navbar-brand">
                        <Link className="navbar-item" to="/">
                            <img src="/assets/deepconcern-logo.png" width="196" height="28"/>
                        </Link>
                    </div>
                    <div className="navbar-start">
                        <Link className="navbar-item" to="/apps">
                            Apps
                        </Link>
                        <Link className="navbar-item" to="/games">
                            Games
                        </Link>
                        <Link className="navbar-item" to="/libraries">
                            Libraries
                        </Link>
                    </div>
                    <div className="navbar-end">
                        <a className="navbar-item" href="https://github.com/deepconcern">
                            GitHub
                        </a>
                        <a className="navbar-item" href="https://www.linkedin.com/in/wyatt-barnes-47766823">
                            LinkedIn
                        </a>
                    </div>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer className="footer">
                <div className="content has-text-centered">
                    &copy; {currentDate.getFullYear()} by Wyatt Barnes
                </div>
            </footer>
        </Fragment>
    );
};
