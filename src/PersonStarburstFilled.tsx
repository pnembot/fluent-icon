import type { SVGProps } from "react";

export function PersonStarburstFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.955 2.674c.407-.899 1.683-.899 2.09 0c.298.66 1.125.881 1.713.46c.802-.576 1.907.062 1.81 1.044a1.147 1.147 0 0 0 1.254 1.254c.982-.097 1.62 1.008 1.045 1.81c-.422.588-.2 1.415.459 1.713c.899.407.899 1.683 0 2.09a1.146 1.146 0 0 0-.46 1.713c.576.802-.062 1.907-1.044 1.81a1.147 1.147 0 0 0-1.254 1.254c.097.982-1.008 1.62-1.81 1.045a1.146 1.146 0 0 0-1.713.459c-.407.899-1.683.899-2.09 0a1.146 1.146 0 0 0-1.713-.46c-.802.576-1.907-.062-1.81-1.044a1.147 1.147 0 0 0-1.254-1.254c-.982.097-1.62-1.008-1.045-1.81c.422-.588.2-1.415-.459-1.713c-.899-.407-.899-1.683 0-2.09c.66-.298.881-1.125.46-1.713c-.576-.802.062-1.907 1.044-1.81a1.147 1.147 0 0 0 1.254-1.254c-.097-.982 1.008-1.62 1.81-1.045c.588.422 1.415.2 1.713-.459Zm1.04 2.322a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm2.5 5h-5a1.5 1.5 0 0 0-1.5 1.5c0 1.116.46 2.01 1.213 2.614c.741.596 1.735.886 2.788.886c1.053 0 2.046-.29 2.788-.886c.753-.604 1.212-1.498 1.212-2.614a1.5 1.5 0 0 0-1.5-1.5Z"
      />
    </svg>
  );
}
export default PersonStarburstFilled;
