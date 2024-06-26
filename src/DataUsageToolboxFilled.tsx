import type { SVGProps } from "react";

export function DataUsageToolboxFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h5v-2.5c0-.172.017-.34.05-.502a.5.5 0 0 1-.55-.498v-3a.5.5 0 0 1 1 0V12a2.5 2.5 0 0 1 1.542-.958A2.5 2.5 0 0 1 12 9.5v-4a.5.5 0 0 1 1 0v3.55c.162-.033.329-.05.5-.05h2c.171 0 .338.017.5.05V4a2 2 0 0 0-2-2H4Zm1 5.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0v-5Zm7 4.5v-.5a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5v.5h.5a1.5 1.5 0 0 1 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5a1.5 1.5 0 0 1 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 4.5h2v1.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16Z"
      />
    </svg>
  );
}
export default DataUsageToolboxFilled;
