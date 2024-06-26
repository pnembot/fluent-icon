import type { SVGProps } from "react";

export function PhoneUpdateCheckmarkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 16a2 2 0 0 0 2 2h3.257A5.477 5.477 0 0 1 9 14.5c0-.819.179-1.596.5-2.294V7.207L8.354 8.354a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L10.5 7.207v3.518A5.485 5.485 0 0 1 15 9.022V4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v12Zm14-1.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.146-1.854a.5.5 0 0 0-.708 0L13.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708Z"
      />
    </svg>
  );
}
export default PhoneUpdateCheckmarkFilled;
