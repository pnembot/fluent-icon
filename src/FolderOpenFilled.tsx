import type { SVGProps } from "react";

export function FolderOpenFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 5.5A2.5 2.5 0 0 1 4.5 3h2.664c.325 0 .64.105.9.3l1.6 1.2h4.832a2.5 2.5 0 0 1 2.5 2.5v.002H5.824A1.5 1.5 0 0 0 4.35 8.215l-1.577 8.09A2.493 2.493 0 0 1 2 14.498V5.5Zm1.773 10.907a.5.5 0 0 0 .491.595H15.18a1.5 1.5 0 0 0 1.472-1.214l1.395-7.19a.5.5 0 0 0-.491-.596H5.824a.5.5 0 0 0-.491.404l-1.56 8Z"
      />
    </svg>
  );
}
export default FolderOpenFilled;
