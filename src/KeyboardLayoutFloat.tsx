import type { SVGProps } from "react";

export function KeyboardLayoutFloat(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm6.502-4.495a.752.752 0 1 0 0-1.505a.752.752 0 0 0 0 1.505Zm3.753-.753a.752.752 0 1 1-1.505 0a.752.752 0 0 1 1.505 0Zm-9.753.753a.752.752 0 1 0 0-1.505a.752.752 0 0 0 0 1.505ZM7.75 8.752a.752.752 0 1 1-1.505 0a.752.752 0 0 1 1.505 0Zm2.252.753a.752.752 0 1 0 0-1.505a.752.752 0 0 0 0 1.505Zm3.757-.753a.752.752 0 1 1-1.504 0a.752.752 0 0 1 1.504 0ZM8.502 7.005a.752.752 0 1 0 0-1.505a.752.752 0 0 0 0 1.505ZM2 4.5A1.5 1.5 0 0 1 3.5 3h13A1.5 1.5 0 0 1 18 4.5v8a1.5 1.5 0 0 1-1.5 1.5H11a1 1 0 1 1-2 0H3.5A1.5 1.5 0 0 1 2 12.5v-8ZM3.5 13h13a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5ZM2 16.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default KeyboardLayoutFloat;
