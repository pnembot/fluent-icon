import type { SVGProps } from "react";

export function BorderLeftFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.25 8a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75ZM3 11.27V14c0 1.29.814 2.39 1.957 2.814v-.003a.75.75 0 0 0 .586-1.381l-.01-.004A1.5 1.5 0 0 1 4.5 14V6a1.5 1.5 0 0 1 .95-1.396a.75.75 0 1 0-.492-1.413v-.005A3.001 3.001 0 0 0 3 6v5.25a.77.77 0 0 0 0 .02Zm11.551-6.666a1.505 1.505 0 0 1 .878.939a.75.75 0 0 0 1.38-.586h.005a3.009 3.009 0 0 0-1.77-1.77v.004a.75.75 0 1 0-.493 1.413Zm.846 9.944a1.51 1.51 0 0 1-.846.85a.75.75 0 1 0 .492 1.413v.004a3.01 3.01 0 0 0 1.77-1.77h-.004a.75.75 0 1 0-1.412-.497ZM8.75 3a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5ZM8 16.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"
      />
    </svg>
  );
}
export default BorderLeftFilled;
