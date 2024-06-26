import type { SVGProps } from "react";

export function Video360Off(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2ZM2.854 2.146a.5.5 0 1 0-.708.708l1.185 1.184A1.7 1.7 0 0 0 2 5.698v8.604a1.7 1.7 0 0 0 1.97 1.677a37.862 37.862 0 0 1 11.17-.132l2.006 2.007a.5.5 0 0 0 .708-.708l-1.185-1.184l-6.124-6.124l-1.383-1.383l-3.157-3.157l-1.144-1.144l-2.007-2.008ZM13 13.707v.905a38.886 38.886 0 0 0-1-.064v-1.84l1 1ZM10.293 11H9a1 1 0 0 0-1 1v2.548a38.88 38.88 0 0 0-1 .064V12H5a1 1 0 0 0-1 1v1.962l-.19.03a.699.699 0 0 1-.81-.69V5.698c0-.43.385-.759.81-.69c.193.031.386.06.58.089L10.293 11Zm3.828 1L16 13.879v-.88a1 1 0 0 0-1-1h-.879Zm2.732 2.732l.71.709c.27-.3.437-.697.437-1.139V5.698a1.699 1.699 0 0 0-1.97-1.677a37.863 37.863 0 0 1-9.57.317l1.088 1.089c2.883.182 5.782.042 8.642-.42a.7.7 0 0 1 .81.69v8.605a.694.694 0 0 1-.147.43ZM14 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
      />
    </svg>
  );
}
export default Video360Off;
