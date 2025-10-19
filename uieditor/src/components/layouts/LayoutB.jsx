// import React, { useState } from "react";
// import {
//   ChevronDown,
//   ChevronUp,
//   Maximize2,
//   Move,
//   ZoomIn,
//   ZoomOut,
//   Eye,
//   Camera,
// } from "lucide-react";
// import mainimage from "./images/product.png";
// import image1 from "./images/1.jpg";


// export default function FurnitureCustomizer() {
//   const [selectedArms, setSelectedArms] = useState("Fixed Arms");
//   const [selectedFinish, setSelectedFinish] = useState("Leather Brown");
//   const [selectedLegs, setSelectedLegs] = useState("Steel");
//   const [expandedSection, setExpandedSection] = useState("arms-finish");
//   const [isCustomizeExpanded, setIsCustomizeExpanded] = useState(false);

//   const leatherColors = [
//     { name: "Leather Brown", color: "#92400E" },
//     { name: "Brown", color: "#6B4423" },
//     { name: "Sage Green", color: "#6B7F5F" },
//     { name: "Forest Green", color: "#4A5F4F" },
//     { name: "Dark Green", color: "#3F5F4F" },
//     { name: "Navy", color: "#4F5273" },
//     { name: "Purple", color: "#6B4F6F" },
//     { name: "Deep Blue", color: "#3F5F7F" },
//     { name: "Rust Red", color: "#AF4F4F" },
//     { name: "Burgundy", color: "#6F2F3F" },
//     { name: "Teal", color: "#2F6F5F" },
//   ];

//   const siliconColors = [
//     { name: "Dark Brown", color: "#5F4F4F" },
//     { name: "Olive", color: "#6B7F5F" },
//     { name: "Moss Green", color: "#5F6F5F" },
//     { name: "Sea Green", color: "#5F7F6F" },
//     { name: "Slate", color: "#5F5F6F" },
//   ];

//   const thumbnails = [
//     "image1.png",
//     "image2.png",
//     "image3.png",
//     "image2.png",
//     "image3.png",
//   ];

//   return (
//     <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
//       {/* Left Side - Product Image */}
//       <div className="flex-1 bg-white lg:p-8 p-4 flex flex-col">
//         {/* Mobile: View Photos Button */}
//         <div className="lg:hidden absolute top-4 left-4 z-10">
//           <button className="px-4 py-2 bg-gray-800 text-white rounded-md flex items-center gap-2 text-sm">
//             <Camera size={16} />
//             <span>View photos</span>
//           </button>
//         </div>

//         {/* Desktop: Thumbnail Strip */}
//         <div className="hidden lg:flex flex-col gap-2 mb-4">
//           {thumbnails.map((thumb, idx) => (
//             // <div key={idx} className="w-16 h-16 border-2 border-gray-200 rounded cursor-pointer hover:border-gray-400 overflow-hidden">
//             //   <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200"></div>
//             // </div>
//             <div
//               key={idx}
//               className="w-16 h-16 border-2 border-gray-200 rounded cursor-pointer hover:border-gray-400 overflow-hidden"
//             >
//               <img
//                 src={image1} // use the image file name or path
//                 alt={`Thumbnail ${idx}`}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Main Product Image */}
//         <div className="flex-1 flex items-center justify-center relative">
//           <div className="relative w-full max-w-2xl">
//             {/* Wooden Cabinet Image Placeholder */}
//             <img src={mainimage} alt="Product 3D" />

//             {/* Control Buttons */}
//             <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
//               <button className="p-2 bg-white border border-gray-300 rounded shadow hover:bg-gray-50">
//                 <Maximize2 size={20} />
//               </button>
//               <button className="p-2 bg-white border border-gray-300 rounded shadow hover:bg-gray-50">
//                 <Move size={20} />
//               </button>
//               <button className="p-2 bg-white border border-gray-300 rounded shadow hover:bg-gray-50">
//                 <ZoomIn size={20} />
//               </button>
//               <button className="p-2 bg-white border border-gray-300 rounded shadow hover:bg-gray-50">
//                 <ZoomOut size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

      

//       {/* Right Side / Bottom - Customization Panel */}
//       <div className="lg:w-96 w-full bg-white shadow-lg lg:overflow-y-auto">
//         {/* Mobile: Collapsible Header */}
//         <div className="lg:hidden">
//           <button
//             onClick={() => setIsCustomizeExpanded(!isCustomizeExpanded)}
//             className="w-full p-4 flex items-center justify-center border-b"
//           >
//             {isCustomizeExpanded ? (
//               <ChevronDown size={24} />
//             ) : (
//               <ChevronUp size={24} />
//             )}
//           </button>
//         </div>

