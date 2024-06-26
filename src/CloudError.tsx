import type { SVGProps } from "react";

export function CloudError(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.647 6.246C14.415 3.923 12.817 2 10 2S5.587 3.908 5.353 6.246l-.251.005C3.373 6.347 2 7.821 2 9.623C2 11.488 3.47 13 5.282 13h2.49c.029-.343.089-.677.176-1H5.282C4.028 12 3 10.942 3 9.623c0-1.32 1.028-2.377 2.282-2.377h.071a1 1 0 0 0 .995-.9C6.551 4.315 7.886 3 10 3c2.108 0 3.45 1.325 3.652 3.346a1 1 0 0 0 .995.9h.071c.994 0 1.846.665 2.157 1.598c.417.303.792.66 1.114 1.062c.007-.093.011-.188.011-.283c0-1.865-1.47-3.377-3.282-3.377h-.071ZM18 13.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0ZM13.5 11a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.125a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25Z"
      />
    </svg>
  );
}
export default CloudError;
