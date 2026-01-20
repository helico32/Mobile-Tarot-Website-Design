export function OrnateFrame() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 375 812"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Top left corner */}
      <path
        d="M20 20 Q20 20 40 25 Q50 27 55 35 Q58 40 60 50 L60 80"
        stroke="rgba(212, 184, 150, 0.3)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M25 25 Q30 28 35 35 Q40 45 40 55 Q40 65 35 70"
        stroke="rgba(212, 184, 150, 0.2)"
        strokeWidth="1.5"
        fill="none"
      />
      
      {/* Top right corner */}
      <path
        d="M355 20 Q355 20 335 25 Q325 27 320 35 Q317 40 315 50 L315 80"
        stroke="rgba(212, 184, 150, 0.3)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M350 25 Q345 28 340 35 Q335 45 335 55 Q335 65 340 70"
        stroke="rgba(212, 184, 150, 0.2)"
        strokeWidth="1.5"
        fill="none"
      />
      
      {/* Bottom left corner */}
      <path
        d="M20 792 Q20 792 40 787 Q50 785 55 777 Q58 772 60 762 L60 732"
        stroke="rgba(212, 184, 150, 0.3)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M25 787 Q30 784 35 777 Q40 767 40 757 Q40 747 35 742"
        stroke="rgba(212, 184, 150, 0.2)"
        strokeWidth="1.5"
        fill="none"
      />
      
      {/* Bottom right corner */}
      <path
        d="M355 792 Q355 792 335 787 Q325 785 320 777 Q317 772 315 762 L315 732"
        stroke="rgba(212, 184, 150, 0.3)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M350 787 Q345 784 340 777 Q335 767 335 757 Q335 747 340 742"
        stroke="rgba(212, 184, 150, 0.2)"
        strokeWidth="1.5"
        fill="none"
      />
      
      {/* Decorative swirls */}
      <circle cx="187.5" cy="40" r="2" fill="rgba(212, 184, 150, 0.4)" />
      <circle cx="187.5" cy="772" r="2" fill="rgba(212, 184, 150, 0.4)" />
      <circle cx="40" cy="406" r="2" fill="rgba(212, 184, 150, 0.4)" />
      <circle cx="335" cy="406" r="2" fill="rgba(212, 184, 150, 0.4)" />
    </svg>
  );
}
