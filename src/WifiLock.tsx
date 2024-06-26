import type { SVGProps } from "react";

export function WifiLock(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.831 7.384c.41.409.796.877 1.133 1.365a.5.5 0 0 1-.823.568A8.612 8.612 0 0 0 3.945 8.091c-.348.348-.693.77-1.007 1.222a.5.5 0 1 1-.821-.57a10 10 0 0 1 1.121-1.36a9.612 9.612 0 0 1 13.593 0Zm-2.236 1.973a6.637 6.637 0 0 1 1.194 1.656a.5.5 0 0 1-.89.455a5.64 5.64 0 0 0-1.01-1.404a5.452 5.452 0 0 0-6.17-1.082a3.01 3.01 0 0 0-.882-.668a6.453 6.453 0 0 1 7.758 1.043ZM8.5 11.063a2 2 0 0 1 1.032.652a3.029 3.029 0 0 1 3.288 1.794a.5.5 0 0 0 .916-.401a4.135 4.135 0 0 0-.85-1.254a4.034 4.034 0 0 0-4.386-.879v.088Zm1.5 2.344v2.596a1.298 1.298 0 1 0 0-2.595ZM3.5 11v1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 0 0-4 0Zm1 1v-1a1 1 0 0 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5Z"
      />
    </svg>
  );
}
export default WifiLock;
