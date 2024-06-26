import type { SVGProps } from "react";

export function TextEffects(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.623 4.093a1.75 1.75 0 0 0-3.245 0l-3.02 7.464c-.011.024-.021.05-.03.074l-1.2 2.962a1.75 1.75 0 0 0 3.245 1.314L8.144 14h3.713l.771 1.907a1.75 1.75 0 0 0 3.245-1.314l-1.2-2.962a.954.954 0 0 0-.03-.074l-3.02-7.464ZM10.44 10.5L10 9.414L9.561 10.5h.879Zm.256-6.031l3.029 7.484a.59.59 0 0 1 .013.032l1.208 2.984a.75.75 0 0 1-1.39.562L12.53 13H7.47l-1.025 2.531a.75.75 0 0 1-1.39-.562l1.207-2.984a.72.72 0 0 1 .013-.032l3.03-7.484a.75.75 0 0 1 1.39 0Zm1.228 7.031H8.077L10 6.749l1.924 4.751Z"
      />
    </svg>
  );
}
export default TextEffects;
