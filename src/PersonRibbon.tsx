import type { SVGProps } from "react";

export function PersonRibbon(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8ZM7 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm-1.991 5A2.001 2.001 0 0 0 3 13c0 1.691.833 2.966 2.135 3.797C6.417 17.614 8.145 18 10 18c1.061 0 2.081-.126 3-.388v-1.045c-.872.285-1.892.433-3 .433c-1.735 0-3.257-.364-4.327-1.047C4.623 15.283 4 14.31 4 13c0-.553.448-1 1.009-1h7.117c.091-.355.23-.69.409-1H5.009ZM16 16a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm0 1a3.98 3.98 0 0 0 2-.536v2.285a.25.25 0 0 1-.378.215L16 18l-1.622.965A.25.25 0 0 1 14 18.75v-2.285A3.98 3.98 0 0 0 16 17Z"
      />
    </svg>
  );
}
export default PersonRibbon;
