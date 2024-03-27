import type { SVGProps } from "react";

export function PersonSettingsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8Zm-4.991 9A2.001 2.001 0 0 0 2 13c0 1.691.833 2.966 2.135 3.797C5.417 17.614 7.145 18 9 18c.41 0 .816-.019 1.21-.057A5.477 5.477 0 0 1 9 14.5c0-1.33.472-2.55 1.257-3.5H4.01Zm6.626 2.92a2 2 0 0 0 1.43-2.478l-.155-.557c.254-.195.529-.362.821-.497l.338.358a2 2 0 0 0 2.91.001l.324-.344c.298.14.578.315.835.518l-.126.423a2 2 0 0 0 1.456 2.519l.349.082a4.7 4.7 0 0 1 .01 1.017l-.46.117a2 2 0 0 0-1.431 2.479l.156.556a4.35 4.35 0 0 1-.822.498l-.338-.358a2 2 0 0 0-2.909-.002l-.325.344a4.32 4.32 0 0 1-.835-.518l.127-.422a2 2 0 0 0-1.456-2.52l-.35-.082a4.713 4.713 0 0 1-.01-1.016l.461-.118Zm4.865.58a1 1 0 1 0-2 0a1 1 0 0 0 2 0Z"
      />
    </svg>
  );
}
export default PersonSettingsFilled;
