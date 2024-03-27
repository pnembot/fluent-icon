import type { SVGProps } from "react";

export function CallProhibitedFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m17.96 6.94l-.159.83c-.147.776-.874 1.298-1.697 1.218l-1.637-.158c-.714-.069-1.243-.59-1.467-1.33c-.304-1.005-.5-1.75-.5-1.75a6.188 6.188 0 0 0-2.5-.5c-1.014 0-1.738.215-2.5.5c0 0-.204.746-.5 1.75c-.198.67-.504 1.257-1.203 1.327L4.17 8.99a1.735 1.735 0 0 1-1.822-1.208l-.248-.83a2.255 2.255 0 0 1 .577-2.28c1.425-1.384 3.99-2.164 7.316-2.168c3.332-.004 5.594.772 7.162 2.156c.66.582.962 1.458.805 2.28ZM6.817 16.682a4.5 4.5 0 1 0 6.364-6.364a4.5 4.5 0 0 0-6.364 6.364Zm5.657-.707a3.5 3.5 0 0 1-4.571.328l4.9-4.9a3.5 3.5 0 0 1-.33 4.572Zm-.379-5.278l-4.9 4.9a3.5 3.5 0 0 1 4.9-4.9Z"
      />
    </svg>
  );
}
export default CallProhibitedFilled;
