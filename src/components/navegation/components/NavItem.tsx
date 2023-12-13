'use client';

interface NavItemProps {
    link: string,
    text: string,
    svgLink: string
}

import {icons} from 'components/icons';

export default function NavItem({ link, text, svgLink }: NavItemProps) {
    return (
        <li className="nav-item">
            <a className="nav-link d-flex align-items-center " href={link}>
                <div className="me-1 mb-1" dangerouslySetInnerHTML={{ __html: (icons as any)[svgLink]}} />
                {text}
            </a>
        </li>
    )
}