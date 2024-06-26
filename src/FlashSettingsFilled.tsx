import type { SVGProps } from "react";

export function FlashSettingsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.211 2c-.474 0-.891.314-1.021.77l-2.25 7.874a1.062 1.062 0 0 0 1.021 1.354H6.23l-1.17 4.68c-.264 1.055 1.04 1.777 1.795.995l2.22-2.267a5.5 5.5 0 0 1 6.22-6.35l.237-.24l.003-.005c.641-.667.18-1.811-.766-1.811h-2.564l1.261-3.594l.003-.008A1.062 1.062 0 0 0 12.46 2H7.211Zm4.856 9.443a2 2 0 0 1-1.431 2.478l-.461.118a4.702 4.702 0 0 0 .01 1.016l.35.083a2 2 0 0 1 1.456 2.519l-.127.422c.257.204.537.378.835.518l.325-.344a2 2 0 0 1 2.91.002l.337.358c.292-.135.568-.302.822-.498l-.157-.556a2 2 0 0 1 1.431-2.479l.46-.117a4.702 4.702 0 0 0-.01-1.017l-.348-.082a2 2 0 0 1-1.456-2.52l.126-.421a4.32 4.32 0 0 0-.835-.519l-.325.344a2 2 0 0 1-2.91-.001l-.337-.358a4.316 4.316 0 0 0-.821.497l.156.557ZM14.5 15.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"
      />
    </svg>
  );
}
export default FlashSettingsFilled;
