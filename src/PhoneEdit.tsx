import type { SVGProps } from "react";

export function PhoneEdit(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m15.81 1.548l-4.83 4.83a2.197 2.197 0 0 0-.578 1.02l-.375 1.498a.89.89 0 0 0 1.079 1.078l1.498-.374a2.194 2.194 0 0 0 1.02-.578l4.83-4.83a1.87 1.87 0 0 0-2.645-2.644ZM12.942 3l.84-.84A1.994 1.994 0 0 0 13 2H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9.06l-.668.67a3.2 3.2 0 0 1-.332.288V16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5.943ZM9 14a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H9Z"
      />
    </svg>
  );
}
export default PhoneEdit;
