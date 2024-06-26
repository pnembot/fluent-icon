import type { SVGProps } from "react";

export function ScanThumbUpFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 4.5A1.5 1.5 0 0 1 4.5 3h2a.5.5 0 0 0 0-1h-2A2.5 2.5 0 0 0 2 4.5v2a.5.5 0 0 0 1 0v-2Zm14 11a1.5 1.5 0 0 1-1.5 1.5h-2a.5.5 0 0 0 0 1h2a2.5 2.5 0 0 0 2.5-2.5v-2a.5.5 0 0 0-1 0v2ZM15.5 3A1.5 1.5 0 0 1 17 4.5v2a.5.5 0 0 0 1 0v-2A2.5 2.5 0 0 0 15.5 2h-2a.5.5 0 0 0 0 1h2ZM3 15.5A1.5 1.5 0 0 0 4.5 17h2a.5.5 0 0 1 0 1h-2A2.5 2.5 0 0 1 2 15.5v-2a.5.5 0 0 1 1 0v2ZM9.522 5.396c.197-.467.794-1.073 1.631-.85c.536.142.914.467 1.126.907c.186.386.22.812.227 1.148c.008.36-.059.76-.137 1.104h.283c1.203 0 2.133 1.12 1.77 2.296l-.918 2.99c-.352 1.143-1.598 1.757-2.743 1.414l-3.61-1.083a1.824 1.824 0 0 1-1.18-1.07l-.35-.891c-.325-.828.026-1.746.797-2.18l1.24-.698a2.188 2.188 0 0 0 .253-.236c.198-.214.49-.59.788-1.196c.141-.287.26-.512.366-.713c.17-.324.304-.578.457-.942Z"
      />
    </svg>
  );
}
export default ScanThumbUpFilled;
