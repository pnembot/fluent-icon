import type { SVGProps } from "react";

export function DocumentLandscapeData(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 4A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4h-11ZM3 6.5A1.5 1.5 0 0 1 4.5 5h11A1.5 1.5 0 0 1 17 6.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 13.5v-7ZM6 10a1.5 1.5 0 0 0-1.5 1.5v1a1.5 1.5 0 0 0 3 0v-1A1.5 1.5 0 0 0 6 10Zm-.5 1.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Zm3-4a1.5 1.5 0 1 1 3 0v5a1.5 1.5 0 0 1-3 0v-5ZM10 7a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5A.5.5 0 0 0 10 7Zm4 1a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 3 0v-3A1.5 1.5 0 0 0 14 8Zm-.5 1.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0v-3Z"
      />
    </svg>
  );
}
export default DocumentLandscapeData;
