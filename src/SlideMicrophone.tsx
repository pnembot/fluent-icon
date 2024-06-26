import type { SVGProps } from "react";

export function SlideMicrophone(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm0 2.5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm-.5 3a.5.5 0 0 1 .5-.5H10a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5ZM4.5 4A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h5.916a4.97 4.97 0 0 1-.316-1H4.5A1.5 1.5 0 0 1 3 13.5v-7A1.5 1.5 0 0 1 4.5 5h11A1.5 1.5 0 0 1 17 6.5v3.264c.606.542.99 1.327 1 2.202V6.5A2.5 2.5 0 0 0 15.5 4h-11Zm8.5 8a2 2 0 1 1 4 0v2a2 2 0 0 1-4 0v-2Zm-.97 2.43a.5.5 0 1 0-.99.14a4.002 4.002 0 0 0 3.46 3.4v.53a.5.5 0 1 0 1 0v-.531a4.002 4.002 0 0 0 3.46-3.398a.5.5 0 1 0-.99-.142a3 3 0 0 1-5.94 0Z"
      />
    </svg>
  );
}
export default SlideMicrophone;
