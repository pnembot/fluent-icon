import type { SVGProps } from "react";

export function UninstallApp(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 17A1.5 1.5 0 0 1 3 15.5v-11A1.5 1.5 0 0 1 4.5 3H9a1.5 1.5 0 0 1 1.5 1.5v5h5A1.5 1.5 0 0 1 17 11v4.5a1.5 1.5 0 0 1-1.5 1.5h-11Zm11-6.5h-5V16h5a.5.5 0 0 0 .5-.5V11a.5.5 0 0 0-.5-.5Zm-6 0H4v5a.5.5 0 0 0 .5.5h5v-5.5Zm0-1v-5A.5.5 0 0 0 9 4H4.5a.5.5 0 0 0-.5.5v5h5.5Zm4.354-2.646a.5.5 0 0 1-.708-.708L14.793 4.5l-1.647-1.646a.5.5 0 0 1 .708-.708L15.5 3.793l1.646-1.647a.5.5 0 0 1 .708.708L16.207 4.5l1.647 1.646a.5.5 0 0 1-.708.708L15.5 5.207l-1.646 1.647Z"
      />
    </svg>
  );
}
export default UninstallApp;
