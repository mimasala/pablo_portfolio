import { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { usePopper } from 'react-popper';
import { cn } from '../utils';

type NavButtonProps = {
  href: string;
  text: string;
  subLinks?: subLink[] | undefined;
};

type subLink = {
  text: string;
  href: string;
}

const NavButton: React.FC<NavButtonProps> = ({ href, text, subLinks }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const location = useLocation();
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(buttonRef.current, popperElement, {
    placement: 'bottom-start',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 0], // Adjusts the spacing between the button and the popover
        },
      },
    ],
  });

  const handleMouseEvents = (hoverState: boolean) => {
    setIsHovered(hoverState);
  };

  const isActive = () => location.pathname === href;

  return (
    <div
      className='h-min relative'
      ref={buttonRef}
      onMouseEnter={() => handleMouseEvents(true)}
      onMouseLeave={() => handleMouseEvents(false)}
      aria-label="Navigation button"
      role="link"
      onClick={() => { window.location.href = href }}
    >
      <div className={cn(isActive() ? "underline" : "", isHovered ? "font-bold" : "")}>
        {text}
      </div>

      {isHovered && subLinks && subLinks.length > 0 && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className="bg-white border shadow-lg"
        >
          <div className='w-48 p-1'>
            {subLinks.map((subLink, index) => (
              <div
                className=''
                key={index}>
                <a
                  href={subLink.href}
                  className="block text-sm hover:font-bold"
                >
                  {subLink.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavButton;
