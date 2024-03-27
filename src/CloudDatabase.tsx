import type { SVGProps } from "react";

export function CloudDatabase(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 3c2.817 0 4.415 1.923 4.647 4.246h.07c1.535 0 2.824 1.083 3.183 2.547a4.064 4.064 0 0 0-.531-.273a5.644 5.644 0 0 0-.785-.266a2.256 2.256 0 0 0-1.866-1.008h-.071a1 1 0 0 1-.995-.9C13.45 5.325 12.109 4 10 4C7.886 4 6.551 5.316 6.348 7.345a1 1 0 0 1-.995.901h-.07C4.027 8.246 3 9.304 3 10.623C3 11.943 4.028 13 5.282 13H10v1H5.282C3.469 14 2 12.488 2 10.623C2 8.82 3.373 7.347 5.102 7.251l.251-.005C5.587 4.908 7.183 3 10 3Zm7.471 11.283c-.81.462-1.863.717-2.971.717s-2.16-.255-2.971-.717A3.883 3.883 0 0 1 11 13.92V17c0 1.105 1.567 2 3.5 2s3.5-.895 3.5-2v-3.08a3.883 3.883 0 0 1-.529.363ZM14.5 10c-1.933 0-3.5.895-3.5 2s1.567 2 3.5 2s3.5-.895 3.5-2s-1.567-2-3.5-2Z"
      />
    </svg>
  );
}
export default CloudDatabase;
