import type { SVGProps } from "react";

export function NotepadFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 2.5a.5.5 0 0 0-1 0V3h-.5A1.5 1.5 0 0 0 4 4.5v12A1.5 1.5 0 0 0 5.5 18H11v-3.5a1.5 1.5 0 0 1 1.5-1.5H16V4.5A1.5 1.5 0 0 0 14.5 3H14v-.5a.5.5 0 0 0-1 0V3h-2.5v-.5a.5.5 0 0 0-1 0V3H7v-.5Zm0 5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm.5 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM7 13.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm8.69.5H12.5a.5.5 0 0 0-.5.5v3.19c.051-.04.1-.083.146-.13l3.415-3.414a1.47 1.47 0 0 0 .128-.146Z"
      />
    </svg>
  );
}
export default NotepadFilled;
