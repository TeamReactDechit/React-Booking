import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as ImIcons from 'react-icons/im';
import * as RiIcons from 'react-icons/ri';



export const SidebarData = [
  {
    id:1,
    title: 'Il tuo profilo',
    path: '/dashboard',
    icon: <ImIcons.ImProfile />,
    cName: 'nav-text'
  },
  {
    id:2,
    title: 'I tuoi ordini',
    path: '/orders',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {    
    id:3,
    title: 'Cambio Password',
    path: '/changepassword',
    icon: <RiIcons.RiLockPasswordFill />,
    cName: 'nav-text'
  },
];