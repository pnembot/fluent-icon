import type { SVGProps } from "react";

export function ImageCopy(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.498 7.497a.998.998 0 1 0 0-1.995a.998.998 0 0 0 0 1.995ZM5 6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2v6c0 .37.101.718.277 1.016L9.79 9.502a1.71 1.71 0 0 1 2.418 0l3.514 3.514C15.9 12.718 16 12.371 16 12V6a2 2 0 0 0-2-2H8Zm7.016 9.723l-3.514-3.514a.71.71 0 0 0-1.004 0l-3.514 3.514C7.282 13.9 7.629 14 8 14h6c.37 0 .718-.101 1.016-.277ZM12 17a2.99 2.99 0 0 0 2.236-1H7.5A3.5 3.5 0 0 1 4 12.5V5.764C3.386 6.314 3 7.112 3 8v4.5A4.5 4.5 0 0 0 7.5 17H12Z"
      />
    </svg>
  );
}
export default ImageCopy;
