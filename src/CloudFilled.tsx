import type { SVGProps } from "react";

export function CloudFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 4c2.817 0 4.415 1.923 4.647 4.246h.07c1.814 0 3.283 1.512 3.283 3.377C18 13.488 16.53 15 14.718 15H5.282C3.469 15 2 13.488 2 11.623c0-1.865 1.47-3.377 3.282-3.377h.071C5.587 5.908 7.183 4 10 4Z"
      />
    </svg>
  );
}
export default CloudFilled;
