import React, { useState, useEffect } from "react";

const FakeCounter = ({ loading }: any) => {
  const [progress, setProgress] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setCurrentProgress((prevProgress) => {
          const newProgress = prevProgress + step;
          const calculatedProgress =
            Math.round((Math.atan(newProgress) / (Math.PI / 2)) * 100 * 1000) /
            1000;

          if (calculatedProgress >= 100) {
            clearInterval(interval);
          } else if (calculatedProgress >= 70) {
            setStep(0.1);
          }

          setProgress(calculatedProgress);
          return newProgress;
        });
      }, 100);

      return () => clearInterval(interval); // Cleanup interval on component unmount
    }
  }, [loading, step]);

  return (
    <div>
      <div className="progress_number mr-[10px]">{progress}%</div>
    </div>
  );
};

export default FakeCounter;
