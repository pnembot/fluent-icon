import type { SVGProps } from "react";

export function DeleteArrowBack(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.5 4a1.5 1.5 0 0 0-3 0h3Zm-4 0a2.5 2.5 0 0 1 5 0h5a.5.5 0 0 1 0 1h-1.054l-.485 4.196a5.48 5.48 0 0 0-.986-.176L15.44 5H4.561l1.18 10.23A2 2 0 0 0 7.728 17H9.6c.183.358.404.693.657 1H7.728a3 3 0 0 1-2.98-2.656L3.554 5H2.5a.5.5 0 0 1 0-1h5Zm7 15a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm-.896-6.396l-.897.896h1.543A2.75 2.75 0 0 1 17 16.25v.25a.5.5 0 0 1-1 0v-.25a1.75 1.75 0 0 0-1.75-1.75h-1.543l.897.896a.5.5 0 0 1-.708.708l-1.752-1.753a.499.499 0 0 1 .002-.705l1.75-1.75a.5.5 0 0 1 .708.708Z"
      />
    </svg>
  );
}
export default DeleteArrowBack;
