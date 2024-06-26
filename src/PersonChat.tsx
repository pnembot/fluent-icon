import type { SVGProps } from "react";

export function PersonChat(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8ZM7 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm-1.991 5A2.001 2.001 0 0 0 3 13c0 1.691.833 2.966 2.135 3.797c1.078.687 2.472 1.07 3.99 1.174l.3-.985c-1.495-.072-2.802-.426-3.752-1.033C4.623 15.283 4 14.31 4 13c0-.553.448-1 1.009-1h4.59c.183-.358.404-.693.658-1H5.009ZM19 14.5a4.5 4.5 0 0 1-6.681 3.937l-1.79.544a.41.41 0 0 1-.51-.51l.544-1.789A4.5 4.5 0 1 1 19 14.5ZM12.5 13a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm-.5 2.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5Z"
      />
    </svg>
  );
}
export default PersonChat;
