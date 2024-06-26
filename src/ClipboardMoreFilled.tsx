import type { SVGProps } from "react";

export function ClipboardMoreFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.085 3A1.5 1.5 0 0 1 8.5 2h3a1.5 1.5 0 0 1 1.415 1H14.5A1.5 1.5 0 0 1 16 4.5v10.484a2.26 2.26 0 0 0-1 .984a2.25 2.25 0 0 0-4 0A2.25 2.25 0 0 0 6.984 18H5.5A1.5 1.5 0 0 1 4 16.5v-12A1.5 1.5 0 0 1 5.5 3h1.585ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm1.75 14a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0ZM13 18.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5Zm4 0a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5Z"
      />
    </svg>
  );
}
export default ClipboardMoreFilled;
