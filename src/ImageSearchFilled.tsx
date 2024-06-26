import type { SVGProps } from "react";

export function ImageSearchFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.5 8a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8c0 .65-.206 1.25-.557 1.742l-5.39-5.308a1.5 1.5 0 0 0-1.711-.279A4.497 4.497 0 0 0 3 8.758V6Zm9.5 3a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm-.585 8H14c.646 0 1.245-.204 1.735-.552l-5.384-5.3a.5.5 0 0 0-.586-.086a4.497 4.497 0 0 1-.204 3.378l2 2c.163.163.281.355.354.56Zm-3.612-2.404a3.5 3.5 0 1 0-.707.707l2.55 2.55a.5.5 0 0 0 .708-.707l-2.55-2.55ZM5.5 15a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Z"
      />
    </svg>
  );
}
export default ImageSearchFilled;
