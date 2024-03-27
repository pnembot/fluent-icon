import type { SVGProps } from "react";

export function DocumentHeart(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4a2 2 0 0 1 2-2h4.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 16 7.414V16a2 2 0 0 1-2 2H8.45l1-1H14a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v5.175a3.86 3.86 0 0 0-1-.172V4Zm7-.793V6.5a.5.5 0 0 0 .5.5h3.293L11 3.207ZM5.649 18.68a.497.497 0 0 0 .707 0l3.814-3.814a2.85 2.85 0 1 0-4.031-4.031l-.136.136l-.137-.136a2.85 2.85 0 1 0-4.031 4.031l3.814 3.814Z"
      />
    </svg>
  );
}
export default DocumentHeart;
