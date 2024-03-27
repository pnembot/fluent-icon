import type { SVGProps } from "react";

export function LightbulbCircleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16ZM6.5 8.5a3.5 3.5 0 1 1 5.587 2.81c-.183.136-.284.289-.31.43l-.05.26H8.273l-.05-.26c-.026-.141-.127-.294-.31-.43A3.495 3.495 0 0 1 6.5 8.5Zm2.182 5.684L8.46 13h3.08l-.222 1.184a1 1 0 0 1-.983.816h-.67a1 1 0 0 1-.983-.816Z"
      />
    </svg>
  );
}
export default LightbulbCircleFilled;
