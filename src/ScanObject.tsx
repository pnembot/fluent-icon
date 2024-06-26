import type { SVGProps } from "react";

export function ScanObject(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 3A1.5 1.5 0 0 0 3 4.5v2a.5.5 0 0 1-1 0v-2A2.5 2.5 0 0 1 4.5 2h2a.5.5 0 0 1 0 1h-2Zm11 14a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 1 1 0v2a2.5 2.5 0 0 1-2.5 2.5h-2a.5.5 0 0 1 0-1h2ZM17 4.5A1.5 1.5 0 0 0 15.5 3h-2a.5.5 0 0 1 0-1h2A2.5 2.5 0 0 1 18 4.5v2a.5.5 0 0 1-1 0v-2ZM4.5 17A1.5 1.5 0 0 1 3 15.5v-2a.5.5 0 0 0-1 0v2A2.5 2.5 0 0 0 4.5 18h2a.5.5 0 0 0 0-1h-2Zm6.733-10.097a1.5 1.5 0 0 0-2.466 0l-2.592 3.743C5.487 11.641 6.2 13 7.41 13h5.183c1.21 0 1.921-1.359 1.233-2.354l-2.592-3.743Zm-1.644.57a.5.5 0 0 1 .822 0l2.592 3.742a.5.5 0 0 1-.412.785H7.41a.5.5 0 0 1-.412-.785L9.59 7.472Z"
      />
    </svg>
  );
}
export default ScanObject;
