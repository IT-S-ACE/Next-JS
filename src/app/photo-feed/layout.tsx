import React from 'react'
import './style.css'

interface Tprops{
    modal: React.ReactNode;
    children: React.ReactNode;
}

export default function Layout(props: Tprops ) {
    return (
        <>
        {props.modal}
        {props.children}
        </>
    )
};
