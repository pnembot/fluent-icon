import type { SVGProps } from "react";

export function Gather(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 15V5a2 2 0 0 0-2-2H2.5a.5.5 0 1 0 0 1H4a1 1 0 0 1 1 1v2H2.5a.5.5 0 1 0 0 1H5v4H2.5a.5.5 0 0 0 0 1H5v2a1 1 0 0 1-1 1H2.5a.5.5 0 0 0 0 1H4a2 2 0 0 0 2-2Zm11.854-4.146A.5.5 0 0 1 17.5 11H15v2a1 1 0 0 0 1 1h1.5a.5.5 0 0 1 0 1H16a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1.5a.5.5 0 0 1 0 1H16a1 1 0 0 0-1 1v2h2.5a.5.5 0 0 1 .354.854Zm-7.855.646a.5.5 0 0 1 .147-.354l.647-.646H8a.5.5 0 0 1 0-1h2.793l-.647-.646a.5.5 0 1 1 .708-.708l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.855-.354Z"
      />
    </svg>
  );
}
export default Gather;
