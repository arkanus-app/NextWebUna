'use client';

import {Icon} from 'components/icons';

interface DropItemProps {
    link: string,
    title: string,
    desc: string,
    svgLink: string
}
export default function DropItem({ link, title, svgLink, desc }: DropItemProps) {
    return (
    <a className="dropdown-item d-flex justify-content-sm-start" href={link}>
        <div className="d-flex justify-content-center align-items-center m-1 "><Icon estilo="text-dark bg-primary rounded border-0 p-1 px-2 fs-5 me-2" name={svgLink}/>
        <div className="d-flex flex-column mt-0 mb-0"><span className="focus-ring focus-ring-primary fs-5 mt-0 mb-0">{title}</span><span className="text-white mt-0 mb-0">{desc}</span></div>
    </div>
</a>
    )
}