//         <div
//           className={`p-6 ${
//             !isCustomizeExpanded ? "lg:block hidden" : "block"
//           }`}
//         >
//           {/* Product Title */}
//           <div className="flex items-center justify-between mb-6">
//             <h1 className="text-2xl font-bold">Cozy Longe chair</h1>
//             <button className="p-2 border border-gray-300 rounded flex items-center gap-2 text-sm">
//               <div className="w-5 h-5 border border-gray-800 rounded flex items-center justify-center">
//                 <div className="w-3 h-3 border-2 border-gray-800"></div>
//               </div>
//               <span className="hidden sm:inline">AR</span>
//             </button>
//           </div>

//           {/* Progress bars (placeholders) */}
//           <div className="mb-6">
//             <div className="h-2 bg-gray-200 rounded-full mb-2"></div>
//             <div className="h-2 bg-gray-200 rounded-full w-2/3"></div>
//           </div>

//           {/* Customize Section */}
//           <div className="mb-6">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-lg font-semibold">Customize your Chair</h2>
//               <button className="p-1">
//                 <div className="flex flex-col gap-1">
//                   <div className="w-4 h-0.5 bg-gray-800"></div>
//                   <div className="w-4 h-0.5 bg-gray-800"></div>
//                   <div className="w-4 h-0.5 bg-gray-800"></div>
//                 </div>
//               </button>
//             </div>

//             {/* Tabs for mobile */}
//             <div className="lg:hidden flex border-b mb-4">
//               <button className="flex-1 py-2 border-b-2 border-gray-800 font-medium text-sm">
//                 Arms Finish
//               </button>
//               <button className="flex-1 py-2 text-gray-500 text-sm">
//                 Arm Finish
//               </button>
//             </div>

//             {/* Desktop: Expandable sections */}
//             <div className="hidden lg:block">
//               {/* 1. Arms */}
//               <div className="mb-4 border-b pb-4">
//                 <button
//                   onClick={() =>
//                     setExpandedSection(expandedSection === "arms" ? "" : "arms")
//                   }
//                   className="w-full flex items-center justify-between"
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
//                       <div className="w-8 h-6 bg-gray-300 rounded-t-full"></div>
//                     </div>
//                     <div className="text-left">
//                       <div className="font-medium">1. Arms</div>
//                       <div className="text-sm text-gray-500">
//                         {selectedArms}
//                       </div>
//                     </div>
//                   </div>
//                   {expandedSection === "arms" ? (
//                     <ChevronUp size={20} />
//                   ) : (
//                     <ChevronDown size={20} />
//                   )}
//                 </button>
//               </div>

//               {/* 2. Arms Finish */}
//               <div className="mb-4">
//                 <button
//                   onClick={() =>
//                     setExpandedSection(
//                       expandedSection === "arms-finish" ? "" : "arms-finish"
//                     )
//                   }
//                   className="w-full flex items-center justify-between mb-3"
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="w-12 h-12 rounded overflow-hidden">
//                       <div className="w-full h-full bg-amber-800"></div>
//                     </div>
//                     <div className="text-left">
//                       <div className="font-medium">2. Arms Finish</div>
//                       <div className="text-sm text-gray-500">
//                         {selectedFinish}
//                       </div>
//                     </div>
//                   </div>
//                   {expandedSection === "arms-finish" ? (
//                     <ChevronUp size={20} />
//                   ) : (
//                     <ChevronDown size={20} />
//                   )}
//                 </button>

