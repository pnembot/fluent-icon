import type { SVGProps } from "react";

export function ImageSearch(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3a3 3 0 0 0-3 3v2.758a4.484 4.484 0 0 1 1-.502V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8c0 .373-.102.722-.28 1.02l-4.669-4.588a1.5 1.5 0 0 0-1.71-.278c.173.283.316.587.424.907a.5.5 0 0 1 .585.084l4.662 4.58A1.991 1.991 0 0 1 14 16h-2.879l.44.44c.163.163.281.355.354.56H14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm6.5 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm0-1a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Zm-4.197 6.596a3.5 3.5 0 1 0-.707.707l2.55 2.55a.5.5 0 0 0 .708-.707l-2.55-2.55ZM5.5 15a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Z"
      />
    </svg>
  );
}
export default ImageSearch;
