import React from 'react';

interface Props {
  left: React.ReactNode;
  right: React.ReactNode;
}

const SplitScreen: React.FC<Props> = ({ left, right }) => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="lg:w-1/2 border-r">{left}</div>
      <div className="lg:w-1/2">{right}</div>
    </div>
  );
};

export default SplitScreen;
