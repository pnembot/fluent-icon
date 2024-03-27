import type { SVGProps } from "react";

export function CloudSwapFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.647 8.246C14.415 5.923 12.817 4 10 4S5.587 5.908 5.353 8.246l-.251.005C3.373 8.347 2 9.821 2 11.623C2 13.488 3.47 15 5.282 15h2.803a1.5 1.5 0 0 1 .354-1.56l2-2A1.5 1.5 0 0 1 12.915 13h1.17a1.5 1.5 0 0 1 2.476-1.56l1.267 1.266A3.46 3.46 0 0 0 18 11.623c0-1.865-1.47-3.377-3.282-3.377h-.071Zm-2.793 4.608a.5.5 0 0 0-.708-.708l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L10.707 15h5.586l-1.147 1.146a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708.708L16.293 14h-5.586l1.147-1.146Z"
      />
    </svg>
  );
}
export default CloudSwapFilled;
