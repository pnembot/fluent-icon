import type { SVGProps } from "react";

export function Flashlight(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.458 1.666a.5.5 0 1 0-1 0v.833a.5.5 0 0 0 1 0v-.833Zm3.395 1.187a.5.5 0 0 0-.707-.707l-1.5 1.5a.5.5 0 0 0 .707.707l1.5-1.5Zm-10 10a.5.5 0 1 0-.707-.707l-1 1a.5.5 0 1 0 .707.707l1-1ZM7 4.999v3.793l-4.292 4.293a2 2 0 0 0 0 2.829l1.379 1.378a2 2 0 0 0 2.828 0L11.207 13h3.792a.5.5 0 0 0 .354-.146l1.44-1.44a2 2 0 0 0 0-2.828l-5.38-5.379a2 2 0 0 0-2.828 0l-1.44 1.44A.5.5 0 0 0 7 4.999Zm2.293-1.085a1 1 0 0 1 1.415 0l5.378 5.378a1 1 0 0 1 0 1.415L15 11.791L8.207 5l1.085-1.085ZM8 6.206L13.792 12h-2.585L7.999 8.792V6.206Zm-.5 3.5l2.794 2.793l-4.086 4.086a1 1 0 0 1-1.414 0l-1.379-1.378a1 1 0 0 1 0-1.415L7.5 9.707Zm10-4.165a.5.5 0 1 0 0 1h.834a.5.5 0 1 0 0-1H17.5Z"
      />
    </svg>
  );
}
export default Flashlight;
