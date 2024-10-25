"use client";
import { Metadata } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import './style.css'
import { useState } from "react";

const navLinks = [
    {name : 'Register', href : '/register'},
    {name : 'Login', href : '/login'},
    {name : 'Forget Password', href : '/forgot-password'},
]

type Tchildren ={
    children : React.ReactNode
}

export default function AuthLayout({
    children
} : Tchildren) {

    const [input , setInput] = useState()
    const pathname = usePathname()
    return (
        <div>
            <input type="text" value={input} onChange={e => e.target.value} className="bg-slate-500 border-black border-[3px]"/>
            {navLinks.map((link) => {
                
                const isActive = pathname.startsWith(link.href) 
                return(
                    <Link href={link.href} key={link.name}
                    className={isActive ? 'font-bold mr-4' :'text-blue-400 mr-4'}
                    >
                    {link.name}
                    </Link>
                )
            })}
            {children}
        </div>
    )
};
