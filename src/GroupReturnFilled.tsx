import type { SVGProps } from "react";

export function GroupReturnFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 4.5c0 .356-.074.694-.208 1H10a.5.5 0 0 1 .5.5v2H10a1.992 1.992 0 0 0-1.5.677C8.189 9.03 8 9.493 8 10v.5H6a.5.5 0 0 1-.5-.5V6.792A2.492 2.492 0 0 1 4 6.95V10a2 2 0 0 0 2 2h2v2a1.993 1.993 0 0 0 1.158 1.815a5.514 5.514 0 0 1 .342-3.61V10a.5.5 0 0 1 .5-.5h2.206a5.514 5.514 0 0 1 3.61-.342A2.006 2.006 0 0 0 13.999 8h-2V6a2 2 0 0 0-2-2H6.95c.033.162.05.329.05.5Zm-1 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm11 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm-11 11a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm8.5 3.5a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm-.896-6.396l-.897.896h1.543A2.75 2.75 0 0 1 17 16.25v.25a.5.5 0 0 1-1 0v-.25a1.75 1.75 0 0 0-1.75-1.75h-1.543l.897.896a.5.5 0 0 1-.708.708l-1.752-1.753a.499.499 0 0 1 .002-.705l1.75-1.75a.5.5 0 0 1 .708.708Z"
      />
    </svg>
  );
}
export default GroupReturnFilled;
