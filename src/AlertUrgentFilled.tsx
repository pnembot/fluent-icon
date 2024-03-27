import type { SVGProps } from "react";

export function AlertUrgentFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M2.466 12.25a5.158 5.158 0 0 1 9.424-4.197l1.224 2.749l1.664 1.619a.75.75 0 0 1-.218 1.222l-9.727 4.331a.75.75 0 0 1-1.054-.656l-.09-2.32l-1.223-2.749Zm6.364 5.087a1.49 1.49 0 0 0 2.685-1.195L8.83 17.337Zm3.256-12.609a.5.5 0 0 1 .694-.134c1.607 1.085 2.715 2.638 2.888 4.424c.016.16.024.323.024.487a.5.5 0 1 1-1 0a4.04 4.04 0 0 0-.02-.39c-.136-1.418-1.024-2.728-2.452-3.693a.5.5 0 0 1-.134-.694Zm.49-2.485a.5.5 0 0 1 .688-.165c2.458 1.506 4.58 3.805 4.736 7.904a.5.5 0 0 1-1 .038c-.14-3.676-2-5.706-4.259-7.09a.5.5 0 0 1-.165-.687Z"
      />
    </svg>
  );
}
export default AlertUrgentFilled;
