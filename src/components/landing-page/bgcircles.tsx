const BgCircles = () => {
  return (
    <>
      {/* Large soft gradient circle - top-left */}
      <div
        test-testid="test-bg-circle-top-left"
        aria-hidden="true"
        className="absolute z-50 -top-28 -left-24 w-96 h-96 rounded-full blur-[120px] bg-linear-to-br from-[#2cbcff]/30 to-primary/20 animate-float"
      />

      {/* Medium soft circle - top-right */}
      <div
        test-testid="test-bg-circle-top-right"
        aria-hidden="true"
        className="absolute -top-32 right-8 w-72 h-72 rounded-full blur-[100px] bg-[#ffb86b]/20 animate-float animation-delay-2000"
      />

      {/* Small accent circle - lower-right */}
      <div
        test-testid="test-bg-circlelower-right"
        aria-hidden="true"
        className="absolute bottom-6 right-6 w-36 h-36 rounded-full blur-[80px] bg-[#7afcff]/25 animate-float animation-delay-3500"
      />
    </>
  );
};

export default BgCircles;
