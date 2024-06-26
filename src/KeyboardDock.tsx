import type { SVGProps } from "react";

export function KeyboardDock(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 10a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm6.755-4.748a.752.752 0 1 1-1.505 0a.752.752 0 0 1 1.505 0Zm2.247.753a.752.752 0 1 0 0-1.505a.752.752 0 0 0 0 1.505Zm-8.247-.753a.752.752 0 1 1-1.505 0a.752.752 0 0 1 1.505 0Zm.743 3.253a.752.752 0 1 0 0-1.505a.752.752 0 0 0 0 1.505Zm3.757-.753a.752.752 0 1 1-1.505 0a.752.752 0 0 1 1.505 0Zm2.252.753a.752.752 0 1 0 0-1.505a.752.752 0 0 0 0 1.505ZM9.255 5.252a.752.752 0 1 1-1.505 0a.752.752 0 0 1 1.505 0ZM3.5 2A1.5 1.5 0 0 0 2 3.5v8A1.5 1.5 0 0 0 3.5 13h6v3.293l-1.146-1.147a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L10.5 16.293V13h6a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 16.5 2h-13Zm13 10h-13a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5Z"
      />
    </svg>
  );
}
export default KeyboardDock;
