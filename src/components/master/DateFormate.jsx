"use client";

import { useEffect, useState } from "react";

const DateFormate = () => {
  const [Year, setYear] = useState();
  useEffect(() => {
    const getYear = () => setYear(new Date().getFullYear());
    getYear();
  }, []);
  return (
    <>
      <p className="py-5 text-slate-300 text-center">
        Copyright © {Year} all rights apply
      </p>
    </>
  );
};

export default DateFormate;
