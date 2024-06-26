import type { SVGProps } from "react";

export function Space3dFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6.5h-.71L14.862 10H16V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4h1.138L3.71 12.5H3V6Zm0 8v-.5h4.337l-.817 2.86l-.192.64H6a3 3 0 0 1-3-3Zm4.48 2.637l.897-3.137h3.246l.895 3.134l.1.366H7.372l.107-.356l.002-.007ZM8.664 12.5h2.674l-.714-2.5H9.377l-.714 2.5Zm4.818 3.863l-.818-2.863H17v.5a3 3 0 0 1-3 3h-.345l-.173-.632l-.001-.005ZM12.377 12.5h2.761L13.71 10h-2.047l.714 2.5Zm-7.515 0h2.76l.715-2.5H6.29l-1.428 2.5Z"
      />
    </svg>
  );
}
export default Space3dFilled;
