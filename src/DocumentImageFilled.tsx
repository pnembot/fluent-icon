import type { SVGProps } from "react";

export function DocumentImageFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v8.5a1.5 1.5 0 0 1-1.5 1.5h-3.837c.216-.455.337-.963.337-1.5v-4A3.5 3.5 0 0 0 7.5 9H4V3.5A1.5 1.5 0 0 1 5.5 2H10Zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25L11 2.25ZM1 12.5A2.5 2.5 0 0 1 3.5 10h4a2.5 2.5 0 0 1 2.5 2.5v4c0 .51-.152.983-.414 1.379L6.56 14.854a1.5 1.5 0 0 0-2.122 0l-3.025 3.025A2.488 2.488 0 0 1 1 16.5v-4Zm7 .25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Zm-5.879 5.836c.396.262.87.414 1.379.414h4c.51 0 .983-.152 1.379-.414L5.854 15.56a.5.5 0 0 0-.708 0l-3.025 3.025Z"
      />
    </svg>
  );
}
export default DocumentImageFilled;
