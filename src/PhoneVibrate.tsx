import type { SVGProps } from "react";

export function PhoneVibrate(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.5 14.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM7 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7ZM6 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4ZM2.916 7.223a.5.5 0 0 0-.832.554l.38.57c.284.426.318.972.089 1.43a2.427 2.427 0 0 0 .151 2.43l.38.57a.5.5 0 1 0 .832-.554l-.38-.57a1.427 1.427 0 0 1-.089-1.43a2.427 2.427 0 0 0-.151-2.43l-.38-.57Zm13.307-.139a.5.5 0 0 1 .693.139l.38.57c.483.724.54 1.652.151 2.43a1.426 1.426 0 0 0 .09 1.43l.38.57a.5.5 0 1 1-.833.554l-.38-.57a2.427 2.427 0 0 1-.151-2.43a1.427 1.427 0 0 0-.09-1.43l-.379-.57a.5.5 0 0 1 .139-.693Z"
      />
    </svg>
  );
}
export default PhoneVibrate;
