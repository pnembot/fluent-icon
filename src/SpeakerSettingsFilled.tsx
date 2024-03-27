import type { SVGProps } from "react";

export function SpeakerSettingsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12 3.006c0-.873-1.04-1.327-1.68-.733L6.448 5.866a.5.5 0 0 1-.34.134H3.5A1.5 1.5 0 0 0 2 7.5v5A1.5 1.5 0 0 0 3.5 14h2.607a.5.5 0 0 1 .34.133l3.213 2.981A5.5 5.5 0 0 1 12 9.6V3.006Zm.065 8.436l-.156-.557c.254-.195.53-.362.822-.497l.337.357a2 2 0 0 0 2.91.002l.324-.344c.298.14.578.315.835.518l-.126.423a2 2 0 0 0 1.456 2.519l.35.082a4.7 4.7 0 0 1 .01 1.017l-.461.117a2 2 0 0 0-1.43 2.478l.155.557a4.35 4.35 0 0 1-.822.498l-.337-.358a2 2 0 0 0-2.91-.002l-.325.344a4.324 4.324 0 0 1-.834-.518l.126-.422a2 2 0 0 0-1.456-2.52l-.35-.082a4.714 4.714 0 0 1-.01-1.016l.462-.118a2 2 0 0 0 1.43-2.478ZM14.5 15.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
      />
    </svg>
  );
}
export default SpeakerSettingsFilled;
