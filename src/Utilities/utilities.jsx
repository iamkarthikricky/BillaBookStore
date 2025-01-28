import { Skeleton } from 'antd';
import { useEffect, useState } from "react";

export const LoadingView=()=>{

    const [tileWidth, setTileWidth] = useState(114);

  // Update tilesToShow based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1440) {
        setTileWidth(184); // Large screens (e.g., 4 tiles)
      } else if (width >= 768) {
        setTileWidth(143); // Tablet screens (e.g., 3 tiles)
      } else {
        setTileWidth(114); // Extra small screens (e.g., 1 tile)
      }
    };

    handleResize(); // Call it initially
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className="flex flex-col my-2.5 gap-2.5 overflow-hidden">
        <div className="flex flex-row justify-between w-full">
        <Skeleton.Input
        size="small"
  active={true}
  style={{
    width: 16,
  }}
/>


          <Skeleton.Input active={true} size="small" />
          </div>
          <div className="flex flex-row gap-3 justify-between w-full">
    {Array.from({ length: 12 }).map((_, index) => (
      <Skeleton.Node
        key={index}
        active={true}
        style={{
          height: "150px", // Adjust height as per your layout
          borderRadius: "8px",
          width: tileWidth, // Adjust width as per your layout
        }}
      />
    ))}
    </div>
  </div>
  
  );

}