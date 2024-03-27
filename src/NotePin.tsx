import type { SVGProps } from "react";

export function NotePin(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 9.018V14l.005.176A3 3 0 0 0 6 17h4.379l.176-.008a2 2 0 0 0 1.238-.578l4.621-4.621l.12-.13A2 2 0 0 0 17 10.38V6l-.005-.176A3 3 0 0 0 14 3H9.463c.254.3.416.644.49 1H14l.15.005A2 2 0 0 1 16 6v4h-3l-.176.005A3 3 0 0 0 10 13v3H6l-.15-.005A2 2 0 0 1 4 14V9.81a1.815 1.815 0 0 1-.615-.407L3 9.018ZM13 11l2.783.001c-.024.03-.05.058-.076.085l-4.621 4.621l-.086.074V13l.005-.15A2 2 0 0 1 13 11ZM8.538 3.387L6.611 1.46a1.5 1.5 0 0 0-2.409.404L3.4 3.51a1 1 0 0 1-.573.507l-1.102.38a1 1 0 0 0-.38 1.653l.948.948L1 8.29v.707h.707L3 7.706l.947.947a1 1 0 0 0 1.653-.38l.38-1.102a1 1 0 0 1 .507-.572l1.647-.803a1.5 1.5 0 0 0 .404-2.409Z"
      />
    </svg>
  );
}
export default NotePin;
