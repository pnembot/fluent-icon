import type { SVGProps } from "react";

export function CloudDesktopFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 4c2.817 0 4.415 1.923 4.647 4.246h.07c1.242 0 2.322.709 2.88 1.754H11a2 2 0 0 0-2 2v3H5.282C3.469 15 2 13.488 2 11.623c0-1.865 1.47-3.377 3.282-3.377h.071C5.587 5.908 7.183 4 10 4Zm0 8a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2v1h.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1h.5v-1h-2a1 1 0 0 1-1-1v-4Z"
      />
    </svg>
  );
}
export default CloudDesktopFilled;
