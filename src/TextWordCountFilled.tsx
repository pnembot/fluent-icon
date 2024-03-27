import type { SVGProps } from "react";

export function TextWordCountFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.98 14.537c-.258.27-.55.513-.857.712a.5.5 0 1 1-.542-.84c.733-.474 1.284-1.228 1.41-1.789a.5.5 0 0 1 .988.11v5.77a.5.5 0 0 1-1 0v-3.963Zm4.608-1.306c-.63 0-1.094.542-1.094 1.073a.5.5 0 0 1-1 0c0-1.042.87-2.073 2.094-2.073c.721 0 1.42.326 1.812.909c.41.61.428 1.413-.057 2.21c-.246.405-.583.712-.916.966c-.167.128-.34.247-.504.359l-.07.048c-.14.096-.274.187-.403.28c-.43.314-.738.606-.875.997h2.587a.5.5 0 0 1 0 1H5.994a.5.5 0 0 1-.5-.5c0-1.167.703-1.822 1.368-2.305c.142-.104.289-.204.429-.3l.068-.046c.163-.111.317-.218.46-.328c.29-.22.517-.439.67-.69c.311-.513.244-.89.081-1.133c-.18-.269-.545-.467-.982-.467Zm4.475.26a.921.921 0 0 0-.282.43a.5.5 0 1 1-.959-.283a1.92 1.92 0 0 1 .592-.907c.348-.297.84-.5 1.494-.5c1.325 0 2.107.936 2.107 1.811c0 .345-.07.873-.438 1.32c-.065.08-.137.154-.217.223c.125.092.243.205.344.342c.2.27.31.606.31 1c0 .713-.249 1.26-.685 1.616c-.42.342-.947.457-1.42.457c-.45 0-.889-.072-1.266-.303c-.388-.238-.652-.606-.815-1.085a.5.5 0 1 1 .947-.322c.105.308.243.464.39.554c.159.097.39.156.743.156c.33 0 .605-.082.789-.232c.166-.135.318-.375.318-.841a.654.654 0 0 0-.116-.407a.78.78 0 0 0-.315-.236c-.3-.136-.682-.169-.944-.169a.5.5 0 0 1 0-1c.712 0 1.02-.212 1.165-.388c.16-.194.21-.453.21-.685c0-.28-.29-.811-1.107-.811c-.435 0-.691.13-.845.26ZM2.002 9.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5h-14.5a.75.75 0 0 1-.75-.75Zm0-5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5h-14.5a.75.75 0 0 1-.75-.75Zm14 10a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"
      />
    </svg>
  );
}
export default TextWordCountFilled;
