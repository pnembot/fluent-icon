import type { SVGProps } from "react";

export function CopyMove(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        d="M11 6.999A4.001 4.001 0 1 1 11 15A4.001 4.001 0 0 1 11 7zM3 4.085V10.5a2.5 2.5 0 0 0 2.336 2.495L5.5 13h.915c.156.357.352.693.583 1H5a3 3 0 0 1-3-3V5.5a1.5 1.5 0 0 1 1-1.415zm7.798 3.96l-.076.044l-.07.057l-.057.07a.5.5 0 0 0 0 .568l.058.07l1.645 1.645L8.5 10.5l-.09.008a.5.5 0 0 0-.402.402L8 11l.008.09a.5.5 0 0 0 .402.402l.09.008l3.8-.001l-1.647 1.647l-.058.07a.5.5 0 0 0 .696.695l.069-.057l2.53-2.533l.036-.05l.042-.08l.027-.083l.01-.064v-.088l-.01-.064l-.026-.083l-.042-.08l-.038-.05l-2.53-2.533l-.068-.057a.5.5 0 0 0-.493-.044zM10.5 2A1.5 1.5 0 0 1 12 3.5v2.599a5.024 5.024 0 0 0-1-.1V3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h.499c0 .343.034.677.1 1H5.5A1.5 1.5 0 0 1 4 10.5v-7A1.5 1.5 0 0 1 5.5 2h5z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}
export default CopyMove;
