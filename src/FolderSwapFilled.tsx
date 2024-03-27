import type { SVGProps } from "react";

export function FolderSwapFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.565 4.5H15.5a2.5 2.5 0 0 1 2.479 2.174l.016.162L18 7v6.883l-1.44-1.44a1.5 1.5 0 0 0-2.475 1.56h-1.166a1.5 1.5 0 0 0-2.475-1.56L8.44 14.44a1.5 1.5 0 0 0 0 2.125l.436.434H4.5a2.5 2.5 0 0 1-2.495-2.336L2 14.5v-7h5.07l.154-.008a1.5 1.5 0 0 0 .823-.353l.111-.106L10.565 4.5ZM7.167 3c.27 0 .535.073.765.21l.135.09l1.318.989l-1.952 2.055l-.06.055a.5.5 0 0 1-.221.094l-.081.007H2v-1a2.5 2.5 0 0 1 2.336-2.495L4.5 3h2.667Zm4.69 10.859a.5.5 0 0 0-.707-.708l-2.003 1.998a.5.5 0 0 0 0 .708l2.003 1.997a.5.5 0 1 0 .706-.708l-1.147-1.144h5.584l-1.146 1.144a.5.5 0 1 0 .706.708l2-1.996a.5.5 0 0 0 0-.708l-2-1.999a.5.5 0 1 0-.707.707l1.145 1.144H10.71l1.146-1.143Z"
      />
    </svg>
  );
}
export default FolderSwapFilled;