//                 {expandedSection === "arms-finish" && (
//                   <div className="pl-4">
//                     {/* Leather Section */}
//                     <div className="mb-4">
//                       <h3 className="text-xs font-semibold text-gray-400 mb-3">
//                         LEATHER
//                       </h3>
//                       <div className="grid grid-cols-5 gap-2 mb-3">
//                         {leatherColors.map((color, idx) => (
//                           <button
//                             key={idx}
//                             onClick={() => setSelectedFinish(color.name)}
//                             className={`w-12 h-12 rounded-full border-2 ${
//                               selectedFinish === color.name
//                                 ? "border-gray-800 ring-2 ring-gray-300"
//                                 : "border-gray-200"
//                             }`}
//                             style={{ backgroundColor: color.color }}
//                             title={color.name}
//                           ></button>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Silicon Section */}
//                     <div className="mb-4">
//                       <h3 className="text-xs font-semibold text-gray-400 mb-3">
//                         SILICON
//                       </h3>
//                       <div className="grid grid-cols-5 gap-2">
//                         {siliconColors.map((color, idx) => (
//                           <button
//                             key={idx}
//                             onClick={() => setSelectedFinish(color.name)}
//                             className={`w-12 h-12 rounded-full border-2 ${
//                               selectedFinish === color.name
//                                 ? "border-gray-800 ring-2 ring-gray-300"
//                                 : "border-gray-200"
//                             }`}
//                             style={{ backgroundColor: color.color }}
//                             title={color.name}
//                           ></button>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Aluminium Section */}
//                     <div>
//                       <h3 className="text-xs font-semibold text-gray-400 mb-3">
//                         ALUMINIUM
//                       </h3>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* 3. Legs Finish */}
//               {/* <div className="mb-6 border-b pb-4">
//                 <button
//                   onClick={() =>
//                     setExpandedSection(expandedSection === "legs" ? "" : "legs")
//                   }
//                   className="w-full flex items-center justify-between"
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center overflow-hidden">
//                       <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-400"></div>
//                     </div>
//                     <div className="text-left">
//                       <div className="font-medium">3. Legs Finish</div>
//                       <div className="text-sm text-gray-500">
//                         {selectedLegs}
//                       </div>
//                     </div>
//                   </div>
//                   {expandedSection === "legs" ? (
//                     <ChevronUp size={20} />
//                   ) : (
//                     <ChevronDown size={20} />
//                   )}
//                 </button>
//               </div> */}
//             </div>

//             {/* Mobile: Color Selection */}
//             <div className="lg:hidden">
//               {/* Leather Section */}
//               <div className="mb-6">
//                 <h3 className="text-xs font-semibold text-gray-400 mb-3">
//                   LEATHER
//                 </h3>
//                 <div className="grid grid-cols-7 gap-2">
//                   {leatherColors.slice(0, 7).map((color, idx) => (
//                     <button
//                       key={idx}
//                       onClick={() => setSelectedFinish(color.name)}
//                       className={`w-10 h-10 rounded-full border-2 ${
//                         selectedFinish === color.name
//                           ? "border-red-500 ring-2 ring-red-300"
//                           : "border-gray-300"
//                       }`}
//                       style={{ backgroundColor: color.color }}
//                       title={color.name}
//                     ></button>
//                   ))}
//                 </div>
//                 <div className="grid grid-cols-7 gap-2 mt-2">
//                   {leatherColors.slice(7).map((color, idx) => (
//                     <button
//                       key={idx}
//                       onClick={() => setSelectedFinish(color.name)}
//                       className={`w-10 h-10 rounded-full border-2 ${
//                         selectedFinish === color.name
//                           ? "border-red-500 ring-2 ring-red-300"
//                           : "border-gray-300"
//                       }`}
//                       style={{ backgroundColor: color.color }}
//                       title={color.name}
//                     ></button>
//                   ))}
//                 </div>
//               </div>

//               {/* Silicon Section */}
//               <div className="mb-6">
//                 <h3 className="text-xs font-semibold text-gray-400 mb-3">
//                   SILICON
//                 </h3>
//                 <div className="grid grid-cols-7 gap-2">
//                   {siliconColors.map((color, idx) => (
//                     <button
//                       key={idx}
//                       onClick={() => setSelectedFinish(color.name)}
//                       className={`w-10 h-10 rounded-full border-2 ${
//                         selectedFinish === color.name
//                           ? "border-red-500 ring-2 ring-red-300"
//                           : "border-gray-300"
//                       }`}
//                       style={{ backgroundColor: color.color }}
//                       title={color.name}
//                     ></button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Product Price - Desktop only */}
//           <div className="mb-6 hidden lg:block">
//             <h3 className="text-gray-600 mb-2">Product Price</h3>
//             <div className="flex items-center gap-2">
//               <span className="text-2xl font-bold">$ 200</span>
//               <span className="text-gray-400 line-through">$ 245</span>
//             </div>
//           </div>

//           {/* Add to Cart Button - Desktop only */}
//           <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-colors hidden lg:block">
//             Add to cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
