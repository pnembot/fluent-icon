import type { SVGProps } from "react";

export function FoodFish(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.912 9.347c-.043-1.759.24-3.759 1.429-4.948c.693-.693 1.66-1.077 2.714-1.26c1.052-.184 2.149-.16 3.051-.073a2.01 2.01 0 0 1 1.827 1.828c.087.903.11 2-.072 3.052c-.183 1.055-.567 2.022-1.26 2.715c-1.19 1.19-3.19 1.473-4.949 1.43a1.402 1.402 0 0 0-1.433 1.303c-.098 1.471-.392 3.17-1.112 4.521c-.033.061-.062.076-.072.08a.1.1 0 0 1-.066.002c-.065-.017-.163-.088-.193-.245a22.565 22.565 0 0 0-.538-2.283a8.348 8.348 0 0 0-.376-1.028c-.136-.297-.302-.586-.509-.793c-.207-.207-.495-.373-.792-.509a8.36 8.36 0 0 0-1.029-.377a22.583 22.583 0 0 0-2.283-.54c-.157-.03-.228-.128-.245-.193a.1.1 0 0 1 .002-.066c.004-.01.02-.04.08-.072c1.352-.72 3.05-1.013 4.522-1.11c.75-.05 1.322-.69 1.304-1.434Zm.722-5.655c-1.5 1.501-1.766 3.88-1.722 5.68a.402.402 0 0 1-.37.41c-1.526.102-3.39.408-4.926 1.226c-.514.275-.703.797-.58 1.273c.12.454.505.825 1.028.923a21.6 21.6 0 0 1 2.178.515c.344.104.652.215.902.33c.259.118.42.225.502.307c.082.082.188.243.306.501c.115.25.225.558.33.903c.208.688.381 1.484.512 2.177c.098.523.469.91.922 1.028c.477.125.999-.064 1.273-.58c.818-1.534 1.125-3.398 1.228-4.924a.402.402 0 0 1 .41-.37c1.8.044 4.18-.22 5.68-1.722c.892-.892 1.336-2.082 1.539-3.251c.204-1.173.174-2.367.083-3.32a3.01 3.01 0 0 0-2.727-2.728c-.953-.091-2.147-.12-3.318.083c-1.17.203-2.359.647-3.25 1.539Zm4.617.807a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5Z"
      />
    </svg>
  );
}
export default FoodFish;
