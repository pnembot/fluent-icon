import type { SVGProps } from "react";

export function DrinkMargarita(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.109 2.988a.5.5 0 0 0-.217-.976l-4.5 1a.5.5 0 0 0-.377.367l-.28 1.121H4.5A.5.5 0 0 0 4 5v3.5A2.5 2.5 0 0 0 6.5 11H7v.5a3 3 0 0 0 2.5 2.959V17h-2a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1h-2v-2.54A3 3 0 0 0 13 11.5V11h.5A2.5 2.5 0 0 0 16 8.5V5a.5.5 0 0 0-.5-.5h-3.735l.145-.579l4.199-.933ZM10.485 5.5L10.11 7H5V5.5h5.485ZM5 8h4.86l-.845 3.379a.5.5 0 0 0 .97.242l.905-3.62H15v.5a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 0 0-.5.5v1a2 2 0 1 1-4 0v-1a.5.5 0 0 0-.5-.5h-1A1.5 1.5 0 0 1 5 8.5V8Zm10-1h-3.86l.375-1.5H15V7Z"
      />
    </svg>
  );
}
export default DrinkMargarita;
