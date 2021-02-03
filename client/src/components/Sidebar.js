import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as ImIcons from 'react-icons/im';
import * as RiIcons from 'react-icons/ri';



export const SidebarData = [
  {
    title: 'Il tuo profilo',
    path: '/userprofile',
    icon: <ImIcons.ImProfile />,
    cName: 'nav-text'
  },
  {
    title: 'I tuoi ordini',
    path: '/orders',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Cambio Password',
    path: '/changepassword',
    icon: <RiIcons.RiLockPasswordFill />,
    cName: 'nav-text'
  },
];