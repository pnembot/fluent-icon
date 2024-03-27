import type { SVGProps } from "react";

export function Video360OffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708l1.185 1.184A1.7 1.7 0 0 0 2 5.698v8.604a1.7 1.7 0 0 0 1.97 1.677a37.935 37.935 0 0 1 11.17-.132l2.006 2.007a.5.5 0 0 0 .708-.708l-15-15Zm11.14 12.556a39.087 39.087 0 0 0-.994-.09v-.905l.995.995ZM12 12.707v1.84a38.842 38.842 0 0 0-4 0V12a1 1 0 0 1 1-1h1.293L12 12.707Zm-8 2.255V13a1 1 0 0 1 1-1h2v2.612a38.917 38.917 0 0 0-3 .35ZM5.5 11a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm8.621 1L6.46 4.338c3.188.3 6.404.194 9.572-.317A1.699 1.699 0 0 1 18 5.698v8.604c0 .442-.167.84-.438 1.139L16 13.879v-.88a1 1 0 0 0-1-1h-.879Zm.379-1a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
      />
    </svg>
  );
}
export default Video360OffFilled;
