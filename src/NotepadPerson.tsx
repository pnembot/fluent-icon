import type { SVGProps } from "react";

export function NotepadPerson(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-1-11a.5.5 0 0 0-.5.5V3h-.5A1.5 1.5 0 0 0 4 4.5v12A1.5 1.5 0 0 0 5.5 18h5.867a3.18 3.18 0 0 1-.329-1H5.5a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v4.541a3.02 3.02 0 0 1 1 0V4.5A1.5 1.5 0 0 0 14.5 3H14v-.5a.5.5 0 0 0-1 0V3h-2.5v-.5a.5.5 0 0 0-1 0V3H7v-.5a.5.5 0 0 0-.5-.5Zm9 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm0 5c2.5 0 3.5-1.255 3.5-2.5a1.5 1.5 0 0 0-1.5-1.5h-4a1.5 1.5 0 0 0-1.5 1.5c0 1.25 1 2.5 3.5 2.5Zm-8-9a.5.5 0 0 0 0 1H11a.5.5 0 0 0 0-1H7.5Z"
      />
    </svg>
  );
}
export default NotepadPerson;
