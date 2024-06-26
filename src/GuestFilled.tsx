import type { SVGProps } from "react";

export function GuestFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.085 4H5.5a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-1.585A1.5 1.5 0 0 1 11.5 5h-3a1.5 1.5 0 0 1-1.415-1Zm5.83-1H14.5A1.5 1.5 0 0 1 16 4.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 16.5v-12A1.5 1.5 0 0 1 5.5 3h1.585A1.5 1.5 0 0 1 8.5 2h3a1.5 1.5 0 0 1 1.415 1ZM8 3.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5ZM10 6a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm-2.25 5c-.664 0-1.298.55-1.218 1.302c.06.56.235 1.254.784 1.806c.557.558 1.418.892 2.684.892c1.266 0 2.127-.334 2.684-.892c.55-.552.725-1.247.784-1.806c.08-.752-.553-1.302-1.218-1.302h-4.5Z"
      />
    </svg>
  );
}
export default GuestFilled;
