/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import optionsMenu from '../../constants/airlines.json';
import { UpdateAirlineAction } from '../../store/actions/airline.actions';

import Logo from '../../assets/images/it-globers-logo.png';
import {ReactComponent as IconMenu} from '../../assets/images/menu.svg'

import './menu.scss';

const Menu = () => {
  const dispatch = useDispatch();
  const airlineId = useSelector((state) => state.airline);
  const [showMenu, setShowMenu] = useState(false);
  const urlITGlobers = 'https://itglobers.com/';

  useEffect(() => {
    (async () => dispatch(UpdateAirlineAction(optionsMenu[0].id)))();
  }, []);

  return (
    <>
      <div id="backgroundMenu" className={showMenu ? 'visibleMenu' : ''} />

      <div
        id="menuContainer"
        onClick={() => setShowMenu(!showMenu)}
        className={showMenu ? 'visible' : ''}
      >
        <img
          onClick={() => window.open(urlITGlobers, '_blank')}
          src={Logo}
          alt="logo"
        />

        <ul>
          {optionsMenu.map((item) => (
            <li
              onClick={() => {
                dispatch(UpdateAirlineAction(item.id));
              }}
              className={airlineId === item.id ? 'selected' : ''}
              key={item.id}
            >
              {item.name}
              </li>
          ))}
        </ul>
      </div>

      <div
        id="buttonMenu"
        onClick={() => setShowMenu(!showMenu)}
        className={showMenu ? 'visibleMenu' : ''}
      >
        <IconMenu />
      </div>
    </>
  );
};

export default Menu;
