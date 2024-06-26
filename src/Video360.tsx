import type { SVGProps } from "react";

export function Video360(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-4 1a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM3.97 4.02A1.699 1.699 0 0 0 2 5.697v8.605a1.7 1.7 0 0 0 1.97 1.677a37.866 37.866 0 0 1 12.06 0A1.699 1.699 0 0 0 18 14.302V5.697a1.699 1.699 0 0 0-1.97-1.677a37.863 37.863 0 0 1-12.06 0ZM3 5.697a.7.7 0 0 1 .81-.69c4.1.662 8.28.662 12.38 0a.7.7 0 0 1 .81.69v8.605a.7.7 0 0 1-.81.69l-.19-.03v-1.963a1 1 0 0 0-1-1h-2v2.613a38.887 38.887 0 0 0-1-.065V12a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2.548c-.334.017-.667.039-1 .065V12H5a1 1 0 0 0-1 1v1.963l-.19.03a.699.699 0 0 1-.81-.69V5.697Z"
      />
    </svg>
  );
}
export default Video360;
