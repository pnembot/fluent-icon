import type { SVGProps } from "react";

export function SaveImageFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2v-5.5A1.5 1.5 0 0 1 6.5 9h10c.17 0 .337.012.5.035V5.621a2 2 0 0 0-.586-1.414l-1.621-1.621A2 2 0 0 0 13.379 2H13v3.5A1.5 1.5 0 0 1 11.5 7h-4A1.5 1.5 0 0 1 6 5.5V2H5Zm5.05 8A3.49 3.49 0 0 0 9 12.5V16H6v-5.5a.5.5 0 0 1 .5-.5h3.55ZM12 2H7v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V2Zm-2 10.5a2.5 2.5 0 0 1 2.5-2.5h4a2.5 2.5 0 0 1 2.5 2.5v4c0 .51-.152.983-.414 1.379l-3.025-3.025a1.5 1.5 0 0 0-2.122 0l-3.025 3.025A2.488 2.488 0 0 1 10 16.5v-4Zm7 .25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Zm-5.879 5.836c.396.262.87.414 1.379.414h4c.51 0 .983-.152 1.379-.414l-3.025-3.025a.5.5 0 0 0-.708 0l-3.025 3.025Z"
      />
    </svg>
  );
}
export default SaveImageFilled;
