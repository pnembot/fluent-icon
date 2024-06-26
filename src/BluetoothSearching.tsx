import type { SVGProps } from "react";

export function BluetoothSearching(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.854 2.146A.5.5 0 0 0 9 2.5v6.398L5.83 6.124a.5.5 0 1 0-.66.752L8.74 10l-3.57 3.124a.5.5 0 0 0 .66.752L9 11.102V17.5a.5.5 0 0 0 .854.354l4-4a.5.5 0 0 0-.025-.73L10.26 10l3.57-3.124a.5.5 0 0 0 .025-.73l-4-4ZM10 16.293v-5.191l2.768 2.422L10 16.293Zm2.768-9.817L10 8.898v-5.19l2.768 2.768Zm4.264.254a.5.5 0 1 0-.838.546a5.007 5.007 0 0 1-.002 5.45a.5.5 0 0 0 .838.547a6.007 6.007 0 0 0 .002-6.543ZM14.74 7.765a.5.5 0 0 1 .686.17a4.006 4.006 0 0 1 .003 4.127a.5.5 0 1 1-.857-.516a3.006 3.006 0 0 0-.002-3.095a.5.5 0 0 1 .17-.686Z"
      />
    </svg>
  );
}
export default BluetoothSearching;
