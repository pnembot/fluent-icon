import type { SVGProps } from "react";

export function WindowBulletListAddFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.6a5.465 5.465 0 0 0-1-.393V7H4v7a2 2 0 0 0 2 2h3.207c.099.349.23.683.393 1H6a3 3 0 0 1-3-3V6Zm8.337 4a5.47 5.47 0 0 1 2.748-.985A.556.556 0 0 0 13.95 9h-4.4a.556.556 0 0 0-.506.306a.462.462 0 0 0 .119.542v.004A.56.56 0 0 0 9.55 10h1.787Zm-5.759-.89a.97.97 0 0 0-.078.39a1.2 1.2 0 0 0 .078.4a.841.841 0 0 0 .211.31c.094.09.202.16.32.212a.97.97 0 0 0 .391.078a.83.83 0 0 0 .391-.078a1.08 1.08 0 0 0 .32-.22A.972.972 0 0 0 7.5 9.5a1.01 1.01 0 0 0-.078-.39a.926.926 0 0 0-.219-.32a1.133 1.133 0 0 0-.32-.211A.954.954 0 0 0 6.5 8.5a.856.856 0 0 0-.391.08a1.015 1.015 0 0 0-.531.529ZM5.5 13.5a.97.97 0 0 1 .289-.703a1.1 1.1 0 0 1 .32-.218a.844.844 0 0 1 .391-.08a.94.94 0 0 1 .383.08c.118.05.226.122.32.21c.095.09.17.2.219.32a1.006 1.006 0 0 1-.531 1.313a.83.83 0 0 1-.391.078a.97.97 0 0 1-.391-.078a1.103 1.103 0 0 1-.32-.211a.842.842 0 0 1-.211-.312a1.2 1.2 0 0 1-.078-.4ZM17 18.242a4.5 4.5 0 1 1-5-7.484a4.5 4.5 0 0 1 5 7.484Zm-2.146-6.096A.5.5 0 0 0 14 12.5V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.146-.354Z"
      />
    </svg>
  );
}
export default WindowBulletListAddFilled;
