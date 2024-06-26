import type { SVGProps } from "react";

export function MailSettingsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.5 11c1.33 0 2.55-.472 3.5-1.257V14.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5V7.373l7.747 4.558a.5.5 0 0 0 .507 0l2.23-1.312A5.486 5.486 0 0 0 14.5 11Zm-10-7h4.707a5.496 5.496 0 0 0 2.235 6.072L10 10.92L2.015 6.223A2.5 2.5 0 0 1 4.5 4Zm6.135.92a2 2 0 0 0 1.43-2.478l-.155-.557c.254-.195.529-.362.821-.497l.338.358a2 2 0 0 0 2.91.001l.324-.344c.298.14.578.315.835.518l-.126.423a2 2 0 0 0 1.456 2.519l.349.082a4.698 4.698 0 0 1 .01 1.017l-.46.118a2 2 0 0 0-1.431 2.478l.156.556c-.254.196-.53.363-.822.498l-.338-.358a2 2 0 0 0-2.909-.002l-.325.344a4.32 4.32 0 0 1-.835-.517l.127-.423a2 2 0 0 0-1.456-2.52l-.35-.082a4.714 4.714 0 0 1-.01-1.016l.461-.118Zm4.865.58a1 1 0 1 0-2 0a1 1 0 0 0 2 0Z"
      />
    </svg>
  );
}
export default MailSettingsFilled;
