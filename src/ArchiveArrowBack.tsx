import type { SVGProps } from "react";

export function ArchiveArrowBack(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.5 10a.5.5 0 0 0 0 1h1.757c.313-.38.677-.716 1.08-1H8.5ZM6 16h3.207c.099.349.23.683.393 1H6a3 3 0 0 1-3-3V7.832A1.75 1.75 0 0 1 2 6.25v-1.5C2 3.784 2.784 3 3.75 3h12.5c.966 0 1.75.784 1.75 1.75v1.5c0 .698-.409 1.3-1 1.582V9.6a5.465 5.465 0 0 0-1-.393V8H4v6a2 2 0 0 0 2 2ZM3.75 4a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75H3.75ZM14.5 19a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm-.896-6.396l-.897.896h1.543A2.75 2.75 0 0 1 17 16.25v.25a.5.5 0 0 1-1 0v-.25a1.75 1.75 0 0 0-1.75-1.75h-1.543l.897.896a.5.5 0 0 1-.708.708l-1.752-1.753a.499.499 0 0 1 .002-.705l1.75-1.75a.5.5 0 0 1 .708.708Z"
      />
    </svg>
  );
}
export default ArchiveArrowBack;
