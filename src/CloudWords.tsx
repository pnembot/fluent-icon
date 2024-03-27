import type { SVGProps } from "react";

export function CloudWords(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.5 7a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM4 11.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm7.5-.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm3.147-2.754C14.415 5.923 12.817 4 10 4S5.587 5.908 5.353 8.246l-.251.005C3.373 8.347 2 9.821 2 11.623C2 13.488 3.47 15 5.282 15h9.436C16.53 15 18 13.488 18 11.623c0-1.865-1.47-3.377-3.282-3.377h-.071Zm-8.299.1C6.551 6.315 7.886 5 10 5c2.108 0 3.45 1.325 3.652 3.346a1 1 0 0 0 .995.9h.071c1.254 0 2.282 1.058 2.282 2.377C17 12.943 15.972 14 14.718 14H5.282C4.028 14 3 12.942 3 11.623c0-1.32 1.028-2.377 2.282-2.377h.071a1 1 0 0 0 .995-.9Z"
      />
    </svg>
  );
}
export default CloudWords;
