import React from 'react';
import DropItem from './DropItem';

interface DropdownMenuProps {
    title: string,
    svgLink: string,
    items: Array<{ title: string, desc: string, link: string, svgLink: string }>
}

const Seta = () => (
    <svg
      className="mb-2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-96 0 512 512"
      width="1em"
      height="1em"
      fill="currentColor"
    >
      <path d="M311.9 335.1l-132.4 136.8C174.1 477.3 167.1 480 160 480c-7.055 0-14.12-2.702-19.47-8.109l-132.4-136.8C-9.229 317.8 3.055 288 27.66 288h264.7C316.9 288 329.2 317.8 311.9 335.1z" />
    </svg>
  );


  import {Icon} from 'components/icons';

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, items, svgLink }) => {
    return (
        <li className="nav-item dropdown align-items-center justify-content-center">
            <a className="nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#">
                <div className="d-flex align-items-center">
                    <Icon estilo="mb-1 me-1" name={svgLink}/>
                    {title}
                    <Seta />
                </div>

            </a>
            <div className="dropdown-menu shadow">
                {items.map((item, index) => (
                    <DropItem key={index} title={item.title} desc={item.desc} link={item.link} svgLink={item.svgLink} />
                ))}
            </div>
        </li>
    )
}

export default DropdownMenu;