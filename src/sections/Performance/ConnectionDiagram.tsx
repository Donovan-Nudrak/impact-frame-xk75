type DiagramSvgProps = {
  className?: string;
};

function TrackMarks({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  const right = width - 12;
  const bottom = height - 12;

  return (
    <g stroke="#354047" strokeWidth="1" opacity="0.45">
      <path d="M12 12h12M12 12v12" />
      <path d={`M${right} 12h-12M${right} 12v12`} />
      <path d={`M12 ${bottom}h12M12 ${bottom}v-12`} />
      <path d={`M${right} ${bottom}h-12M${right} ${bottom}v-12`} />
    </g>
  );
}

function BluetoothMark({ x, y, size }: { x: number; y: number; size: number }) {
  const scale = size / 24;

  return (
    <g
      data-bt-mark="true"
      transform={`translate(${x} ${y}) scale(${scale}) translate(-12 -12)`}
      fill="none"
      stroke="#24D8F0"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      <path d="m7 7 10 10-5 5V2l5 5L7 17" />
    </g>
  );
}

export function HorizontalTracks({ className }: DiagramSvgProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 420 230"
      fill="none"
      aria-hidden="true"
    >
      <g data-frame="full">
        <TrackMarks width={420} height={230} />
      </g>
      <g data-frame="bluetooth" stroke="#354047" strokeWidth="1" opacity="0.45">
        <path d="M108 8h14M108 8v14" />
        <path d="M272 8h-14M272 8v14" />
        <path d="M108 222h14M108 222v-14" />
        <path d="M272 222h-14M272 222v-14" />
      </g>
      <path
        data-track="usbc"
        d="M16 115h388"
        stroke="#24D8F0"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <path
        data-track="ghz24"
        d="M16 115h388"
        stroke="#24D8F0"
        strokeWidth="1.25"
        strokeDasharray="5 11"
        strokeLinecap="square"
      />
      <path data-track="bluetooth" d="M36 115h368" stroke="none" />
      <g data-pulse="ghz24" data-wireless="true" fill="#24D8F0">
        <circle cx="86" cy="115" r="3.2" />
        <circle cx="168" cy="115" r="3.2" />
        <circle cx="250" cy="115" r="3.2" />
        <circle cx="332" cy="115" r="3.2" />
      </g>
      <g data-bt-group="true" transform="translate(101 0)">
        <g
          data-arc="bluetooth"
          data-wireless="true"
          stroke="#24D8F0"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M53.2 132.1 A28 28 0 0 0 53.2 87.9" />
          <path d="M66.8 149.4 A50 50 0 0 0 66.8 70.6" />
          <path d="M80.3 166.7 A72 72 0 0 0 80.3 53.3" />
          <path d="M93.9 184.1 A94 94 0 0 0 93.9 35.9" />
          <path d="M107.4 201.4 A116 116 0 0 0 107.4 18.6" />
        </g>
        <BluetoothMark x={36} y={115} size={22} />
      </g>
      <rect
        data-plug="true"
        data-wired="true"
        x="392"
        y="109"
        width="14"
        height="12"
        fill="#1B2429"
        stroke="#24D8F0"
      />
      <rect
        data-dongle="true"
        data-wireless="true"
        x="388"
        y="105"
        width="18"
        height="20"
        fill="#0D1215"
        stroke="#89959B"
      />
      <circle data-signal="true" cx="16" cy="115" r="4" fill="#24D8F0" />
    </svg>
  );
}

export function VerticalTracks({ className }: DiagramSvgProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 150"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="#354047" strokeWidth="1" opacity="0.45">
        <path d="M12 12h12M12 12v12" />
        <path d="M188 12h-12M188 12v12" />
        <path d="M12 138h12M12 138v-12" />
        <path d="M188 138h-12M188 138v-12" />
      </g>
      <path
        data-track="usbc"
        d="M100 16v118"
        stroke="#24D8F0"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <path
        data-track="ghz24"
        d="M100 16v118"
        stroke="#24D8F0"
        strokeWidth="1.25"
        strokeDasharray="5 11"
        strokeLinecap="square"
      />
      <path data-track="bluetooth" d="M100 18v116" stroke="none" />
      <g data-pulse="ghz24" data-wireless="true" fill="#24D8F0">
        <circle cx="100" cy="40" r="3.2" />
        <circle cx="100" cy="68" r="3.2" />
        <circle cx="100" cy="96" r="3.2" />
        <circle cx="100" cy="124" r="3.2" />
      </g>
      <g
        data-arc="bluetooth"
        data-wireless="true"
        stroke="#24D8F0"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path d="M77.9 35.2 A28 28 0 0 0 122.1 35.2" />
        <path d="M60.6 48.8 A50 50 0 0 0 139.4 48.8" />
        <path d="M43.3 62.3 A72 72 0 0 0 156.7 62.3" />
        <path d="M25.9 75.9 A94 94 0 0 0 174.1 75.9" />
        <path d="M8.6 89.4 A116 116 0 0 0 191.4 89.4" />
      </g>
      <rect
        data-plug="true"
        data-wired="true"
        x="94"
        y="126"
        width="12"
        height="14"
        fill="#1B2429"
        stroke="#24D8F0"
      />
      <rect
        data-dongle="true"
        data-wireless="true"
        x="90"
        y="122"
        width="20"
        height="18"
        fill="#0D1215"
        stroke="#89959B"
      />
      <BluetoothMark x={100} y={18} size={14} />
      <circle data-signal="true" cx="100" cy="18" r="4" fill="#24D8F0" />
    </svg>
  );
}
