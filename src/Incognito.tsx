import type { SVGProps } from "react";

export function Incognito(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.17 4.276A.5.5 0 0 1 6.619 4h6.764a.5.5 0 0 1 .447.276l1.224 2.448a.5.5 0 1 0 .894-.448L14.724 3.83A1.5 1.5 0 0 0 13.382 3H6.618a1.5 1.5 0 0 0-1.342.83L4.053 6.275a.5.5 0 0 0 .894.448l1.224-2.448Zm11.248 4.717c-5.946-.99-8.89-.99-14.836 0a.5.5 0 0 1-.164-.986c6.054-1.01 9.11-1.01 15.164 0a.5.5 0 1 1-.164.986ZM5.5 11a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5ZM2 13.5a3.5 3.5 0 0 1 6.965-.5h2.07a3.5 3.5 0 1 1 0 1h-2.07A3.5 3.5 0 0 1 2 13.5ZM14.5 11a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5Z"
      />
    </svg>
  );
}
export default Incognito;
