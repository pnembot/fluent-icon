import type { SVGProps } from "react";

export function ContentSettingsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.5 5.25A2.75 2.75 0 0 1 5.25 2.5h9.5a2.75 2.75 0 0 1 2.75 2.75v4.64a5.472 5.472 0 0 0-1.5-.683V7H4v7.75c0 .69.56 1.25 1.25 1.25h3.957c.152.538.384 1.043.682 1.5H5.25a2.75 2.75 0 0 1-2.75-2.75v-9.5ZM9 14.5v-6a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5ZM6 14V9h2v5H6Zm3.998-5.5a.5.5 0 0 1 .5-.5H14.5a.5.5 0 1 1 0 1h-4.002a.5.5 0 0 1-.5-.5Zm2.068 2.942a2 2 0 0 1-1.43 2.478l-.462.118a4.706 4.706 0 0 0 .01 1.016l.35.083a2 2 0 0 1 1.456 2.519l-.127.423c.258.203.537.377.835.517l.325-.344a2 2 0 0 1 2.91.002l.337.358c.292-.135.568-.302.822-.498l-.156-.556a2 2 0 0 1 1.43-2.478l.46-.118a4.731 4.731 0 0 0-.01-1.017l-.348-.082a2 2 0 0 1-1.456-2.52l.126-.421a4.322 4.322 0 0 0-.835-.519l-.325.344a2 2 0 0 1-2.91-.001l-.337-.358a4.316 4.316 0 0 0-.822.497l.157.557ZM14.5 15.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"
      />
    </svg>
  );
}
export default ContentSettingsFilled;
