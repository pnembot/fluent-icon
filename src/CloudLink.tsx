import type { SVGProps } from "react";

export function CloudLink(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.647 8.246C14.415 5.923 12.817 4 10 4S5.587 5.908 5.353 8.246l-.251.005C3.373 8.347 2 9.821 2 11.623C2 13.488 3.47 15 5.282 15h4.055a3.476 3.476 0 0 1-.302-1H5.282C4.028 14 3 12.942 3 11.623c0-1.32 1.028-2.377 2.282-2.377h.071a1 1 0 0 0 .995-.9C6.551 6.315 7.886 5 10 5c2.108 0 3.45 1.325 3.652 3.346a1 1 0 0 0 .995.9h.071c.656 0 1.25.29 1.667.754h.115c.422 0 .826.075 1.2.211c-.52-1.16-1.66-1.965-2.982-1.965h-.071ZM12.5 11a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H16Zm-3.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z"
      />
    </svg>
  );
}
export default CloudLink;
