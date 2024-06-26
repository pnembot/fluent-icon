import type { SVGProps } from "react";

export function FeedFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.469 17H4a2 2 0 0 1-2-2V4.5A1.5 1.5 0 0 1 3.5 3h7A1.5 1.5 0 0 1 12 4.5V6h4.484C17.25 6.023 18 6.6 18 7.582V12.5a1.5 1.5 0 0 1-1.5 1.5h-2.106l-.423 1.823c-.19.815-.851 1.197-1.502 1.177ZM15.01 7H12v8.482c0 .6.861.7.997.115L14.94 7.23c.02-.081.043-.158.07-.231ZM5.5 7a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1ZM5 10a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Zm0 3.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Z"
      />
    </svg>
  );
}
export default FeedFilled;
