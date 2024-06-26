import type { SVGProps } from "react";

export function KeyboardDockFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 3.5A1.5 1.5 0 0 1 3.5 2h13A1.5 1.5 0 0 1 18 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-6v3.293l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L9.5 16.293V13h-6A1.5 1.5 0 0 1 2 11.5v-8Zm3.502 2.505a.752.752 0 1 0 0-1.505a.752.752 0 0 0 0 1.505Zm6 0a.752.752 0 1 0 0-1.505a.752.752 0 0 0 0 1.505ZM5.5 10a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm8.25-4.748a.752.752 0 1 0 1.505 0a.752.752 0 0 0-1.505 0Zm-7.505 2.5a.752.752 0 1 0 1.505 0a.752.752 0 0 0-1.505 0Zm3.757.753a.752.752 0 1 0 0-1.505a.752.752 0 0 0 0 1.505Zm2.253-.753a.752.752 0 1 0 1.504 0a.752.752 0 0 0-1.504 0ZM8.502 6.005a.752.752 0 1 0 0-1.505a.752.752 0 0 0 0 1.505Z"
      />
    </svg>
  );
}
export default KeyboardDockFilled;
