import type { SVGProps } from "react";

export function CallPauseFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.551 2.442c.854-.478 1.943-.59 2.984-.326c.507.128.94.457 1.2.91l.898 1.566a2.5 2.5 0 0 1-.829 3.354l-.79.502c-.327.207-.447.524-.372.775c.268.898.861 1.894 1.513 2.576c.194.204.55.252.898.049l.437-.255a2.5 2.5 0 0 1 3.44.938l.805 1.435c.263.47.306 1.031.12 1.536c-.371 1.003-1.086 1.812-1.965 2.217c-.893.411-1.938.394-2.884-.237c-1.498-.998-3.303-2.678-4.938-5.48c-1.656-2.84-2.073-5.257-2.026-7.059c.03-1.153.64-2.015 1.509-2.501ZM13 2.499a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0v-6Zm3 0a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0v-6Z"
      />
    </svg>
  );
}
export default CallPauseFilled;
