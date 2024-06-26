import type { SVGProps } from "react";

export function KeyboardFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 4A1.5 1.5 0 0 0 2 5.5v8A1.5 1.5 0 0 0 3.5 15h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 16.5 4h-13Zm2.755 3.252a.752.752 0 1 1-1.505 0a.752.752 0 0 1 1.505 0Zm6 0a.752.752 0 1 1-1.505 0a.752.752 0 0 1 1.505 0ZM5 12.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm9.502-4.495a.752.752 0 1 1 0-1.505a.752.752 0 0 1 0 1.505Zm-7.504 2.5a.752.752 0 1 1 0-1.505a.752.752 0 0 1 0 1.505Zm3.757-.753a.752.752 0 1 1-1.505 0a.752.752 0 0 1 1.505 0Zm2.252.753a.752.752 0 1 1 0-1.505a.752.752 0 0 1 0 1.505ZM9.255 7.252a.752.752 0 1 1-1.505 0a.752.752 0 0 1 1.505 0Z"
      />
    </svg>
  );
}
export default KeyboardFilled;
