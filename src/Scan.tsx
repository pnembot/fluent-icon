import type { SVGProps } from "react";

export function Scan(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.914 5.19a6.98 6.98 0 0 1 5.65-2.168L7.4 8.5a2.985 2.985 0 0 0-.251.561L4.914 5.19Zm-.674.831l3.115 5.397c.113.21.25.405.409.582H3.29A7.001 7.001 0 0 1 3 10c0-1.478.458-2.849 1.24-3.979Zm4.028 4.98V11l-.035-.063a2 2 0 0 1 3.5-1.938L11.73 9l.036.063A2 2 0 0 1 8.267 11Zm1.117-3.938l2.237-3.874A7.015 7.015 0 0 1 16.326 7H9.998c-.21 0-.415.022-.613.063ZM12.236 8h4.474c.189.634.29 1.305.29 2a6.968 6.968 0 0 1-1.24 3.979l-3.115-5.397A3.011 3.011 0 0 0 12.236 8Zm.614 2.939l2.236 3.871a6.98 6.98 0 0 1-5.65 2.168L12.6 11.5a2.98 2.98 0 0 0 .251-.561Zm-2.235 1.998l-2.237 3.874A7.014 7.014 0 0 1 3.674 13H10c.21 0 .416-.022.615-.063ZM10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16Z"
      />
    </svg>
  );
}
export default Scan;
