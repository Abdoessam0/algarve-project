"use client";

import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';

type BaseProps = {
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    children?: React.ReactNode;
};

type ButtonAsButton = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };
type ButtonAsAnchor = BaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const sizeMap: Record<'sm' | 'md' | 'lg', string> = {
    sm: 'text-sm px-3 py-2 min-h-[36px]',
    md: 'text-base px-4 py-2 min-h-[44px]',
    lg: 'text-lg px-5 py-3 min-h-[44px]',
};

export default function Button(props: ButtonProps) {
    // Narrow props safely without using `any`
    const { variant = 'primary', size = 'md', children, className } = props as BaseProps;
    const base = 'inline-flex items-center justify-center rounded-xl2 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

    const variants: Record<'primary' | 'secondary' | 'ghost', string> = {
        primary: "bg-gradient-to-br from-[theme('colors.journey.research.from')] to-[theme('colors.journey.research.to')] text-white shadow-soft hover:shadow-halo",
        secondary: 'bg-white/90 text-gray-900 border border-gray-200 dark:bg-gray-800 dark:text-white',
        ghost: 'bg-transparent text-gray-900 dark:text-white',
    };

    const v = variant as 'primary' | 'secondary' | 'ghost';
    const s = size as 'sm' | 'md' | 'lg';
    const classes = clsx(base, variants[v], sizeMap[s], className);

    // Type guard: check whether props is an anchor variant
    const isAnchor = (p: ButtonProps): p is ButtonAsAnchor => (p as ButtonAsAnchor).as === 'a' && 'href' in p;

    if (isAnchor(props)) {
        const { href, ...anchorRest } = props as ButtonAsAnchor;
        return (
            <Link href={href} className={classes} {...(anchorRest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
                {children}
            </Link>
        );
    }

    // Default: render a button
    const buttonProps = props as ButtonAsButton;
    return (
        <button className={classes} {...(buttonProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
            {children}
        </button>
    );
}
