import type { SVGProps } from "react";

export function ImageArrowForwardFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 10a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9Zm.896-6.396l.897.896H5.75A2.75 2.75 0 0 0 3 7.25v.25a.5.5 0 0 0 1 0v-.25c0-.966.784-1.75 1.75-1.75h1.543l-.897.896a.5.5 0 1 0 .708.708L8.856 5.35a.498.498 0 0 0-.002-.705l-1.75-1.75a.5.5 0 1 0-.708.708ZM11 5.5a5.5 5.5 0 0 1-8 4.9V14c0 .65.206 1.25.557 1.742l5.39-5.308a1.5 1.5 0 0 1 2.105 0l5.39 5.308A2.975 2.975 0 0 0 17 14V6a3 3 0 0 0-3-3h-3.6c.384.75.6 1.6.6 2.5ZM12.5 8a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm0 1a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Zm-8.235 7.448C4.755 16.796 5.354 17 6 17h8c.646 0 1.245-.204 1.735-.552l-5.384-5.3a.5.5 0 0 0-.702 0l-5.384 5.3Z"
      />
    </svg>
  );
}
export default ImageArrowForwardFilled;
